/**
 * @perkos/util-chains
 * Multi-chain configuration utilities for EVM networks with USDC support
 */

import { defineChain } from "viem";
import type { Chain } from "viem";
import {
  bsc as viemBsc,
  bscTestnet as viemBscTestnet,
  linea as viemLinea,
  lineaSepolia as viemLineaSepolia,
  gnosis as viemGnosis,
  gnosisChiado as viemGnosisChiado,
  mantle as viemMantle,
  mantleSepoliaTestnet as viemMantleSepolia,
  unichain as viemUnichain,
  unichainSepolia as viemUnichainSepolia,
  metis as viemMetis,
  metisSepolia as viemMetisSepolia,
  abstract as viemAbstract,
  abstractTestnet as viemAbstractTestnet,
  goat as viemGoat,
} from "viem/chains";

// ============ Chain Definitions ============

// Avalanche Mainnet
export const avalanche = defineChain({
  id: 43114,
  name: "Avalanche C-Chain",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://snowtrace.io" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 11907934,
    },
  },
});

// Avalanche Fuji Testnet
export const avalancheFuji = defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://testnet.snowtrace.io" },
  },
  testnet: true,
});

// Celo Mainnet
export const celo = defineChain({
  id: 42220,
  name: "Celo",
  network: "celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO",
  },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] },
    public: { http: ["https://forno.celo.org"] },
  },
  blockExplorers: {
    default: { name: "Celo Explorer", url: "https://explorer.celo.org/mainnet" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599,
    },
  },
});

// Celo Sepolia Testnet
export const celoSepolia = defineChain({
  id: 11142220,
  name: "Celo Sepolia",
  network: "celo-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO",
  },
  rpcUrls: {
    default: { http: ["https://forno.celo-sepolia.celo-testnet.org"] },
    public: { http: ["https://forno.celo-sepolia.celo-testnet.org"] },
  },
  blockExplorers: {
    default: { name: "Celo Sepolia Explorer", url: "https://celo-sepolia.blockscout.com" },
  },
  testnet: true,
});

// Base Mainnet
export const base = defineChain({
  id: 8453,
  name: "Base",
  network: "base",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://mainnet.base.org"] },
    public: { http: ["https://mainnet.base.org"] },
  },
  blockExplorers: {
    default: { name: "BaseScan", url: "https://basescan.org" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 5022,
    },
  },
});

// Base Sepolia Testnet
export const baseSepolia = defineChain({
  id: 84532,
  name: "Base Sepolia",
  network: "base-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://sepolia.base.org"] },
    public: { http: ["https://sepolia.base.org"] },
  },
  blockExplorers: {
    default: { name: "BaseScan", url: "https://sepolia.basescan.org" },
  },
  testnet: true,
});

// Ethereum Mainnet
export const ethereum = defineChain({
  id: 1,
  name: "Ethereum",
  network: "ethereum",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://eth.llamarpc.com"] },
    public: { http: ["https://eth.llamarpc.com"] },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://etherscan.io" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14353601,
    },
  },
});

// Ethereum Sepolia Testnet
export const sepolia = defineChain({
  id: 11155111,
  name: "Sepolia",
  network: "sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia.org"] },
    public: { http: ["https://rpc.sepolia.org"] },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 751532,
    },
  },
  testnet: true,
});

// Polygon PoS Mainnet
export const polygon = defineChain({
  id: 137,
  name: "Polygon",
  network: "polygon",
  nativeCurrency: {
    decimals: 18,
    name: "POL",
    symbol: "POL",
  },
  rpcUrls: {
    default: { http: ["https://polygon-rpc.com"] },
    public: { http: ["https://polygon-rpc.com"] },
  },
  blockExplorers: {
    default: { name: "PolygonScan", url: "https://polygonscan.com" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 25770160,
    },
  },
});

// Polygon Amoy Testnet
export const polygonAmoy = defineChain({
  id: 80002,
  name: "Polygon Amoy",
  network: "polygon-amoy",
  nativeCurrency: {
    decimals: 18,
    name: "POL",
    symbol: "POL",
  },
  rpcUrls: {
    default: { http: ["https://rpc-amoy.polygon.technology"] },
    public: { http: ["https://rpc-amoy.polygon.technology"] },
  },
  blockExplorers: {
    default: { name: "PolygonScan", url: "https://amoy.polygonscan.com" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3127388,
    },
  },
  testnet: true,
});

// Monad Testnet
export const monadTestnet = defineChain({
  id: 10143,
  name: "Monad Testnet",
  network: "monad-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Monad",
    symbol: "MON",
  },
  rpcUrls: {
    default: { http: ["https://testnet-rpc.monad.xyz"] },
    public: { http: ["https://testnet-rpc.monad.xyz"] },
  },
  blockExplorers: {
    default: { name: "Monad Explorer", url: "https://testnet.monadexplorer.com" },
  },
  testnet: true,
});

// Monad Mainnet (Placeholder)
export const monad = defineChain({
  id: 10142,
  name: "Monad",
  network: "monad",
  nativeCurrency: {
    decimals: 18,
    name: "Monad",
    symbol: "MON",
  },
  rpcUrls: {
    default: { http: ["https://rpc.monad.xyz"] },
    public: { http: ["https://rpc.monad.xyz"] },
  },
  blockExplorers: {
    default: { name: "Monad Explorer", url: "https://monadexplorer.com" },
  },
});

// Arbitrum One Mainnet
export const arbitrum = defineChain({
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://arb1.arbitrum.io/rpc"] },
    public: { http: ["https://arb1.arbitrum.io/rpc"] },
  },
  blockExplorers: {
    default: { name: "Arbiscan", url: "https://arbiscan.io" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 7654707,
    },
  },
});

// Arbitrum Sepolia Testnet
export const arbitrumSepolia = defineChain({
  id: 421614,
  name: "Arbitrum Sepolia",
  network: "arbitrum-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
    public: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
  },
  blockExplorers: {
    default: { name: "Arbiscan", url: "https://sepolia.arbiscan.io" },
  },
  testnet: true,
});

// Optimism Mainnet
export const optimism = defineChain({
  id: 10,
  name: "OP Mainnet",
  network: "optimism",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://mainnet.optimism.io"] },
    public: { http: ["https://mainnet.optimism.io"] },
  },
  blockExplorers: {
    default: { name: "Optimism Explorer", url: "https://optimistic.etherscan.io" },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4286263,
    },
  },
});

// OP Sepolia Testnet
export const optimismSepolia = defineChain({
  id: 11155420,
  name: "OP Sepolia",
  network: "optimism-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://sepolia.optimism.io"] },
    public: { http: ["https://sepolia.optimism.io"] },
  },
  blockExplorers: {
    default: { name: "Optimism Explorer", url: "https://sepolia-optimism.etherscan.io" },
  },
  testnet: true,
});

// Unichain Mainnet
export const unichainChain: Chain = viemUnichain;

// Unichain Sepolia
export const unichainSepolia: Chain = viemUnichainSepolia;

// BSC Mainnet
export const bscChain: Chain = viemBsc;

// BSC Testnet
export const bscTestnet: Chain = viemBscTestnet;

// Linea Mainnet
export const lineaChain: Chain = viemLinea;

// Linea Sepolia
export const lineaSepolia: Chain = viemLineaSepolia;

// Gnosis Mainnet
export const gnosisChain: Chain = viemGnosis;

// Gnosis Chiado Testnet
export const gnosisChiado: Chain = viemGnosisChiado;

// Mantle Mainnet
export const mantleChain: Chain = viemMantle;

// Mantle Sepolia Testnet
export const mantleSepolia: Chain = viemMantleSepolia;

// Metis Mainnet
export const metisChain: Chain = viemMetis;

// Metis Sepolia Testnet
export const metisSepolia: Chain = viemMetisSepolia;

// MegaETH Mainnet
export const megaeth = defineChain({
  id: 4326,
  name: "MegaETH",
  network: "megaeth",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://mainnet.megaeth.com/rpc"] },
    public: { http: ["https://mainnet.megaeth.com/rpc"] },
  },
  blockExplorers: {
    default: { name: "MegaETH Explorer", url: "https://megaeth.blockscout.com" },
  },
});

// MegaETH Testnet
export const megaethTestnet = defineChain({
  id: 6343,
  name: "MegaETH Testnet",
  network: "megaeth-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://carrot.megaeth.com/rpc"] },
    public: { http: ["https://carrot.megaeth.com/rpc"] },
  },
  blockExplorers: {
    default: { name: "MegaETH Testnet Explorer", url: "https://megaeth-testnet.blockscout.com" },
  },
  testnet: true,
});

// Abstract Mainnet
export const abstractChain: Chain = viemAbstract;

// Abstract Testnet
export const abstractTestnet: Chain = viemAbstractTestnet;

// GOAT Mainnet
export const goatChain: Chain = viemGoat;

// GOAT Testnet
export const goatTestnet = defineChain({
  id: 48816,
  name: "GOAT Testnet3",
  network: "goat-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Bitcoin",
    symbol: "BTC",
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet3.goat.network"] },
    public: { http: ["https://rpc.testnet3.goat.network"] },
  },
  blockExplorers: {
    default: { name: "GOAT Explorer", url: "https://explorer.testnet3.goat.network" },
  },
  testnet: true,
});

// ============ Chain Registry ============

export const chains: Record<string, Chain> = {
  avalanche,
  "avalanche-fuji": avalancheFuji,
  celo,
  "celo-sepolia": celoSepolia,
  base,
  "base-sepolia": baseSepolia,
  ethereum,
  sepolia,
  polygon,
  "polygon-amoy": polygonAmoy,
  monad,
  "monad-testnet": monadTestnet,
  arbitrum,
  "arbitrum-sepolia": arbitrumSepolia,
  optimism,
  "optimism-sepolia": optimismSepolia,
};

// Mainnet only mapping
export const networkToChain: Record<string, Chain> = {
  avalanche,
  celo,
  base,
  ethereum,
  polygon,
  monad,
  arbitrum,
  optimism,
};

// ============ USDC Addresses ============

export const USDC_ADDRESSES: Record<number, `0x${string}`> = {
  // Avalanche C-Chain
  43114: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  // Avalanche Fuji
  43113: "0x5425890298aed601595a70AB815c96711a31Bc65",
  // Celo Mainnet
  42220: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
  // Celo Sepolia
  11142220: "0x0000000000000000000000000000000000000000",
  // Base Mainnet
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  // Base Sepolia
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  // Ethereum Mainnet
  1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  // Ethereum Sepolia
  11155111: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  // Polygon PoS Mainnet
  137: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  // Polygon Amoy
  80002: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
  // Monad Mainnet (Placeholder)
  10142: "0x0000000000000000000000000000000000000000",
  // Monad Testnet (Placeholder)
  10143: "0x0000000000000000000000000000000000000000",
  // Arbitrum One
  42161: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  // Arbitrum Sepolia
  421614: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
  // Optimism Mainnet
  10: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
  // OP Sepolia
  11155420: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
};

// ============ Chain IDs ============

export const CHAIN_IDS = {
  AVALANCHE: 43114,
  AVALANCHE_FUJI: 43113,
  CELO: 42220,
  CELO_SEPOLIA: 11142220,
  BASE: 8453,
  BASE_SEPOLIA: 84532,
  ETHEREUM: 1,
  SEPOLIA: 11155111,
  POLYGON: 137,
  POLYGON_AMOY: 80002,
  MONAD: 10142,
  MONAD_TESTNET: 10143,
  ARBITRUM: 42161,
  ARBITRUM_SEPOLIA: 421614,
  OPTIMISM: 10,
  OPTIMISM_SEPOLIA: 11155420,
  UNICHAIN: 130,
  UNICHAIN_SEPOLIA: 1301,
  BSC: 56,
  BSC_TESTNET: 97,
  LINEA: 59144,
  LINEA_SEPOLIA: 59141,
  GNOSIS: 100,
  GNOSIS_CHIADO: 10200,
  MANTLE: 5000,
  MANTLE_SEPOLIA: 5003,
  METIS: 1088,
  METIS_SEPOLIA: 59902,
  MEGAETH: 4326,
  MEGAETH_TESTNET: 6343,
  ABSTRACT: 2741,
  ABSTRACT_TESTNET: 11124,
  GOAT: 2345,
  GOAT_TESTNET: 48816,
} as const;

export type ChainId = (typeof CHAIN_IDS)[keyof typeof CHAIN_IDS];

// ============ Supported Networks ============

export const SUPPORTED_NETWORKS = [
  "avalanche",
  "avalanche-fuji",
  "celo",
  "celo-sepolia",
  "base",
  "base-sepolia",
  "ethereum",
  "sepolia",
  "polygon",
  "polygon-amoy",
  "monad",
  "monad-testnet",
  "arbitrum",
  "arbitrum-sepolia",
  "optimism",
  "optimism-sepolia",
  "unichain",
  "unichain-sepolia",
  "bsc",
  "bsc-testnet",
  "linea",
  "linea-sepolia",
  "gnosis",
  "gnosis-chiado",
  "mantle",
  "mantle-sepolia",
  "metis",
  "metis-sepolia",
  "megaeth",
  "megaeth-testnet",
  "abstract",
  "abstract-testnet",
  "goat",
  "goat-testnet",
] as const;

export type SupportedNetwork = (typeof SUPPORTED_NETWORKS)[number];

// ============ Utility Functions ============

/**
 * Get chain by chain ID
 */
export function getChainById(chainId: number): Chain | undefined {
  return Object.values(chains).find((chain) => chain.id === chainId);
}

/**
 * Get chain by network name
 */
export function getChainByNetwork(network: string): Chain | undefined {
  return chains[network] || networkToChain[network];
}

/**
 * Check if chain is a testnet
 */
export function isTestnet(chainId: number): boolean {
  const chain = getChainById(chainId);
  return chain?.testnet === true;
}

/**
 * Get USDC address for chain
 */
export function getUSDCAddress(chainId: number): `0x${string}` | undefined {
  return USDC_ADDRESSES[chainId];
}

/**
 * Get RPC URL for chain
 */
export function getRpcUrl(chainId: number): string | undefined {
  const chain = getChainById(chainId);
  return chain?.rpcUrls.default.http[0];
}

/**
 * Get native token symbol for network
 */
export function getNativeTokenSymbol(network: string): string {
  const chain = chains[network];
  return chain?.nativeCurrency?.symbol || "ETH";
}

/**
 * Get native token decimals for network
 */
export function getNativeTokenDecimals(network: string): number {
  const chain = chains[network];
  return chain?.nativeCurrency?.decimals || 18;
}

/**
 * Convert wei to native token decimal format
 */
export function weiToNativeToken(weiAmount: string, network: string): string {
  try {
    const decimals = getNativeTokenDecimals(network);
    const wei = BigInt(weiAmount);
    const divisor = BigInt(10 ** decimals);
    const whole = wei / divisor;
    const fraction = wei % divisor;

    const fractionStr = fraction.toString().padStart(decimals, "0");
    const trimmedFraction = fractionStr.slice(0, 6).replace(/0+$/, "");

    if (trimmedFraction) {
      return `${whole}.${trimmedFraction}`;
    }
    return whole.toString();
  } catch {
    return "0";
  }
}

/**
 * Get chain ID from network name
 */
export function getChainIdFromNetwork(network: string): number | undefined {
  const chain = getChainByNetwork(network);
  return chain?.id;
}

/**
 * Get network name from chain ID
 */
export function getNetworkFromChainId(chainId: number): string | undefined {
  for (const [network, chain] of Object.entries(chains)) {
    if (chain.id === chainId) {
      return network;
    }
  }
  return undefined;
}

/**
 * Check if network is supported
 */
export function isSupportedNetwork(network: string): network is SupportedNetwork {
  return SUPPORTED_NETWORKS.includes(network as SupportedNetwork);
}

/**
 * Get block explorer URL for chain
 */
export function getBlockExplorerUrl(chainId: number): string | undefined {
  const chain = getChainById(chainId);
  return chain?.blockExplorers?.default.url;
}

/**
 * Get transaction URL on block explorer
 */
export function getTxUrl(chainId: number, txHash: string): string | undefined {
  const explorerUrl = getBlockExplorerUrl(chainId);
  if (!explorerUrl) return undefined;
  return `${explorerUrl}/tx/${txHash}`;
}

/**
 * Get address URL on block explorer
 */
export function getAddressUrl(chainId: number, address: string): string | undefined {
  const explorerUrl = getBlockExplorerUrl(chainId);
  if (!explorerUrl) return undefined;
  return `${explorerUrl}/address/${address}`;
}

// Re-export Chain type from viem
export type { Chain } from "viem";
