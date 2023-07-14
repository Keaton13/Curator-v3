import React, { useEffect, useState } from "react";
import Image from "next/image";
import MoreButton from "./MoreButton";
import TrendingCardRow from "./TrendingCardRow";

// Styles for TrendingCard
const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3 mb-5`,
  trendingCardWrapper: `flex items-center justify-between`,
};

const TrendingCard = ({ title, icon, sortedMatchingMetaData, feild }) => {
  const [topCoins, setTopCoins] = useState(null);
  const [coinsMapped, setCoinsMapped] = useState(null);

  // Sets variables and saves to state on inital render and subsequent re-render 
  useEffect(() => {
    if (sortedMatchingMetaData) {
      const topCoins = sortedMatchingMetaData.coins;
      const coinsMapped = sortedMatchingMetaData.coinsMapped;
      setTopCoins(topCoins);
      setCoinsMapped(coinsMapped);
    }
  });
  
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="icon" />}
          &nbsp;&nbsp;
          <p className="bold font">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />
      {topCoins && coinsMapped ? (
        <div>
          <TrendingCardRow
            key={1}
            number={1}
            symbol={topCoins[0].symbol}
            name={topCoins[0].name}
            icon={coinsMapped[0].logo}
            rate={
              feild === "24h"
                ? topCoins[0].quote.USD.percent_change_24h
                : topCoins[0].quote.USD.percent_change_7d
            }
          />
          <TrendingCardRow
            key={2}
            number={2}
            symbol={topCoins[1].symbol}
            name={topCoins[1].name}
            icon={coinsMapped[1].logo}
            rate={
              feild === "24h"
                ? topCoins[1].quote.USD.percent_change_24h
                : topCoins[1].quote.USD.percent_change_7d
            }
          />
          <TrendingCardRow
            key={3}
            number={3}
            symbol={topCoins[2].symbol}
            name={topCoins[2].name}
            icon={coinsMapped[2].logo}
            rate={
              feild === "24h"
                ? topCoins[2].quote.USD.percent_change_24h
                : topCoins[2].quote.USD.percent_change_7d
            }
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default TrendingCard;
