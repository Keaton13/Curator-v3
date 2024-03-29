import React, { useState, useContext, useEffect } from "react";
import { CoinMarketContext } from "../context/context";
import ReactSwitch from "react-switch";
import fire from "../assets/fire.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import Rate from "./cmc-table/Rate";
import TrendingCard from "./TrendingCard";

// Styles for Trending component
const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center flex-col lg:flex-row lg:w-full w-3/4 m-auto`,
};

const Trending = () => {
  // Grabbing context data from Trending
  let { top100Coins, coinMetaData, globalCryptoData } =
    useContext(CoinMarketContext);

  const [checked, setChecked] = useState(false);
  const [sortedMatchingData24h, setSortedMatchingData24h] = useState(null);
  const [sortedMatchingData7d, setSortedMatchingData7d] = useState(null);
  const [sortedMatchingLast3, setSortedMatchingLast3] = useState(null);
  const [globalCryptoDataText, setGlobalCryptoDataText] = useState(null);

  // Perform actions when top100Coins, coinMetaData or globalCryptoData changes
  useEffect(() => {
    if (top100Coins && coinMetaData && globalCryptoData) {
      let top100CoinsCopy = top100Coins.slice();
      let coinMetaDataCopy = coinMetaData.slice();
      sortAndGetTop("percent_change_24h", top100CoinsCopy, coinMetaDataCopy);
      sortAndGetTop("percent_change_7d", top100CoinsCopy, coinMetaDataCopy);
      sortAndGetLast3(top100CoinsCopy, coinMetaDataCopy);
      getGlobalCryptoData();
    }
  }, [top100Coins, coinMetaData, globalCryptoData]);

  // Filters coins based off 24h percent change or 7d percent change then sets state
  function sortAndGetTop(field, top100CoinsCopy, coinMetaDataCopy, top = 3) {

    let sortedCoins = top100CoinsCopy.sort(
      (a, b) => b.quote.USD[field] - a.quote.USD[field]
    );

    let coins = sortedCoins.slice(0, top);
    let coinMap = new Map(coinMetaDataCopy.map((item) => [item.id, item]));
    let coinsMapped = coins.map((coin) => coinMap.get(coin.id));

    if (field == "percent_change_24h") {
      setSortedMatchingData24h({ coins, coinsMapped });
    } else {
      setSortedMatchingData7d({ coins, coinsMapped });
    }
  }

  // Filters coins based off last 3 coins in array
  function sortAndGetLast3(top100CoinsCopy, coinMetaDataCopy) {
    // console.log(top100Coins)
    let coins = top100CoinsCopy.slice(top100CoinsCopy.length - 3);
    let coinMap = new Map(coinMetaDataCopy.map((item) => [item.id, item]));
    let coinsMapped = coins.map((coin) => coinMap.get(coin.id));
    setSortedMatchingLast3({ coins, coinsMapped });
  }

  // Gets marketcap of coin and calls format number
  function getGlobalCryptoData() {
    let marketCapUsd = globalCryptoData.quote.USD.total_market_cap;
    let marketCapUsdConversion = (marketCapUsd / 1e12).toFixed(2);
    let dailyPercentChange = formatNum(
      globalCryptoData.quote.USD.total_market_cap_yesterday_percentage_change
    );

    setGlobalCryptoDataText({ marketCapUsdConversion, dailyPercentChange });
  }

  // formats number to 2 deciamls
  function formatNum(num) {
    if (num) {
      return Number(num.toFixed(2)).toLocaleString();
    }
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
        {globalCryptoDataText ? (
          <div className="flex lg:text-base text-2xl">
            <p className="text-gray-400">
              The global crypto market cap is{" "}
              {globalCryptoDataText.marketCapUsdConversion} Trillion, a
            </p>
            <span>
              <Rate rate={globalCryptoDataText.dailyPercentChange} />
            </span>
            <p>
              {" "}
              &nbsp;{" "}
              {globalCryptoDataText.dailyPercentChange >= 0
                ? "increase over the last day"
                : "decrease over the last day"}
              &nbsp;
              <span className="underline">Read More</span>
            </p>
          </div>
        ) : (
          <></>
        )}
        <br />

        <div className={styles.flexCenter}>
          {top100Coins && coinMetaData ? (
            <>
              <TrendingCard
                title="Trending"
                icon={fire}
                sortedMatchingMetaData={sortedMatchingData7d}
                feild={"7d"}
              />
              <TrendingCard
                title="Biggest Gainers"
                icon={gainers}
                sortedMatchingMetaData={sortedMatchingData24h}
                feild={"24h"}
              />
              <TrendingCard
                title="Recently Added"
                icon={recent}
                sortedMatchingMetaData={sortedMatchingLast3}
                feild={"Last3Added"}
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
