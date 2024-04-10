import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../polyfills.js";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import {
//   rainbowWallet,
//   walletConnectWallet,
// } from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider, createConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Rufus The Dog",
  projectId: "0d0e2e62e1c1c79127d831782ed188fd",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  // wallets: [rainbowWallet, walletConnectWallet],
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
