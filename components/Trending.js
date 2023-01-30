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
      const sortedMatchingMetaData7d = sortAndGetTop("percent_change_7d");
      setSortedMatchingData7d(sortedMatchingMetaData7d);
      const sortedMatchingMetaData24h = sortAndGetTop("percent_change_24h");
      setSortedMatchingData24h(sortedMatchingMetaData24h);
      const sortedMatchingLast3 = sortAndGetLast3();
      setSortedMatchingLast3(sortedMatchingLast3);
    }
  }, [top100Coins, coinMetaData]);

  function sortAndGetTop(field, top = 3) {
    let sortedCoins = top100Coins.sort(
      (a, b) => b.quote.USD[field] - a.quote.USD[field]
    );
    let coins = sortedCoins.slice(0, top);
    let coinMap = new Map(coinMetaData.map((item) => [item.id, item]));
    let coinsMapped = coins.map((coin) => coinMap.get(coin.id));
    return {coins, coinsMapped}
  }

  function sortAndGetLast3() {
    console.log(top100Coins)
    let coins = top100Coins.slice(top100Coins.length - 3);
    let coinMap = new Map(coinMetaData.map((item) => [item.id, item]));
    let coinsMapped = coins.map((coin) => coinMap.get(coin.id));
    return {coins, coinsMapped}
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
