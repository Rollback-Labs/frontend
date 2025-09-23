import { useState, useCallback, useEffect } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract, useBalance } from 'wagmi';
import { useToast } from '@/hooks/use-toast';
import { parseUnits, formatUnits } from 'viem';

// Contract addresses
const RLB_TOKEN = "0xa563ae4f348e93c7f50e8fcbffafa44f5aed0b36";
const STAKING_CONTRACT = "0x7b4372f398f2917b5e6375746cfc2deca5b846f6";

// Simple ABIs
const ERC20_ABI = [
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {"name": "spender", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "outputs": [{"name": "", "type": "bool"}]
  }
] as const;

const STAKING_ABI = [
  {
    "name": "stake",
    "type": "function", 
    "stateMutability": "nonpayable",
    "inputs": [{"name": "amount", "type": "uint256"}],
    "outputs": []
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable", 
    "inputs": [],
    "outputs": []
  },
  {
    "name": "claimRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getStakeInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [{"name": "user", "type": "address"}],
    "outputs": [
      {"name": "amount", "type": "uint256"},
      {"name": "stakeTime", "type": "uint256"}, 
      {"name": "unlockTime", "type": "uint256"},
      {"name": "pendingRewards", "type": "uint256"},
      {"name": "canUnstake", "type": "bool"}
    ]
  }
] as const;

export interface UseSimpleStakingReturn {
  isConnected: boolean;
  userBalance: string;
  userStaked: string;
  userRewards: string;
  canUnstake: boolean;
  isApproving: boolean;
  isStaking: boolean;
  isUnstaking: boolean;
  isClaimingRewards: boolean;
  approveToken: (amount: string) => Promise<void>;
  stakeToken: (amount: string) => Promise<void>;
  unstakeToken: () => Promise<void>;
  claimRewards: () => Promise<void>;
}

export const useSimpleStaking = (): UseSimpleStakingReturn => {
  const { toast } = useToast();
  const { address, isConnected } = useAccount();
  const { writeContract, data: hash, error: writeError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });
  
  // Loading states
  const [isApproving, setIsApproving] = useState(false);
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isClaimingRewards, setIsClaimingRewards] = useState(false);
  const [pendingAction, setPendingAction] = useState<'approve' | 'stake' | 'unstake' | 'claim' | 'approve-stake' | null>(null);
  const [pendingStakeAmount, setPendingStakeAmount] = useState<string>("");

  // Get user's ROLL token balance
  const { data: balanceData } = useBalance({
    address,
    token: RLB_TOKEN as `0x${string}`,
  });

  // Get user's stake info
  const { data: userStakeInfo, refetch: refetchStakeInfo } = useReadContract({
    address: STAKING_CONTRACT as `0x${string}`,
    abi: STAKING_ABI,
    functionName: 'getStakeInfo',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
    }
  });

  // Handle transaction confirmations
  useEffect(() => {
    if (isConfirmed && pendingAction) {
      const action = pendingAction;
      setPendingAction(null);
      
      // Reset loading states
      setIsApproving(false);
      setIsStaking(false);
      setIsUnstaking(false);
      setIsClaimingRewards(false);
      
      // Handle different action types
      if (action === 'approve-stake') {
        // First approval completed, now auto-stake
        toast({
          title: "Approval successful!",
          description: "Starting automatic staking...",
        });
        
        // Auto-trigger stake
        setTimeout(() => {
          if (pendingStakeAmount) {
            setIsStaking(true);
            setPendingAction('stake');
            
            try {
              const amountWei = parseUnits(pendingStakeAmount, 18);
              
              writeContract({
                address: STAKING_CONTRACT as `0x${string}`,
                abi: STAKING_ABI,
                functionName: 'stake',
                args: [amountWei],
              });
              
              toast({
                title: "Auto-staking initiated",
                description: "Please confirm the staking transaction in your wallet.",
              });
              
              setPendingStakeAmount(""); // Clear the pending amount
            } catch (error: any) {
              setIsStaking(false);
              setPendingAction(null);
              toast({
                title: "Auto-staking failed",
                description: "Please try staking manually.",
                variant: "destructive",
              });
            }
          }
        }, 1000);
      } else {
        // Show success message for other actions
        toast({
          title: `${action.charAt(0).toUpperCase() + action.slice(1)} successful!`,
          description: `Transaction confirmed on blockchain.`,
        });

        // Refresh data
        setTimeout(() => {
          refetchStakeInfo();
        }, 2000);
      }
    }
  }, [isConfirmed, pendingAction, toast, refetchStakeInfo, writeContract, pendingStakeAmount]);

  // Handle transaction errors
  useEffect(() => {
    if (writeError && pendingAction) {
      setPendingAction(null);
      
      // Reset loading states
      setIsApproving(false);
      setIsStaking(false);
      setIsUnstaking(false);
      setIsClaimingRewards(false);
      
      toast({
        title: "Transaction failed",
        description: writeError.message || "Please try again.",
        variant: "destructive",
      });
    }
  }, [writeError, pendingAction, toast]);

  // Approve tokens (will auto-stake after approval)
  const approveToken = useCallback(async (amount: string) => {
    if (!address || !isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    const amountNum = parseFloat(amount);
    if (amountNum < 5000) {
      toast({
        title: "Amount too low",
        description: "Minimum stake is 5,000 ROLL tokens.",
        variant: "destructive",
      });
      return;
    }

    setIsApproving(true);
    setPendingAction('approve-stake');
    setPendingStakeAmount(amount); // Store amount for auto-staking
    
    try {
      const amountWei = parseUnits(amount, 18);
      
      writeContract({
        address: RLB_TOKEN as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [STAKING_CONTRACT as `0x${string}`, amountWei],
      });

      toast({
        title: "Approval submitted",
        description: "After approval, your tokens will be automatically staked.",
      });
      
    } catch (error: any) {
      console.error('Approval error:', error);
      setIsApproving(false);
      setPendingAction(null);
      setPendingStakeAmount("");
      toast({
        title: "Approval failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }, [address, isConnected, writeContract, toast]);

  // Stake tokens
  const stakeToken = useCallback(async (amount: string) => {
    if (!address || !isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    const amountNum = parseFloat(amount);
    if (amountNum < 5000) {
      toast({
        title: "Amount too low",
        description: "Minimum stake is 5,000 ROLL tokens.",
        variant: "destructive",
      });
      return;
    }

    setIsStaking(true);
    setPendingAction('stake');
    
    try {
      const amountWei = parseUnits(amount, 18);
      
      writeContract({
        address: STAKING_CONTRACT as `0x${string}`,
        abi: STAKING_ABI,
        functionName: 'stake',
        args: [amountWei],
      });

      toast({
        title: "Staking submitted",
        description: "Please confirm in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Staking error:', error);
      setIsStaking(false);
      setPendingAction(null);
      toast({
        title: "Staking failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }, [address, isConnected, writeContract, toast]);

  // Unstake tokens
  const unstakeToken = useCallback(async () => {
    if (!address || !isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    setIsUnstaking(true);
    setPendingAction('unstake');
    
    try {
      writeContract({
        address: STAKING_CONTRACT as `0x${string}`,
        abi: STAKING_ABI,
        functionName: 'unstake',
      });

      toast({
        title: "Unstaking submitted",
        description: "Please confirm in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Unstaking error:', error);
      setIsUnstaking(false);
      setPendingAction(null);
      toast({
        title: "Unstaking failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }, [address, isConnected, writeContract, toast]);

  // Claim rewards
  const claimRewards = useCallback(async () => {
    if (!address || !isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    setIsClaimingRewards(true);
    setPendingAction('claim');
    
    try {
      writeContract({
        address: STAKING_CONTRACT as `0x${string}`,
        abi: STAKING_ABI,
        functionName: 'claimRewards',
      });

      toast({
        title: "Claim submitted",
        description: "Please confirm in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Claim error:', error);
      setIsClaimingRewards(false);
      setPendingAction(null);
      toast({
        title: "Claim failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }, [address, isConnected, writeContract, toast]);

  // Extract user data from contract
  const userBalance = balanceData ? formatUnits(balanceData.value, balanceData.decimals) : "0";
  const userStaked = userStakeInfo ? formatUnits(userStakeInfo[0], 18) : "0";
  const userRewards = userStakeInfo ? formatUnits(userStakeInfo[3], 18) : "0";
  const canUnstake = userStakeInfo ? userStakeInfo[4] : false;

  return {
    isConnected,
    userBalance,
    userStaked,
    userRewards,
    canUnstake,
    isApproving: isApproving || (isConfirming && pendingAction === 'approve'),
    isStaking: isStaking || (isConfirming && pendingAction === 'stake'),
    isUnstaking: isUnstaking || (isConfirming && pendingAction === 'unstake'),
    isClaimingRewards: isClaimingRewards || (isConfirming && pendingAction === 'claim'),
    approveToken,
    stakeToken,
    unstakeToken,
    claimRewards,
  };
}; 