import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Minus,
  Gift,
  Wallet
} from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useSimpleStaking } from "@/hooks/useSimpleStaking";
import WalletConnect from "@/components/WalletConnect";

const SimpleStakingPage = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");
  const [needsApproval, setNeedsApproval] = useState(true);
  
  const {
    isConnected,
    userBalance,
    userStaked,
    userRewards,
    canUnstake,
    isApproving,
    isStaking,
    isUnstaking,
    isClaimingRewards,
    approveToken,
    stakeToken,
    unstakeToken,
    claimRewards,
  } = useSimpleStaking();

  const handleApprove = async () => {
    if (!stakeAmount) return;
    await approveToken(stakeAmount);
    setNeedsApproval(false); // Assume approval worked for UI purposes
  };

  const handleStake = async () => {
    if (!stakeAmount) return;
    await stakeToken(stakeAmount);
    setStakeAmount("");
  };

  const handleUnstake = async () => {
    await unstakeToken();
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

              {/* Static Pool Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rollback-primary">60%</div>
                  <div className="text-sm text-gray-600">APY Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5,000</div>
                  <div className="text-sm text-gray-600">Min Stake (ROLL)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">30</div>
                  <div className="text-sm text-gray-600">Lock Period (Days)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">250k</div>
                  <div className="text-sm text-gray-600">Reward Pool</div>
                </div>
              </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Left Column - Pool Information */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg h-fit">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-orange-500 mr-2">🪙</span>
                        Staking Pool
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 border-2 border-orange-300 bg-orange-50 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">Rollback Staking</h3>
                            <p className="text-sm text-gray-600">ROLL</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            active
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-gray-500 text-sm">APY</span>
                            <div className="font-semibold text-orange-600 text-lg">60%</div>
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm">Lock Period</span>
                            <div className="font-semibold text-gray-900">30d</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Total Staked:</span>
                            <span className="font-semibold">0 ROLL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Min Stake:</span>
                            <span className="font-semibold">5000 ROLL</span>
                          </div>
                        </div>
                      </div>

                      {/* Your Wallet Section */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Your Wallet</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Balance:</span>
                            <span className="font-semibold">{parseFloat(userBalance).toLocaleString()} ROLL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Staked:</span>
                            <span className="font-semibold">{parseFloat(userStaked).toLocaleString()} ROLL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Rewards:</span>
                            <span className="font-semibold text-green-600">{parseFloat(userRewards).toFixed(4)} ROLL</span>
                          </div>

                          {/* Rewards Progress Bar */}
                          {parseFloat(userStaked) > 0 && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Reward Progress</span>
                                <span className="text-gray-500">
                                  {((parseFloat(userRewards) / (parseFloat(userStaked) * 0.6)) * 100).toFixed(1)}%
                                </span>
                              </div>
                              <Progress 
                                value={Math.min((parseFloat(userRewards) / (parseFloat(userStaked) * 0.6)) * 100, 100)} 
                                className="h-2"
                              />
                              <div className="text-xs text-gray-500">
                                Progress towards full year rewards
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Claim Rewards Button */}
                        {parseFloat(userRewards) > 0 && (
                          <Button
                            onClick={handleClaimRewards}
                            disabled={isClaimingRewards}
                            size="sm"
                            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                          >
                            {isClaimingRewards ? (
                              <>
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                                Claiming...
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

                {/* Right Column - Staking Interface */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-orange-500 mr-2">⚡</span>
                          Rollback Staking Staking
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          60% APY
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Alert className="mb-6 bg-yellow-50 border-yellow-200">
                        <AlertDescription className="text-yellow-800">
                          This pool has a 30-day lock period. Your tokens will be locked and cannot be unstaked during this time.
                        </AlertDescription>
                      </Alert>

                      <Tabs defaultValue="stake" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-yellow-100">
                          <TabsTrigger value="stake" className="data-[state=active]:bg-yellow-300 data-[state=active]:text-yellow-900">Stake</TabsTrigger>
                          <TabsTrigger value="unstake" className="data-[state=active]:bg-yellow-300 data-[state=active]:text-yellow-900">Unstake</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="stake" className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Amount to Stake
                            </label>
                            <div className="relative">
                              <Input
                                type="number"
                                placeholder="Min: 5000 ROLL"
                                value={stakeAmount}
                                onChange={(e) => setStakeAmount(e.target.value)}
                                className="pr-20 bg-yellow-50 border-yellow-200"
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                ROLL
                              </div>
                            </div>
                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                              <span>Balance: {parseFloat(userBalance).toLocaleString()} ROLL</span>
                              <button 
                                onClick={() => setStakeAmount(userBalance)}
                                className="text-orange-600 hover:underline font-medium"
                              >
                                Max
                              </button>
                            </div>
                          </div>

                          <div className="bg-yellow-50 rounded-lg p-4 space-y-3 border border-yellow-200">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Estimated Daily Rewards:</span>
                              <span className="font-semibold">
                                {stakeAmount ? ((parseFloat(stakeAmount) * 0.6) / 365).toFixed(4) : "0.0000"} ROLL
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Estimated Monthly Rewards:</span>
                              <span className="font-semibold">
                                {stakeAmount ? ((parseFloat(stakeAmount) * 0.6) / 12).toFixed(4) : "0.0000"} ROLL
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Lock Period:</span>
                              <span className="font-semibold">30 days</span>
                            </div>
                          </div>

                          {needsApproval ? (
                            <Button 
                              onClick={handleApprove}
                              disabled={isApproving || !stakeAmount}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                              size="lg"
                            >
                              {isApproving ? (
                                <>
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                  Approving...
                                </>
                              ) : (
                                <>
                                  <Plus className="h-4 w-4 mr-2" />
                                  Approve ROLL
                                </>
                              )}
                            </Button>
                          ) : (
                            <Button 
                              onClick={handleStake}
                              disabled={isStaking || !stakeAmount}
                              className="w-full bg-rollback-primary hover:bg-rollback-primary/90 text-white"
                              size="lg"
                            >
                              {isStaking ? (
                                <>
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                  Staking...
                                </>
                              ) : (
                                <>
                                  <Plus className="h-4 w-4 mr-2" />
                                  Stake ROLL
                                </>
                              )}
                            </Button>
                          )}
                        </TabsContent>
                        
                        <TabsContent value="unstake" className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Unstake Your Tokens
                            </label>
                            <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-200">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">Your Staked Amount:</span>
                                <span className="font-semibold">{parseFloat(userStaked).toLocaleString()} ROLL</span>
                              </div>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">Lock Status:</span>
                                <span className={`font-semibold ${canUnstake ? 'text-green-600' : 'text-orange-600'}`}>
                                  {canUnstake ? '🔓 Unlocked' : '🔒 Locked (30 days)'}
                                </span>
                              </div>
                              {parseFloat(userStaked) === 0 && (
                                <div className="text-center text-gray-500 text-sm">
                                  No tokens staked yet
                                </div>
                              )}
                            </div>
                          </div>

                          <Button 
                            onClick={handleUnstake}
                            disabled={isUnstaking || !canUnstake || parseFloat(userStaked) === 0}
                            variant="outline"
                            className="w-full border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10 disabled:opacity-50"
                            size="lg"
                          >
                            {isUnstaking ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-rollback-primary mr-2"></div>
                                Unstaking...
                              </>
                            ) : (
                              <>
                                <Minus className="h-4 w-4 mr-2" />
                                {parseFloat(userStaked) > 0 ? `Unstake ${parseFloat(userStaked).toLocaleString()} ROLL` : 'Unstake ROLL'}
                              </>
                            )}
                          </Button>
                        </TabsContent>
                      </Tabs>
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

export default SimpleStakingPage; 