import { useState, useEffect, useCallback } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useToast } from '@/hooks/use-toast';
import { parseUnits } from 'viem';

export interface StakingPool {
  id: string;
  name: string;
  symbol: string;
  apy: number;
  totalStaked: string;
  minStakeAmount: string;
  lockPeriod: number;
  userStaked: string;
  pendingRewards: string;
  status: "active" | "paused" | "ended";
}

export interface StakingStats {
  totalValueLocked: string;
  totalRewardsDistributed: string;
  activeStakers: number;
  averageApy: number;
}

export interface UseWeb3StakingReturn {
  // Data
  stakingPool: StakingPool | null;
  stakingStats: StakingStats | null;
  userBalance: string;
  isConnected: boolean;
  
  // Loading states
  isLoading: boolean;
  isStaking: boolean;
  isUnstaking: boolean;
  isClaimingRewards: boolean;
  isApproving: boolean;
  
  // Functions
  stake: (amount: string) => Promise<void>;
  unstake: () => Promise<void>;
  claimRewards: () => Promise<void>;
  approveToken: (amount: string) => Promise<void>;
  
  // Calculations
  calculateRewards: (amount: string, period: "daily" | "monthly" | "yearly") => string;
  
  // Utils
  refreshData: () => void;
  needsApproval: (amount: string) => boolean;
}

export const useWeb3Staking = (): UseWeb3StakingReturn => {
  const { toast } = useToast();
  const { address, isConnected } = useAccount();
  const { writeContract, data: hash, error: writeError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });
  
  // Loading states
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isClaimingRewards, setIsClaimingRewards] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [pendingAction, setPendingAction] = useState<'approve' | 'stake' | 'unstake' | 'claim' | null>(null);

  // Get user's ROLL token balance
  const { data: balanceData } = useBalance({
    address,
    token: CONTRACTS.RLB_TOKEN as `0x${string}`,
  });

  // Only fetch user stake info when connected
  const { data: userStakeInfo, refetch: refetchUserStake } = useReadContract({
    address: CONTRACTS.STAKING_CONTRACT as `0x${string}`,
    abi: STAKING_ABI,
    functionName: 'getStakeInfo',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
    }
  });

  // Get user token allowance
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: CONTRACTS.RLB_TOKEN as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: address ? [address, CONTRACTS.STAKING_CONTRACT] : undefined,
    query: {
      enabled: !!address && isConnected,
    }
  });

  // Simple static pool data (no loading dependencies)
  const stakingPool: StakingPool = {
    id: "rollback",
    name: "Rollback Staking",
    symbol: "ROLL", 
    apy: 60, // Fixed 60% APY
    totalStaked: "0", // Will be updated if needed
    minStakeAmount: "5000", // Fixed minimum
    lockPeriod: 30, // Fixed 30 days
    userStaked: userStakeInfo ? formatTokenAmount(userStakeInfo[0]) : "0",
    pendingRewards: userStakeInfo ? formatTokenAmount(userStakeInfo[3]) : "0",
    status: "active" as const,
  };

  // Simple static stats
  const stakingStats: StakingStats = {
    totalValueLocked: "$0", // Simplified
    totalRewardsDistributed: "0",
    activeStakers: 0,
    averageApy: 60,
  };

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
      
      // Show success message based on action
      switch (action) {
        case 'approve':
          toast({
            title: "Approval successful!",
            description: "Tokens approved for staking. You can now stake.",
          });
          break;
        case 'stake':
          toast({
            title: "Staking successful!",
            description: "Your tokens have been staked successfully.",
          });
          break;
        case 'unstake':
          toast({
            title: "Unstaking successful!",
            description: "Your tokens have been unstaked successfully.",
          });
          break;
        case 'claim':
          toast({
            title: "Rewards claimed!",
            description: "Your rewards have been claimed successfully.",
          });
          break;
      }
      
      // Refresh data
      setTimeout(() => {
        refetchUserStake();
        refetchAllowance();
      }, 2000);
    }
  }, [isConfirmed, pendingAction, toast, refetchUserStake, refetchAllowance]);

  // Handle transaction errors
  useEffect(() => {
    if (writeError && pendingAction) {
      const action = pendingAction;
      setPendingAction(null);
      
      // Reset loading states
      setIsApproving(false);
      setIsStaking(false);
      setIsUnstaking(false);
      setIsClaimingRewards(false);
      
      toast({
        title: `${action.charAt(0).toUpperCase() + action.slice(1)} failed`,
        description: writeError.message || "Transaction failed. Please try again.",
        variant: "destructive",
      });
    }
  }, [writeError, pendingAction, toast]);

  // Refresh user data only
  const refreshData = useCallback(() => {
    if (isConnected && address) {
      refetchUserStake();
      refetchAllowance();
    }
  }, [isConnected, address, refetchUserStake, refetchAllowance]);

  // Check if approval is needed
  const needsApproval = useCallback((amount: string): boolean => {
    if (!allowance || !amount || !isConnected) return true;
    const amountBigInt = parseTokenAmount(amount);
    return allowance < amountBigInt;
  }, [allowance, isConnected]);

  // Calculate rewards (simple calculation)
  const calculateRewards = useCallback((amount: string, period: "daily" | "monthly" | "yearly" = "yearly"): string => {
    if (!amount) return "0.0000";
    
    const principal = parseFloat(amount);
    const apy = 0.60; // 60% APY
    const annualReward = principal * apy;
    
    switch (period) {
      case "daily":
        return (annualReward / 365).toFixed(4);
      case "monthly":
        return (annualReward / 12).toFixed(2);
      case "yearly":
        return annualReward.toFixed(2);
      default:
        return annualReward.toFixed(2);
    }
  }, []);

  // Approve tokens for staking
  const approveToken = useCallback(async (amount: string) => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to approve tokens.",
        variant: "destructive",
      });
      return;
    }

    setIsApproving(true);
    setPendingAction('approve');
    
    try {
      const amountBigInt = parseTokenAmount(amount);
      
      writeContract({
        address: CONTRACTS.RLB_TOKEN as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [CONTRACTS.STAKING_CONTRACT, amountBigInt],
      });

      toast({
        title: "Approval submitted",
        description: "Please confirm the transaction in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Approval error:', error);
      setIsApproving(false);
      setPendingAction(null);
      toast({
        title: "Approval failed",
        description: error.message || "Failed to approve tokens. Please try again.",
        variant: "destructive",
      });
    }
  }, [address, writeContract, toast]);

  // Stake tokens
  const stake = useCallback(async (amount: string) => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to stake tokens.",
        variant: "destructive",
      });
      return;
    }

    const amountBigInt = parseTokenAmount(amount);
    const minStake = parseTokenAmount("5000"); // 5k minimum
    
    if (amountBigInt < minStake) {
      toast({
        title: "Amount too low",
        description: "Minimum stake amount is 5,000 ROLL",
        variant: "destructive",
      });
      return;
    }

    setIsStaking(true);
    setPendingAction('stake');
    
    try {
      writeContract({
        address: CONTRACTS.STAKING_CONTRACT as `0x${string}`,
        abi: STAKING_ABI,
        functionName: 'stake',
        args: [amountBigInt],
      });

      toast({
        title: "Staking submitted",
        description: "Please confirm the transaction in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Staking error:', error);
      setIsStaking(false);
      setPendingAction(null);
      toast({
        title: "Staking failed",
        description: error.message || "Failed to stake tokens. Please try again.",
        variant: "destructive",
      });
    }
  }, [address, writeContract, toast]);

  // Unstake tokens
  const unstake = useCallback(async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to unstake tokens.",
        variant: "destructive",
      });
      return;
    }

    if (!userStakeInfo || userStakeInfo[0] === 0n) {
      toast({
        title: "No stake found",
        description: "You don't have any tokens staked.",
        variant: "destructive",
      });
      return;
    }

    const [, , , , canUnstake] = userStakeInfo;
    
    if (!canUnstake) {
      toast({
        title: "Tokens still locked",
        description: "Your tokens are still in the 30-day lock period.",
        variant: "destructive",
      });
      return;
    }

    setIsUnstaking(true);
    setPendingAction('unstake');
    
    try {
      writeContract({
        address: CONTRACTS.STAKING_CONTRACT as `0x${string}`,
        abi: STAKING_ABI,
        functionName: 'unstake',
      });

      toast({
        title: "Unstaking submitted",
        description: "Please confirm the transaction in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Unstaking error:', error);
      setIsUnstaking(false);
      setPendingAction(null);
      toast({
        title: "Unstaking failed",
        description: error.message || "Failed to unstake tokens. Please try again.",
        variant: "destructive",
      });
    }
  }, [address, userStakeInfo, writeContract, toast, refreshData]);

  // Claim rewards
  const claimRewards = useCallback(async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to claim rewards.",
        variant: "destructive",
      });
      return;
    }

    if (!userStakeInfo || userStakeInfo[3] === 0n) {
      toast({
        title: "No rewards to claim",
        description: "You don't have any pending rewards.",
        variant: "destructive",
      });
      return;
    }

    setIsClaimingRewards(true);
    setPendingAction('claim');
    
    try {
      writeContract({
        address: CONTRACTS.STAKING_CONTRACT as `0x${string}`,
        abi: STAKING_ABI,
        functionName: 'claimRewards',
      });

      toast({
        title: "Claim submitted",
        description: "Please confirm the transaction in your wallet.",
      });
      
    } catch (error: any) {
      console.error('Claim error:', error);
      setIsClaimingRewards(false);
      setPendingAction(null);
      toast({
        title: "Claim failed",
        description: error.message || "Failed to claim rewards. Please try again.",
        variant: "destructive",
      });
    }
  }, [address, userStakeInfo, writeContract, toast, refreshData]);

  return {
    // Data
    stakingPool,
    stakingStats,
    userBalance: balanceData ? formatUnits(balanceData.value, balanceData.decimals) : "0",
    isConnected,
    
    // Loading states
    isLoading: false, // No more loading dependencies
    isStaking: isStaking || (isConfirming && pendingAction === 'stake'),
    isUnstaking: isUnstaking || (isConfirming && pendingAction === 'unstake'),
    isClaimingRewards: isClaimingRewards || (isConfirming && pendingAction === 'claim'),
    isApproving: isApproving || (isConfirming && pendingAction === 'approve'),
    
    // Functions
    stake,
    unstake,
    claimRewards,
    approveToken,
    
    // Calculations
    calculateRewards,
    
    // Utils
    refreshData,
    needsApproval,
  };
}; 