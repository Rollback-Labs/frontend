import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

export interface StakingPool {
  id: string;
  name: string;
  symbol: string;
  apy: number;
  totalStaked: string;
  minStakeAmount: string;
  lockPeriod: number; // in days
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

export interface UseStakingReturn {
  stakingPools: StakingPool[];
  stakingStats: StakingStats;
  selectedPool: string;
  setSelectedPool: (poolId: string) => void;
  isStaking: boolean;
  isUnstaking: boolean;
  isClaimingRewards: boolean;
  stake: (amount: string, poolId: string) => Promise<void>;
  unstake: (amount: string, poolId: string) => Promise<void>;
  claimRewards: (poolId: string) => Promise<void>;
  getSelectedPoolData: () => StakingPool | undefined;
  calculateRewards: (amount: string, apy: number, period: "daily" | "monthly" | "yearly") => string;
}

export const useStaking = (): UseStakingReturn => {
  const { toast } = useToast();
  const [selectedPool, setSelectedPool] = useState<string>("rollback");
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isClaimingRewards, setIsClaimingRewards] = useState(false);

  // Mock data - in a real app, this would come from smart contracts/API
  const [stakingPools] = useState<StakingPool[]>([
    {
      id: "rollback",
      name: "Rollback",
      symbol: "RLB",
      apy: 24.5,
      totalStaked: "2,450,000",
      minStakeAmount: "100",
      lockPeriod: 0, // No lock period
      userStaked: "1,250",
      pendingRewards: "45.67",
      status: "active"
    },
    {
      id: "rollback-lp",
      name: "RLB-ETH LP",
      symbol: "RLB-ETH",
      apy: 48.2,
      totalStaked: "890,000",
      minStakeAmount: "0.1",
      lockPeriod: 30,
      userStaked: "2.5",
      pendingRewards: "12.34",
      status: "active"
    },
    {
      id: "rollback-vault",
      name: "Rollback Vault",
      symbol: "vRLB",
      apy: 18.7,
      totalStaked: "5,600,000",
      minStakeAmount: "500",
      lockPeriod: 90,
      userStaked: "0",
      pendingRewards: "0",
      status: "active"
    }
  ]);

  const [stakingStats] = useState<StakingStats>({
    totalValueLocked: "$12,450,000",
    totalRewardsDistributed: "$3,250,000",
    activeStakers: 15420,
    averageApy: 28.3
  });

  const getSelectedPoolData = useCallback(() => {
    return stakingPools.find(pool => pool.id === selectedPool);
  }, [stakingPools, selectedPool]);

  const calculateRewards = useCallback((amount: string, apy: number, period: "daily" | "monthly" | "yearly" = "yearly"): string => {
    if (!amount || parseFloat(amount) <= 0) return "0.0000";
    
    const principal = parseFloat(amount);
    const annualReward = principal * (apy / 100);
    
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

  const stake = useCallback(async (amount: string, poolId: string) => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid staking amount.",
        variant: "destructive"
      });
      return;
    }

    const pool = stakingPools.find(p => p.id === poolId);
    if (!pool) {
      toast({
        title: "Pool not found",
        description: "The selected staking pool could not be found.",
        variant: "destructive"
      });
      return;
    }

    if (parseFloat(amount) < parseFloat(pool.minStakeAmount)) {
      toast({
        title: "Amount too low",
        description: `Minimum stake amount is ${pool.minStakeAmount} ${pool.symbol}`,
        variant: "destructive"
      });
      return;
    }

    setIsStaking(true);
    
    try {
      // Simulate API call to smart contract
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would interact with smart contracts
      // and update the user's staked amount and pool totals
      
      toast({
        title: "Staking Successful!",
        description: `Successfully staked ${amount} ${pool.symbol}`,
      });
    } catch (error) {
      toast({
        title: "Staking Failed",
        description: "There was an error processing your stake. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsStaking(false);
    }
  }, [stakingPools, toast]);

  const unstake = useCallback(async (amount: string, poolId: string) => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid unstaking amount.",
        variant: "destructive"
      });
      return;
    }

    const pool = stakingPools.find(p => p.id === poolId);
    if (!pool) {
      toast({
        title: "Pool not found",
        description: "The selected staking pool could not be found.",
        variant: "destructive"
      });
      return;
    }

    if (parseFloat(amount) > parseFloat(pool.userStaked)) {
      toast({
        title: "Insufficient staked amount",
        description: `You can only unstake up to ${pool.userStaked} ${pool.symbol}`,
        variant: "destructive"
      });
      return;
    }

    setIsUnstaking(true);
    
    try {
      // Simulate API call to smart contract
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would interact with smart contracts
      // Check for lock period, update user's staked amount, etc.
      
      toast({
        title: "Unstaking Successful!",
        description: `Successfully unstaked ${amount} ${pool.symbol}`,
      });
    } catch (error) {
      toast({
        title: "Unstaking Failed",
        description: "There was an error processing your unstake. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUnstaking(false);
    }
  }, [stakingPools, toast]);

  const claimRewards = useCallback(async (poolId: string) => {
    const pool = stakingPools.find(p => p.id === poolId);
    if (!pool) {
      toast({
        title: "Pool not found",
        description: "The selected staking pool could not be found.",
        variant: "destructive"
      });
      return;
    }

    if (parseFloat(pool.pendingRewards) <= 0) {
      toast({
        title: "No rewards to claim",
        description: "You don't have any pending rewards to claim.",
        variant: "destructive"
      });
      return;
    }

    setIsClaimingRewards(true);
    
    try {
      // Simulate API call to smart contract
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would interact with smart contracts
      // to claim rewards and update pending rewards to 0
      
      toast({
        title: "Rewards Claimed!",
        description: `Successfully claimed ${pool.pendingRewards} ${pool.symbol} rewards`,
      });
    } catch (error) {
      toast({
        title: "Claim Failed",
        description: "There was an error claiming your rewards. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsClaimingRewards(false);
    }
  }, [stakingPools, toast]);

  return {
    stakingPools,
    stakingStats,
    selectedPool,
    setSelectedPool,
    isStaking,
    isUnstaking,
    isClaimingRewards,
    stake,
    unstake,
    claimRewards,
    getSelectedPoolData,
    calculateRewards,
  };
}; 