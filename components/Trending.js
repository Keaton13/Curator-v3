import React, { useState, useContext, useEffect } from "react";
import { CoinMarketContext } from "../context/context";
import ReactSwitch from "react-switch";
import fire from "../assets/fire.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import Rate from "./cmc-table/Rate";
import TrendingCard from "./TrendingCard";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`,
};


const Trending = () => {
  let { top100Coins, coinMetaData } = useContext(CoinMarketContext);
  const [checked, setChecked] = useState(false);
  const [sortedMatchingData24h, setSortedMatchingData24h] = useState(null);
  const [sortedMatchingData7d, setSortedMatchingData7d] = useState(null);
  const [sortedMatchingLast3, setSortedMatchingLast3] = useState(null);

  useEffect(() => {
    if (top100Coins && coinMetaData) {
      let top100CoinsCopy = top100Coins.slice();
      let coinMetaDataCopy = coinMetaData.slice();
      sortAndGetTop("percent_change_7d", top100CoinsCopy, coinMetaDataCopy);
      sortAndGetTop("percent_change_24h", top100CoinsCopy, coinMetaDataCopy);
      sortAndGetLast3(top100CoinsCopy, coinMetaDataCopy);
    }
  }, [top100Coins, coinMetaData]);

  function sortAndGetTop(field, top100CoinsCopy, coinMetaDataCopy, top = 3) {
    let sortedCoins = top100CoinsCopy.sort(
      (a, b) => b.quote.USD[field] - a.quote.USD[field]
    );
    let coins = sortedCoins.slice(0, top);
    let coinMap = new Map(coinMetaDataCopy.map((item) => [item.id, item]));
    let coinsMapped = coins.map((coin) => coinMap.get(coin.id));
    if(field == "percent_change_24h"){
      setSortedMatchingData24h({coins, coinsMapped});
    } else {
      setSortedMatchingData7d({coins, coinsMapped});
    }
  }

  function sortAndGetLast3(top100CoinsCopy, coinMetaDataCopy) {
    // console.log(top100Coins)
    let coins = top100CoinsCopy.slice(top100CoinsCopy.length - 3);
    let coinMap = new Map(coinMetaDataCopy.map((item) => [item.id, item]));
    let coinsMapped = coins.map((coin) => coinMap.get(coin.id));
    setSortedMatchingLast3({coins, coinsMapped})
  }

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Today's CryptoCurrency Prices by MarketCap
          </h1>

          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={true} rate="0.53%" />
          </span>
          <p>
            {" "}
            &nbsp; decrease over the last day.{" "}
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          {top100Coins && coinMetaData ? (
            <>
              <TrendingCard
                title="Trending"
                icon={fire}
                sortedMatchingMetaData = {sortedMatchingData7d}
              />
              <TrendingCard
                title="Biggest Gainers"
                icon={gainers}
                sortedMatchingMetaData = {sortedMatchingData24h}
              />
              <TrendingCard
                title="Recently Added"
                icon={recent}
                sortedMatchingMetaData = {sortedMatchingLast3}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
