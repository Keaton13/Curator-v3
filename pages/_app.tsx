import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CoinMarketProvider } from "../context/context";
import { NFTProvider } from "../context/nftContext";
import { WhaleProvider } from "../context/whaleContext";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  const chains = [arbitrum, mainnet, polygon];

  // Configure and create Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "82915dadbee6155499f62dcf0e95a501" }),
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId: "82915dadbee6155499f62dcf0e95a501",
      version: "2", // or "2"
      appName: "web3Modal",
      chains,
    }),
    provider,
  });

  // Create Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      {/* Wagmi Configuration */}
      <WagmiConfig client={wagmiClient}>
        {/* CoinMarketProvider */}
        <CoinMarketProvider>
          {/* NFTProvider */}
          <NFTProvider>
            {/* WhaleProvider */}
            <WhaleProvider>
              <Component {...pageProps} />
            </WhaleProvider>
          </NFTProvider>
        </CoinMarketProvider>
      </WagmiConfig>

      {/* Web3Modal for connecting to Ethereum */}
      <Web3Modal
        projectId="82915dadbee6155499f62dcf0e95a501"
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default MyApp;