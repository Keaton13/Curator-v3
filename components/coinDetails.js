import { useState, useEffect } from "react";
import Image from "next/image";
import Rate from "./cmc-table/Rate";
import RateFilled from "./buttons/RateFilled";
import DropDownBtn from "./buttons/DropDownBtn";
import WalletConnectModal from "./WalletConnectModal";

// coinDetails styles
const styles = {
  coinDetails: `min-h-screen text-white`,
  coinDetailsLinks: `flex mt-3 flex-wrap`,
  greyBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
  borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
  title: `text-gray-400 whitespace-nowrap mr-2`,
  coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
  coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
  coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
  coinRates: `w-full flex items-start justify-between`,
  flexBetween: `flex justify-between`,
};

const CoinDetails = ({ id, coinData, coinMetaData }) => {
  const [coinTextData, setCoinData] = useState({});

  // Filters coinMetaData and CoinData then sets to state
  useEffect(() => {
    if (coinData && coinMetaData) {
      let logo = coinMetaData.logo;
      let name = coinData.name;
      let symbol = coinData.symbol;
      let price = coinData.quote.USD.price.toLocaleString();
      let rate1h = coinData.quote.USD.percent_change_1h.toFixed(2);
      let rate24h = coinData.quote.USD.percent_change_24h.toFixed(2);
      let rate7d = coinData.quote.USD.percent_change_7d.toFixed(2);
      let rate30d = coinData.quote.USD.percent_change_30d.toFixed(2);
      let rate60d = coinData.quote.USD.percent_change_60d.toFixed(2);
      let rate90d = coinData.quote.USD.percent_change_90d.toFixed(2);
      let marketCap = coinData.quote.USD.market_cap.toLocaleString();
      let marketCapDominance =
        coinData.quote.USD.market_cap_dominance.toFixed(2);
      let fullyDilutedMarketCap =
        coinData.quote.USD.fully_diluted_market_cap.toLocaleString();
      let volume = coinData.quote.USD.volume_24h.toLocaleString();
      let volumeChange24h = coinData.quote.USD.volume_change_24h.toFixed(2);
      let circulatingSupply = coinData.circulating_supply.toLocaleString();
      let totalSupply = coinData.total_supply.toLocaleString();
      let website = coinMetaData.urls.website[0];
      let explorer = coinMetaData.urls.explorer[0];
      let sourceCode = coinMetaData.urls.source_code[0];
      let technicalCode = coinMetaData.urls.technical_doc[0];
      let reddit = coinMetaData.urls.reddit[0];
      let maxSupply;
      if (coinData.max_supply != null) {
        maxSupply = coinData.max_supply.toLocaleString();
      } else {
        maxSupply = "Infinite";
      }
      setCoinData({
        logo,
        name,
        symbol,
        price,
        rate1h,
        rate24h,
        rate7d,
        rate30d,
        rate60d,
        rate90d,
        marketCap,
        marketCapDominance,
        fullyDilutedMarketCap,
        volume,
        volumeChange24h,
        circulatingSupply,
        maxSupply,
        totalSupply,
        website,
        explorer,
        sourceCode,
        technicalCode,
        reddit,
      });
    }
  }, [coinData, coinMetaData]);

  return (
    <main className={styles.coinDetails}>
      {coinTextData ? (
        <div>
          <div className={styles.coinDetailsWrapper}>
            <div className="flex flex-col w-fit">
              <div className="flex items-center">
                <Image
                  src={coinTextData.logo}
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt=""
                />{" "}
                &nbsp; &nbsp;
                <div>
                  <div className="flex">
                    <p className="text-3xl">{coinTextData.name}</p>
                    &nbsp; &nbsp;&nbsp; &nbsp;
                    <p className={styles.coinSymbol}>{coinTextData.symbol}</p>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <div className={styles.coinDetailsLinks}>
                <a href={coinTextData.website}>
                  <div className={styles.greyBtn}>Website</div>
                </a>
                <a href={coinTextData.explorer}>
                  <div className={styles.greyBtn}>Explorer</div>
                </a>
                <a href={coinTextData.sourceCode}>
                  <div className={styles.greyBtn}>Source Code</div>
                </a>
                <a href={coinTextData.technicalCode}>
                  <div className={styles.greyBtn}>Technical code</div>
                </a>
                <a href={coinTextData.reddit}>
                  <div className={styles.greyBtn}>Reddit</div>
                </a>
              </div>
              <br />
              Topics
              <div className={[styles.coinDetailsLinks, "topics"]}>
                <div className={styles.greyBtn}>Mineable</div>
                <div className={styles.greyBtn}>PoW</div>
                <div className={styles.greyBtn}>SHA-256</div>
                <div className={styles.greyBtn}>Store of value</div>
              </div>
            </div>

            <div className="ml-16">
              <div className={styles.coinRates}>
                <div>
                  <p className="text-gray-400">
                    {coinTextData.name} ({coinTextData.symbol})
                  </p>
                  <div className="flex my-3">
                    <h1 className="text-4xl">${coinTextData.price}</h1>
                    <RateFilled rate={coinTextData.rate24h} />
                  </div>
                  <div className="flex items-start justify-between">
                      <Rate rate={coinTextData.rate1h} symbol={'1h'}/>
                      <Rate rate={coinTextData.rate30d} symbol={'30d'}/>
                  </div>
                  <div className="flex items-start justify-between">
                    <Rate rate={coinTextData.rate24h} symbol={'24h'}/>
                    <Rate rate={coinTextData.rate60d} symbol={'60d'}/>
                  </div>
                  <div className="flex items-start justify-between">
                    <Rate rate={coinTextData.rate7d} symbol={'7d'}/>
                    <Rate rate={coinTextData.rate90d} symbol={'90d'}/>
                  </div>
                </div>

                <div className="flex">
                  <DropDownBtn label="Buy" />
                  <DropDownBtn label="Exchange" />
                  <DropDownBtn label="Gaming" />
                  <DropDownBtn label="Earn Crypto" />
                </div>
              </div>

              <div className={styles.coinInfo}>
                <div>
                  <div>
                    <small className={styles.title}>Market Cap</small>
                  </div>
                  <small>${coinTextData.marketCap}</small>
                  {/* <Rate rate="0.53%" /> */}
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <small className={styles.title}>
                      Fully Diluted Market Cap
                    </small>
                  </div>
                  <small>${coinTextData.fullyDilutedMarketCap}</small>
                  {/* <Rate rate="0.53%" /> */}
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <div>
                      <small className={styles.title}>
                        Volume &nbsp;
                        <small className="coin-symbol">
                          {coinTextData.symbol}
                        </small>
                        {""}
                      </small>
                    </div>
                    <small>${coinTextData.volume}</small>
                    <Rate rate={coinTextData.volumeChange24h} symbol="24h" />
                  </div>
                  <br />
                  <div>
                    <div>
                      <small className={styles.title}>
                        Market Cap Dominance
                      </small>
                    </div>
                    <small>{coinTextData.marketCapDominance + "%"}</small>
                  </div>
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <div>
                      <small className={styles.title}>Circulating Supply</small>
                    </div>
                    <small>
                      {coinTextData.circulatingSupply}&nbsp;
                      {coinTextData.symbol}
                    </small>
                  </div>
                  <br />
                  <div>
                    <div className={styles.flexBetween}>
                      <div>
                        <small className={styles.title}>Max Supply</small>
                      </div>
                      <div>
                        <small>
                          {coinTextData.maxSupply}&nbsp;{coinTextData.symbol}
                        </small>
                      </div>
                    </div>
                    <div className={styles.flexBetween}>
                      <div>
                        <small className={styles.title}>Total Supply</small>
                      </div>
                      <div>
                        <small>
                          {coinTextData.totalSupply}&nbsp;{coinTextData.symbol}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <WalletConnectModal status={"Loading"} loadingText={"Loading Data..."}/>
          )}
    </main>
  );
};
export default CoinDetails;
