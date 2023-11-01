"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_ID || "";

const { chains, provider, webSocketProvider } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: alchemyKey, priority: 0 }),
    jsonRpcProvider({
      rpc: () => ({
        http: `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`,
      }),
      priority: 1,
    }),
    publicProvider({ priority: 2 }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "NFTHub",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { RainbowKitProvider, WagmiConfig, client, chains };
