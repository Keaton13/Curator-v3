import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CoinMarketProvider } from "../context/context";
import { NFTProvider } from "../context/nftContext";
import { WhaleProvider } from "../context/whaleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoinMarketProvider>
      <NFTProvider>
        <WhaleProvider>
          <Component {...pageProps} />
        </WhaleProvider>
      </NFTProvider>
    </CoinMarketProvider>
  );
}

export default MyApp;
