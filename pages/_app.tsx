import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CoinMarketProvider } from "../context/context";
import { NFTProvider } from "../context/nftContext"
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoinMarketProvider>
      <NFTProvider>
        <Component {...pageProps} />
      </NFTProvider>
    </CoinMarketProvider>
  );
}

export default MyApp;
