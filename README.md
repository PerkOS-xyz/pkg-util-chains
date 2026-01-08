# @perkos/util-chains

Multi-chain configuration utilities for EVM networks with USDC support. Provides chain definitions, USDC token addresses, and utility functions for 16 blockchain networks.

## Installation

```bash
npm install @perkos/util-chains
```

## Overview

This package provides:

- **16 Chain Definitions**: Pre-configured viem chain objects
- **USDC Addresses**: Token addresses for all supported networks
- **Utility Functions**: Chain lookups, explorers, conversions
- **TypeScript Types**: Full type safety with `SupportedNetwork` and `ChainId`

## Supported Networks

| Network | Chain ID | Type | Native Token |
|---------|----------|------|--------------|
| Avalanche C-Chain | 43114 | Mainnet | AVAX |
| Avalanche Fuji | 43113 | Testnet | AVAX |
| Base | 8453 | Mainnet | ETH |
| Base Sepolia | 84532 | Testnet | ETH |
| Ethereum | 1 | Mainnet | ETH |
| Sepolia | 11155111 | Testnet | ETH |
| Polygon | 137 | Mainnet | POL |
| Polygon Amoy | 80002 | Testnet | POL |
| Arbitrum One | 42161 | Mainnet | ETH |
| Arbitrum Sepolia | 421614 | Testnet | ETH |
| Optimism | 10 | Mainnet | ETH |
| OP Sepolia | 11155420 | Testnet | ETH |
| Celo | 42220 | Mainnet | CELO |
| Celo Sepolia | 11142220 | Testnet | CELO |
| Monad | 10142 | Mainnet | MON |
| Monad Testnet | 10143 | Testnet | MON |

## Usage

### Import Chain Definitions

```typescript
import {
  avalanche,
  base,
  ethereum,
  polygon,
  arbitrum,
  optimism,
  chains
} from '@perkos/util-chains';

// Use individual chain
console.log(avalanche.id);        // 43114
console.log(avalanche.name);      // "Avalanche C-Chain"

// Access all chains via registry
const chain = chains['base-sepolia'];
console.log(chain.rpcUrls.default.http[0]);
```

### Get Chain by ID or Network

```typescript
import {
  getChainById,
  getChainByNetwork,
  getChainIdFromNetwork,
  getNetworkFromChainId
} from '@perkos/util-chains';

// Get chain by ID
const chain = getChainById(8453);
console.log(chain?.name); // "Base"

// Get chain by network name
const baseChain = getChainByNetwork('base');

// Convert between network name and chain ID
const chainId = getChainIdFromNetwork('avalanche'); // 43114
const network = getNetworkFromChainId(43114);       // "avalanche"
```

### USDC Token Addresses

```typescript
import { USDC_ADDRESSES, getUSDCAddress } from '@perkos/util-chains';

// Direct lookup
const baseUsdc = USDC_ADDRESSES[8453];
// => "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

// Via function
const usdcAddress = getUSDCAddress(43114);
// => "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
```

### Check Network Type

```typescript
import { isTestnet, isSupportedNetwork } from '@perkos/util-chains';

isTestnet(84532);  // true (Base Sepolia)
isTestnet(8453);   // false (Base Mainnet)

isSupportedNetwork('base');     // true
isSupportedNetwork('unknown');  // false
```

### RPC and Block Explorer URLs

```typescript
import {
  getRpcUrl,
  getBlockExplorerUrl,
  getTxUrl,
  getAddressUrl
} from '@perkos/util-chains';

// Get RPC URL
const rpc = getRpcUrl(8453);
// => "https://mainnet.base.org"

// Get block explorer
const explorer = getBlockExplorerUrl(8453);
// => "https://basescan.org"

// Get transaction URL
const txUrl = getTxUrl(8453, '0x123...');
// => "https://basescan.org/tx/0x123..."

// Get address URL
const addressUrl = getAddressUrl(8453, '0xabc...');
// => "https://basescan.org/address/0xabc..."
```

### Native Token Utilities

```typescript
import {
  getNativeTokenSymbol,
  getNativeTokenDecimals,
  weiToNativeToken
} from '@perkos/util-chains';

getNativeTokenSymbol('avalanche');   // "AVAX"
getNativeTokenSymbol('base');        // "ETH"
getNativeTokenSymbol('celo');        // "CELO"

getNativeTokenDecimals('ethereum');  // 18

// Convert wei to readable format
weiToNativeToken('1000000000000000000', 'ethereum');  // "1"
weiToNativeToken('1500000000000000000', 'base');      // "1.5"
```

## API Reference

### Chain Definitions

Individual chain exports:

```typescript
export const avalanche: Chain;
export const avalancheFuji: Chain;
export const base: Chain;
export const baseSepolia: Chain;
export const ethereum: Chain;
export const sepolia: Chain;
export const polygon: Chain;
export const polygonAmoy: Chain;
export const arbitrum: Chain;
export const arbitrumSepolia: Chain;
export const optimism: Chain;
export const optimismSepolia: Chain;
export const celo: Chain;
export const celoSepolia: Chain;
export const monad: Chain;
export const monadTestnet: Chain;
```

### Chain Registries

```typescript
// All chains (mainnet + testnet)
export const chains: Record<string, Chain>;

// Mainnet only
export const networkToChain: Record<string, Chain>;
```

### Constants

```typescript
// USDC addresses by chain ID
export const USDC_ADDRESSES: Record<number, `0x${string}`>;

// Chain ID constants
export const CHAIN_IDS: {
  AVALANCHE: 43114;
  AVALANCHE_FUJI: 43113;
  BASE: 8453;
  BASE_SEPOLIA: 84532;
  ETHEREUM: 1;
  SEPOLIA: 11155111;
  POLYGON: 137;
  POLYGON_AMOY: 80002;
  ARBITRUM: 42161;
  ARBITRUM_SEPOLIA: 421614;
  OPTIMISM: 10;
  OPTIMISM_SEPOLIA: 11155420;
  CELO: 42220;
  CELO_SEPOLIA: 11142220;
  MONAD: 10142;
  MONAD_TESTNET: 10143;
};

// Supported network names
export const SUPPORTED_NETWORKS: readonly [
  "avalanche", "avalanche-fuji",
  "celo", "celo-sepolia",
  "base", "base-sepolia",
  "ethereum", "sepolia",
  "polygon", "polygon-amoy",
  "monad", "monad-testnet",
  "arbitrum", "arbitrum-sepolia",
  "optimism", "optimism-sepolia"
];
```

### Utility Functions

| Function | Description |
|----------|-------------|
| `getChainById(chainId)` | Get chain by chain ID |
| `getChainByNetwork(network)` | Get chain by network name |
| `getChainIdFromNetwork(network)` | Convert network name to chain ID |
| `getNetworkFromChainId(chainId)` | Convert chain ID to network name |
| `isTestnet(chainId)` | Check if chain is a testnet |
| `isSupportedNetwork(network)` | Type guard for supported networks |
| `getUSDCAddress(chainId)` | Get USDC token address |
| `getRpcUrl(chainId)` | Get default RPC URL |
| `getBlockExplorerUrl(chainId)` | Get block explorer URL |
| `getTxUrl(chainId, txHash)` | Get transaction URL |
| `getAddressUrl(chainId, address)` | Get address URL |
| `getNativeTokenSymbol(network)` | Get native token symbol |
| `getNativeTokenDecimals(network)` | Get native token decimals |
| `weiToNativeToken(wei, network)` | Convert wei to readable format |

### Types

```typescript
// Supported network literal type
export type SupportedNetwork = typeof SUPPORTED_NETWORKS[number];

// Chain ID literal type
export type ChainId = typeof CHAIN_IDS[keyof typeof CHAIN_IDS];

// Re-exported from viem
export type { Chain } from 'viem';
```

## USDC Addresses Reference

| Chain ID | Network | USDC Address |
|----------|---------|--------------|
| 1 | Ethereum | `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` |
| 10 | Optimism | `0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85` |
| 137 | Polygon | `0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359` |
| 8453 | Base | `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` |
| 42161 | Arbitrum | `0xaf88d065e77c8cC2239327C5EDb3A432268e5831` |
| 43114 | Avalanche | `0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E` |
| 42220 | Celo | `0xcebA9300f2b948710d2653dD7B07f33A8B32118C` |
| 84532 | Base Sepolia | `0x036CbD53842c5426634e7929541eC2318f3dCF7e` |
| 421614 | Arbitrum Sepolia | `0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d` |
| 43113 | Avalanche Fuji | `0x5425890298aed601595a70AB815c96711a31Bc65` |
| 11155111 | Sepolia | `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238` |
| 11155420 | OP Sepolia | `0x5fd84259d66Cd46123540766Be93DFE6D43130D7` |
| 80002 | Polygon Amoy | `0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582` |

## Integration with Viem

```typescript
import { createPublicClient, http } from 'viem';
import { base, getUSDCAddress } from '@perkos/util-chains';

const client = createPublicClient({
  chain: base,
  transport: http()
});

const usdcAddress = getUSDCAddress(base.id);

// Read USDC balance
const balance = await client.readContract({
  address: usdcAddress!,
  abi: erc20Abi,
  functionName: 'balanceOf',
  args: ['0x...']
});
```

## Related Packages

- [@perkos/types-x402](https://www.npmjs.com/package/@perkos/types-x402) - Core x402 types
- [@perkos/scheme-exact](https://www.npmjs.com/package/@perkos/scheme-exact) - Exact payment scheme
- [@perkos/scheme-deferred](https://www.npmjs.com/package/@perkos/scheme-deferred) - Deferred payment scheme
- [@perkos/service-x402](https://www.npmjs.com/package/@perkos/service-x402) - x402 service orchestrator

## License

MIT
