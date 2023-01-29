import { useState, useEffect } from "react";
import Image from "next/image";
import Rate from "./cmc-table/Rate";
import RateFilled from "./buttons/RateFilled";
import DropDownBtn from "./buttons/DropDownBtn";

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

const CoinDetails = ({
  id,
  coinData,
  coinMetaData,
}) => {
  const [coinTextData, setCoinData] = useState({});

  useEffect(() => {
    if(coinData && coinMetaData) {
      let logo = coinMetaData.logo;
      let name = coinData.name;
      let symbol = coinData.symbol;
      let price = coinData.quote.USD.price.toLocaleString();
      let marketCap = coinData.quote.USD.market_cap.toLocaleString();
      let fullyDilutedMarketCap = coinData.quote.USD.fully_diluted_market_cap.toLocaleString()
      let volume = coinData.quote.USD.volume_24h.toLocaleString();
      let circulatingSupply = coinData.circulating_supply.toLocaleString();
      let maxSupply
      if(coinData.max_supply != null) {
        maxSupply = coinData.max_supply.toLocaleString();
      } else {
        maxSupply = 'Infinite'
      }
      let totalSupply = coinData.total_supply.toLocaleString();
      setCoinData({
        logo, 
        name, 
        symbol, 
        price, 
        marketCap, 
        fullyDilutedMarketCap, 
        volume, 
        circulatingSupply, 
        maxSupply, 
        totalSupply
      });
    }
    console.log(coinData, coinMetaData)
  }, [coinData, coinMetaData])

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
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className={styles.coinDetailsLinks}>
                <div className={styles.greyBtn}>solana.com</div>
                <div className={styles.greyBtn}>Explorers</div>
                <div className={styles.greyBtn}>Community</div>
                <div className={styles.greyBtn}>Chat</div>
                <div className={styles.greyBtn}>Source code</div>
                <div className={styles.greyBtn}>Whitepaper</div>
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
                    <RateFilled />
                  </div>
                  <div className="flex items-start">
                    <p className="text-gray-400"> 15.26 ETH</p>
                    &nbsp;&nbsp;&nbsp;
                    <Rate isIncrement={false} rate="0.53%" />
                  </div>
                  <div className="flex items-start">
                    <p className="text-gray-400"> 24.33 BTC</p>
                    &nbsp;&nbsp;&nbsp;
                    <Rate isIncrement={true} rate="0.99%" />
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
                  <Rate isIncrement={true} rate="0.53%" />
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <small className={styles.title}>
                      Fully Diluted Market Cap
                    </small>
                  </div>
                  <small>${coinTextData.fullyDilutedMarketCap}</small>
                  <Rate isIncrement={true} rate="0.53%" />
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <div>
                      <small className={styles.title}>
                        Volume &nbsp;<small className="coin-symbol">{coinTextData.symbol}</small>{" "}
                      </small>
                    </div>
                    <small>${coinTextData.volume}</small>
                    <Rate isIncrement={true} rate={"0.92%"} />
                  </div>
                  <br />
                  <div>
                    <div>
                      <small className={styles.title}>
                        Volume / Market Cap
                      </small>
                    </div>
                    <small>0.03315</small>
                  </div>
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <div>
                      <small className={styles.title}>Circulating Supply</small>
                    </div>
                    <small>{coinTextData.circulatingSupply}&nbsp;{coinTextData.symbol}</small>
                  </div>
                  <br />
                  <div>
                    <div className={styles.flexBetween}>
                      <div>
                        <small className={styles.title}>Max Supply</small>
                      </div>
                      <div>
                        <small>{coinTextData.maxSupply}&nbsp;{coinTextData.symbol}</small>
                      </div>
                    </div>
                    <div className={styles.flexBetween}>
                      <div>
                        <small className={styles.title}>Total Supply</small>
                      </div>
                      <div>
                        <small>{coinTextData.totalSupply}&nbsp;{coinTextData.symbol}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};
export default CoinDetails;
