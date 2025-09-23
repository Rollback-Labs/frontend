import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Coins, 
  Users, 
  DollarSign, 
  Plus, 
  Minus,
  Gift,
  Zap,
  BarChart3,
  Info
} from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useWeb3Staking } from "@/hooks/useWeb3Staking";
import WalletConnect from "@/components/WalletConnect";

const StakingPage = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");
  
  const {
    stakingPool,
    stakingStats,
    userBalance,
    isConnected,
    isLoading,
    isStaking,
    isUnstaking,
    isClaimingRewards,
    isApproving,
    stake,
    unstake,
    claimRewards,
    approveToken,
    calculateRewards,
    needsApproval,
  } = useWeb3Staking();

  // Since we only have one pool now, we'll use the single pool data
  const selectedPoolData = stakingPool;

  const handleStake = async () => {
    if (needsApproval(stakeAmount)) {
      await approveToken(stakeAmount);
      return;
    }
    await stake(stakeAmount);
    setStakeAmount("");
  };

  const handleUnstake = async () => {
    await unstake();
    setUnstakeAmount("");
  };

  const handleClaimRewards = async () => {
    await claimRewards();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-rollback-light via-white to-rollback-light/50">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rollback-primary to-rollback-secondary">
                      Stake
                    </span>{" "}
                    & Earn
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mb-6 lg:mb-0">
                    Stake your ROLL tokens to earn 60% APY rewards while supporting the Rollback ecosystem. 
                    30-day lock period with 5,000 ROLL minimum stake.
                  </p>
                </div>
                
                {/* Connect Wallet Button */}
                <div className="flex justify-center lg:justify-end">
                  <WalletConnect compact={true} />
                </div>
              </div>

              {/* Stats Overview */}
              {stakingStats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <DollarSign className="h-8 w-8 text-rollback-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stakingStats.totalValueLocked}</div>
                    <div className="text-sm text-gray-600">Total Value Locked</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Gift className="h-8 w-8 text-rollback-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stakingStats.totalRewardsDistributed}</div>
                    <div className="text-sm text-gray-600">Rewards Distributed</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Users className="h-8 w-8 text-rollback-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stakingStats.activeStakers.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Active Stakers</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <TrendingUp className="h-8 w-8 text-rollback-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stakingStats.averageApy}%</div>
                    <div className="text-sm text-gray-600">APY Rate</div>
                  </motion.div>
                </div>
              )}


            </motion.div>
          </div>
        </section>

        {/* Main Staking Interface */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {!isConnected ? (
              <div className="text-center py-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-md mx-auto"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Staking?</h2>
                  <p className="text-gray-600 mb-8">Connect your wallet to view your stakes, claim rewards, and start earning 60% APY on your ROLL tokens.</p>
                  <WalletConnect />
                </motion.div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Pool Information */}
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Coins className="h-5 w-5 mr-2 text-rollback-primary" />
                            Staking Pool
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="p-4 rounded-lg border-2 border-rollback-primary bg-rollback-primary/5">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">{selectedPoolData.name}</h3>
                                <p className="text-sm text-gray-600">{selectedPoolData.symbol}</p>
                              </div>
                              <Badge className="bg-green-100 text-green-800">
                                {selectedPoolData.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">APY</span>
                                <div className="font-semibold text-rollback-primary">{selectedPoolData.apy}%</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Lock Period</span>
                                <div className="font-semibold">{selectedPoolData.lockPeriod === 0 ? "Flexible" : `${selectedPoolData.lockPeriod}d`}</div>
                              </div>
                            </div>
                            
                            <div className="mt-2 text-sm">
                              <span className="text-gray-500">Total Staked: </span>
                              <span className="font-semibold">{selectedPoolData.totalStaked} {selectedPoolData.symbol}</span>
                            </div>
                            
                            <div className="mt-2 text-sm">
                              <span className="text-gray-500">Min Stake: </span>
                              <span className="font-semibold">{selectedPoolData.minStakeAmount} {selectedPoolData.symbol}</span>
                            </div>
                          </div>

                          {/* Wallet Info */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Your Wallet</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Balance:</span>
                                <span className="font-semibold">{userBalance} {selectedPoolData.symbol}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Staked:</span>
                                <span className="font-semibold">{selectedPoolData.userStaked} {selectedPoolData.symbol}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Rewards:</span>
                                <span className="font-semibold text-green-600">{selectedPoolData.pendingRewards} {selectedPoolData.symbol}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Staking Interface */}
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Zap className="h-5 w-5 mr-2 text-rollback-primary" />
                              {selectedPoolData?.name} Staking
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {selectedPoolData?.apy}% APY
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {selectedPoolData?.lockPeriod > 0 && (
                            <Alert className="mb-6">
                              <Info className="h-4 w-4" />
                              <AlertDescription>
                                This pool has a {selectedPoolData.lockPeriod}-day lock period. 
                                Your tokens will be locked and cannot be unstaked during this time.
                              </AlertDescription>
                            </Alert>
                          )}

                          <Tabs defaultValue="stake" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                              <TabsTrigger value="stake">Stake</TabsTrigger>
                              <TabsTrigger value="unstake">Unstake</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="stake" className="space-y-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Amount to Stake
                                </label>
                                <div className="relative">
                                  <Input
                                    type="number"
                                    placeholder={`Min: ${selectedPoolData?.minStakeAmount} ${selectedPoolData?.symbol}`}
                                    value={stakeAmount}
                                    onChange={(e) => setStakeAmount(e.target.value)}
                                    className="pr-20"
                                  />
                                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                    {selectedPoolData?.symbol}
                                  </div>
                                </div>
                                <div className="flex justify-between mt-2 text-sm text-gray-500">
                                  <span>Balance: {userBalance} {selectedPoolData?.symbol}</span>
                                  <button 
                                    onClick={() => setStakeAmount(userBalance)}
                                    className="text-rollback-primary hover:underline"
                                  >
                                    Max
                                  </button>
                                </div>
                              </div>

                              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                  <span>Estimated Daily Rewards:</span>
                                  <span className="font-semibold">
                                    {calculateRewards(stakeAmount, "daily")} {selectedPoolData?.symbol}
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Estimated Monthly Rewards:</span>
                                  <span className="font-semibold">
                                    {calculateRewards(stakeAmount, "monthly")} {selectedPoolData?.symbol}
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Lock Period:</span>
                                  <span className="font-semibold">
                                    {selectedPoolData?.lockPeriod === 0 ? "No lock" : `${selectedPoolData?.lockPeriod} days`}
                                  </span>
                                </div>
                              </div>

                              <Button 
                                onClick={handleStake}
                                disabled={isStaking || isApproving || !stakeAmount}
                                className="w-full bg-rollback-primary hover:bg-rollback-primary/90 text-white"
                                size="lg"
                              >
                                {isApproving ? (
                                  <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    {isConnected ? "Confirming Approval..." : "Approving..."}
                                  </>
                                ) : isStaking ? (
                                  <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    {isConnected ? "Confirming Stake..." : "Staking..."}
                                  </>
                                ) : needsApproval(stakeAmount) ? (
                                  <>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Approve {selectedPoolData?.symbol}
                                  </>
                                ) : (
                                  <>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Stake {selectedPoolData?.symbol}
                                  </>
                                )}
                              </Button>
                            </TabsContent>
                            
                            <TabsContent value="unstake" className="space-y-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Amount to Unstake
                                </label>
                                <div className="relative">
                                  <Input
                                    type="number"
                                    placeholder={`Available: ${selectedPoolData?.userStaked} ${selectedPoolData?.symbol}`}
                                    value={unstakeAmount}
                                    onChange={(e) => setUnstakeAmount(e.target.value)}
                                    className="pr-20"
                                  />
                                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                    {selectedPoolData?.symbol}
                                  </div>
                                </div>
                                <div className="flex justify-between mt-2 text-sm text-gray-500">
                                  <span>Staked: {selectedPoolData?.userStaked} {selectedPoolData?.symbol}</span>
                                  <button 
                                    onClick={() => setUnstakeAmount(selectedPoolData?.userStaked || "0")}
                                    className="text-rollback-primary hover:underline"
                                  >
                                    Max
                                  </button>
                                </div>
                              </div>

                              <Button 
                                onClick={handleUnstake}
                                disabled={isUnstaking || !unstakeAmount}
                                variant="outline"
                                className="w-full border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10"
                                size="lg"
                              >
                                                            {isUnstaking ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-rollback-primary mr-2"></div>
                                {isConnected ? "Confirming Unstake..." : "Unstaking..."}
                              </>
                            ) : (
                                  <>
                                    <Minus className="h-4 w-4 mr-2" />
                                    Unstake {selectedPoolData?.symbol}
                                  </>
                                )}
                              </Button>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>

                {/* User Staking Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-rollback-primary" />
                        Your Staking Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Portfolio Summary */}
                      <div className="mb-8 p-4 bg-gradient-to-r from-rollback-primary/10 to-rollback-secondary/10 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Summary</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-rollback-primary">
                              {parseFloat(selectedPoolData?.userStaked || "0").toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Total Staked</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">
                              {parseFloat(selectedPoolData?.pendingRewards || "0").toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">Pending Rewards</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">
                              {parseFloat(selectedPoolData?.userStaked || "0") > 0 ? "1" : "0"}
                            </div>
                            <div className="text-sm text-gray-600">Active Pools</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                              {calculateRewards(selectedPoolData?.userStaked || "0", "monthly")}
                            </div>
                            <div className="text-sm text-gray-600">Monthly Est.</div>
                          </div>
                        </div>
                      </div>

                      {/* Single Pool Overview */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{selectedPoolData?.name}</h3>
                            <p className="text-sm text-gray-600">{selectedPoolData?.symbol}</p>
                          </div>
                          <Badge variant="outline">{selectedPoolData?.apy}% APY</Badge>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Staked:</span>
                            <span className="font-semibold">{selectedPoolData?.userStaked} {selectedPoolData?.symbol}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Pending Rewards:</span>
                            <span className="font-semibold text-green-600">{selectedPoolData?.pendingRewards} {selectedPoolData?.symbol}</span>
                          </div>
                          
                          {/* Rewards Progress Bar */}
                          {parseFloat(selectedPoolData?.userStaked || "0") > 0 && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Reward Progress</span>
                                <span className="text-gray-500">
                                  {((parseFloat(selectedPoolData?.pendingRewards || "0") / (parseFloat(selectedPoolData?.userStaked || "0") * 0.01)) * 100).toFixed(1)}%
                                </span>
                              </div>
                              <Progress 
                                value={Math.min((parseFloat(selectedPoolData?.pendingRewards || "0") / (parseFloat(selectedPoolData?.userStaked || "0") * 0.01)) * 100, 100)} 
                                className="h-2"
                              />
                            </div>
                          )}
                          
                          {/* Unlock Timer */}
                          {parseFloat(selectedPoolData?.userStaked || "0") > 0 && selectedPoolData?.lockPeriod > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Unlock Status:</span>
                              <span className="font-semibold text-orange-600">
                                🔒 {selectedPoolData?.lockPeriod} days remaining
                              </span>
                            </div>
                          )}
                          
                          {parseFloat(selectedPoolData?.userStaked || "0") > 0 && selectedPoolData?.lockPeriod === 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Unlock Status:</span>
                              <span className="font-semibold text-green-600">
                                🔓 Available anytime
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {parseFloat(selectedPoolData?.pendingRewards || "0") > 0 && (
                          <Button
                            onClick={handleClaimRewards}
                            disabled={isClaimingRewards}
                            size="sm"
                            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
                          >
                                                    {isClaimingRewards ? (
                          <>
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                            {isConnected ? "Confirming..." : "Claiming..."}
                          </>
                        ) : (
                              <>
                                <Gift className="h-3 w-3 mr-2" />
                                Claim Rewards
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* Floating Connect Wallet Button */}
        {!isConnected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3">
              <WalletConnect compact={true} />
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default StakingPage; 