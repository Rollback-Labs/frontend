
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Wallet, Clock, Plus, Settings, ChevronRight, BarChart4, Users, AlertTriangle } from "lucide-react";

const AppDashboard = () => {
  useEffect(() => {
    document.title = "App Dashboard - Rollback";
  }, []);

  return (
    <Layout>
      <div className="min-h-screen pt-20">
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">Dashboard</span>
                </h1>
                <p className="text-muted-foreground">
                  Manage your Rollback plans and monitor wallet activity
                </p>
              </div>
              <Button className="mt-4 md:mt-0 bg-rollback-primary hover:bg-rollback-primary/90 text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Rollback Plan
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-rollback-primary mr-2" />
                    <span className="text-2xl font-bold">3</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Protected Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Wallet className="h-5 w-5 text-rollback-primary mr-2" />
                    <span className="text-2xl font-bold">$125,430</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Closest Rollback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-rollback-primary mr-2" />
                    <span className="text-2xl font-bold">143 days</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="plans" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="plans">Active Plans</TabsTrigger>
                <TabsTrigger value="fallbacks">Fallback Wallets</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="plans">
                <div className="space-y-6">
                  {[1, 2, 3].map((plan) => (
                    <Card key={plan}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Plan #{plan}</CardTitle>
                            <CardDescription>Created on June 15, 2023</CardDescription>
                          </div>
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                            Active
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <Label className="text-xs text-muted-foreground">Primary Wallet</Label>
                            <div className="mt-1 flex items-center">
                              <div className="w-3 h-3 rounded-full bg-rollback-primary mr-2"></div>
                              <span className="text-sm font-medium">0x742d...8f44e</span>
                            </div>
                          </div>
                          
                          <div>
                            <Label className="text-xs text-muted-foreground">Inactivity Threshold</Label>
                            <div className="mt-1 flex items-center">
                              <Clock className="h-3 w-3 text-rollback-primary mr-2" />
                              <span className="text-sm font-medium">180 days</span>
                            </div>
                          </div>
                          
                          <div>
                            <Label className="text-xs text-muted-foreground">Last Activity</Label>
                            <div className="mt-1 flex items-center">
                              <Clock className="h-3 w-3 text-rollback-primary mr-2" />
                              <span className="text-sm font-medium">37 days ago</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <Label className="text-xs text-muted-foreground mb-2 block">Fallback Wallets</Label>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-rollback-light/30 rounded">
                              <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-rollback-primary mr-2"></div>
                                <span className="text-sm">0x123...abc</span>
                              </div>
                              <span className="text-xs text-muted-foreground">Primary Fallback</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-rollback-light/30 rounded">
                              <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-rollback-secondary mr-2"></div>
                                <span className="text-sm">0x456...def</span>
                              </div>
                              <span className="text-xs text-muted-foreground">Secondary Fallback</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-rollback-primary h-2 rounded-full" 
                              style={{ width: `${(37/180)*100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">37 days elapsed</span>
                            <span className="text-xs text-muted-foreground">143 days remaining</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10">
                          <Settings className="mr-2 h-4 w-4" />
                          Edit Plan
                        </Button>
                        <Button className="bg-rollback-primary hover:bg-rollback-primary/90 text-white">
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="fallbacks">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Fallback Wallets</CardTitle>
                    <CardDescription>Add and manage your trusted fallback wallets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="new-wallet">Add a new fallback wallet</Label>
                        <div className="flex mt-1">
                          <Input id="new-wallet" placeholder="0x..." className="rounded-r-none" />
                          <Button className="rounded-l-none bg-rollback-primary hover:bg-rollback-primary/90 text-white">
                            Add
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium mb-3">Your Fallback Wallets</h3>
                        <div className="space-y-3">
                          {[1, 2, 3].map((wallet) => (
                            <div key={wallet} className="flex items-center justify-between p-3 border border-border rounded">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-rollback-light/50 flex items-center justify-center mr-3">
                                  <Wallet className="h-4 w-4 text-rollback-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Wallet #{wallet}</p>
                                  <p className="text-xs text-muted-foreground">0x123...abc{wallet}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-rollback-primary">
                                  <Settings className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Settings</CardTitle>
                      <CardDescription>Configure your dashboard preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="default-threshold">Default Inactivity Threshold</Label>
                          <div className="flex mt-1">
                            <Input id="default-threshold" type="number" defaultValue={180} />
                            <div className="ml-2 flex items-center bg-muted px-3 rounded">
                              <span className="text-sm text-muted-foreground">days</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="notification-email">Notification Email</Label>
                          <Input id="notification-email" type="email" placeholder="your@email.com" className="mt-1" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-rollback-primary hover:bg-rollback-primary/90 text-white">
                        Save Settings
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Activity & Security</CardTitle>
                      <CardDescription>Review your account activity and security settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label className="mb-2 block">Account Activity</Label>
                          <div className="space-y-2">
                            {[
                              { icon: Users, text: "Connected Wallet", time: "2 hours ago" },
                              { icon: Shield, text: "Created New Plan", time: "1 day ago" },
                              { icon: Settings, text: "Updated Settings", time: "3 days ago" }
                            ].map((activity, i) => (
                              <div key={i} className="flex items-center p-2 bg-rollback-light/20 rounded">
                                <activity.icon className="h-4 w-4 text-rollback-primary mr-2" />
                                <span className="text-sm">{activity.text}</span>
                                <span className="ml-auto text-xs text-muted-foreground">{activity.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label className="mb-2 block">Security Recommendations</Label>
                          <div className="p-3 border border-orange-200 bg-orange-50 rounded flex items-start">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-orange-800">
                                Enable 2FA for additional security
                              </p>
                              <p className="text-xs text-orange-700 mt-1">
                                We recommend setting up two-factor authentication to better protect your account.
                              </p>
                              <Button size="sm" variant="outline" className="mt-2 h-8 text-xs border-orange-500 text-orange-700 hover:bg-orange-100">
                                Set Up Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Border Beam for the analytics section */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-rollback-primary/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-xl font-medium text-rollback-primary">Analytics</span>
          </div>
        </div>
        
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Activity Overview</CardTitle>
                    <CardDescription>Monitor your wallet activity and rollback status</CardDescription>
                  </div>
                  <Button variant="outline" className="border-rollback-primary text-rollback-primary hover:bg-rollback-primary/10">
                    <BarChart4 className="mr-2 h-4 w-4" />
                    Detailed Reports
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-rollback-light/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart4 className="h-12 w-12 text-rollback-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Activity charts and analytics will appear here once you have more data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AppDashboard;
