// Contract addresses - Update these with your deployed contract addresses
export const CONTRACTS = {
  // Your deployed RLB token address  
  RLB_TOKEN: "0xa563ae4f348e93c7f50e8fcbffafa44f5aed0b36",
  
  // Deployed staking contract address
  STAKING_CONTRACT: "0x7b4372f398f2917b5e6375746cfc2deca5b846f6",
} as const;

// Chain configuration
export const CHAIN_CONFIG = {
  chainId: 1, // Ethereum Mainnet
  name: "Ethereum Mainnet",
  rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/0pLOvg7iG9akx3SX2no6Xi8DHlosqUiq",
  blockExplorer: "https://etherscan.io",
} as const;

// ERC20 Token ABI (minimal for our needs)  
export const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function name() view returns (string)",
] as const;

// Rollback Staking Contract ABI
export const STAKING_ABI = [
  // Constants
  "function MINIMUM_STAKE() view returns (uint256)",
  "function LOCK_PERIOD() view returns (uint256)",
  "function APY_RATE() view returns (uint256)",
  "function BASIS_POINTS() view returns (uint256)",
  
  // State variables
  "function totalStaked() view returns (uint256)",
  "function totalRewardsDistributed() view returns (uint256)",
  "function rewardPoolRemaining() view returns (uint256)",
  "function stakingToken() view returns (address)",
  
  // Main functions
  "function stake(uint256 amount)",
  "function unstake()",
  "function claimRewards()",
  
  // View functions
  "function calculateRewards(address user) view returns (uint256)",
  "function getStakeInfo(address user) view returns (uint256 amount, uint256 stakeTime, uint256 unlockTime, uint256 pendingRewards, bool canUnstake)",
  "function getContractStats() view returns (uint256 _totalStaked, uint256 _totalRewardsDistributed, uint256 _rewardPoolRemaining, uint256 _currentAPY, uint256 _totalStakers)",
  "function getTimeUntilUnlock(address user) view returns (uint256)",
  "function getTotalEarnings(address user) view returns (uint256)",
  "function getRewardPoolSustainability() view returns (uint256 daysRemaining)",
  "function getContractBalance() view returns (uint256)",
  "function isContractSolvent() view returns (bool)",
  
  // Events
  "event Staked(address indexed user, uint256 amount, uint256 unlockTime)",
  "event Unstaked(address indexed user, uint256 amount)",
  "event RewardsClaimed(address indexed user, uint256 reward)",
  "event RewardPoolRefilled(uint256 amount)",
  "event EmergencyWithdraw(address indexed user, uint256 amount)",
] as const;

// Contract interaction configuration
export const CONTRACT_CONFIG = {
  // Gas limits for different operations
  GAS_LIMITS: {
    STAKE: 200000,
    UNSTAKE: 150000,
    CLAIM_REWARDS: 100000,
    APPROVE: 50000,
  },
  
  // Transaction confirmation blocks
  CONFIRMATION_BLOCKS: 2,
  
  // Polling intervals (in milliseconds)
  POLLING_INTERVAL: 10000, // 10 seconds
  
  // Token decimals
  TOKEN_DECIMALS: 18,
} as const;

// Helper functions
export const formatTokenAmount = (amount: bigint, decimals: number = 18): string => {
  const divisor = BigInt(10 ** decimals);
  const quotient = amount / divisor;
  const remainder = amount % divisor;
  
  if (remainder === 0n) {
    return quotient.toString();
  }
  
  const remainderStr = remainder.toString().padStart(decimals, '0');
  const trimmedRemainder = remainderStr.replace(/0+$/, '');
  
  if (trimmedRemainder === '') {
    return quotient.toString();
  }
  
  return `${quotient}.${trimmedRemainder}`;
};

export const parseTokenAmount = (amount: string, decimals: number = 18): bigint => {
  if (!amount || amount === '') return 0n;
  
  const [whole, fraction = ''] = amount.split('.');
  const wholeBigInt = BigInt(whole || '0');
  const fractionPadded = fraction.padEnd(decimals, '0').slice(0, decimals);
  const fractionBigInt = BigInt(fractionPadded || '0');
  
  return wholeBigInt * (10n ** BigInt(decimals)) + fractionBigInt;
};

// Contract addresses validation
export const validateContractAddresses = (): boolean => {
  const isValidAddress = (address: string): boolean => {
    return address !== "0x0000000000000000000000000000000000000000" && 
           address.length === 42 && 
           address.startsWith('0x');
  };
  
  return isValidAddress(CONTRACTS.RLB_TOKEN) && isValidAddress(CONTRACTS.STAKING_CONTRACT);
}; 