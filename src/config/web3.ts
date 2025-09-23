import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

// Project ID for WalletConnect (optional - you can get this from WalletConnect Cloud)
const projectId = 'your-project-id-here'; // TODO: Replace with actual WalletConnect project ID

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    metaMask(),
    // walletConnect({ projectId }), // Uncomment when you have a project ID
  ],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/0pLOvg7iG9akx3SX2no6Xi8DHlosqUiq'),
  },
});

// Export chain for easy access
export { mainnet as targetChain };

// Network switching helper
export const switchToTargetNetwork = async () => {
  try {
    if (typeof window !== 'undefined' && window.ethereum) {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${mainnet.id.toString(16)}` }],
      });
    }
  } catch (error: any) {
    // If the chain hasn't been added to MetaMask, add it
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: `0x${mainnet.id.toString(16)}`,
              chainName: 'Ethereum Mainnet',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
              },
              rpcUrls: ['https://eth-mainnet.g.alchemy.com/v2/0pLOvg7iG9akx3SX2no6Xi8DHlosqUiq'],
              blockExplorerUrls: ['https://etherscan.io'],
            },
          ],
        });
      } catch (addError) {
        console.error('Failed to add network:', addError);
        throw addError;
      }
    } else {
      console.error('Failed to switch network:', error);
      throw error;
    }
  }
};

// Declare global ethereum object for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (data: any) => void) => void;
      removeListener: (event: string, callback: (data: any) => void) => void;
    };
  }
} 