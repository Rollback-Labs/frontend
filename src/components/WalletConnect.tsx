import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, LogOut, AlertCircle } from 'lucide-react';
import { switchToTargetNetwork, targetChain } from '@/config/web3';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface WalletConnectProps {
  showBalance?: boolean;
  compact?: boolean;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ 
  showBalance = false, 
  compact = false 
}) => {
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();
  const [isSwitchingNetwork, setIsSwitchingNetwork] = useState(false);

  const isWrongNetwork = isConnected && chain?.id !== targetChain.id;

  const handleConnect = async (connector: any) => {
    try {
      connect({ connector });
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error.message || "Failed to connect wallet.",
        variant: "destructive",
      });
    }
  };

  const handleNetworkSwitch = async () => {
    setIsSwitchingNetwork(true);
    try {
      await switchToTargetNetwork();
      toast({
        title: "Network switched",
        description: `Successfully switched to ${targetChain.name}`,
      });
    } catch (error: any) {
      toast({
        title: "Network switch failed",
        description: error.message || "Failed to switch network.",
        variant: "destructive",
      });
    } finally {
      setIsSwitchingNetwork(false);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (!isConnected) {
    if (compact) {
      return (
        <div className="flex gap-2">
          {connectors.map((connector) => (
            <Button
              key={connector.uid}
              onClick={() => handleConnect(connector)}
              disabled={isPending}
              variant="outline"
              size="sm"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Connect
            </Button>
          ))}
        </div>
      );
    }

    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="h-5 w-5 mr-2" />
            Connect Wallet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-600 mb-4">
            Connect your wallet to start staking RLB tokens.
          </p>
          {connectors.map((connector) => (
            <Button
              key={connector.uid}
              onClick={() => handleConnect(connector)}
              disabled={isPending}
              variant="outline"
              className="w-full justify-start"
            >
              <Wallet className="h-4 w-4 mr-2" />
              {connector.name}
              {isPending && " (Connecting...)"}
            </Button>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (isWrongNetwork) {
    return (
      <Card className="w-full max-w-md mx-auto border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <AlertCircle className="h-5 w-5 mr-2" />
            Wrong Network
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-orange-700">
            Please switch to {targetChain.name} to use the staking features.
          </p>
          <div className="flex gap-2">
            <Button
              onClick={handleNetworkSwitch}
              disabled={isSwitchingNetwork}
              className="flex-1"
            >
              {isSwitchingNetwork ? "Switching..." : `Switch to ${targetChain.name}`}
            </Button>
            <Button
              onClick={() => disconnect()}
              variant="outline"
              size="sm"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="px-3 py-1">
          {formatAddress(address!)}
        </Badge>
        <Button
          onClick={() => disconnect()}
          variant="outline"
          size="sm"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="flex items-center text-green-800">
          <Wallet className="h-5 w-5 mr-2" />
          Wallet Connected
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-green-700 mb-1">Address:</p>
            <Badge variant="outline" className="font-mono">
              {formatAddress(address!)}
            </Badge>
          </div>
          
          {chain && (
            <div>
              <p className="text-sm text-green-700 mb-1">Network:</p>
              <Badge className="bg-green-100 text-green-800">
                {chain.name}
              </Badge>
            </div>
          )}
          
          <Button
            onClick={() => disconnect()}
            variant="outline"
            className="w-full"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Disconnect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletConnect; 