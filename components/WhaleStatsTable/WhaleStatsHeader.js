import React from "react";
import WhaleStatsTrendingCard from "./WhaleStatsTrendingCard";

const WhaleStatsHeader = () => {
    
    const styles = {
        trendingWrapper: `mx-auto max-w-screen-2xl`,
        h1: `text-3xl text-white`,
        flexCenter: `flex items-center`,
      };

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Crypto Whale Transactions and Stats
          </h1>
          <div className="flex">
            {/* <p className="text-gray-400">Highlights &nbsp;</p> */}
            {/* <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            /> */}
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            This data shows most recent transactions on different blockchains over 1 million dollars
          </p>
          <span>
            {/* <Rate rate={globalCryptoDataText.dailyPercentChange} /> */}
          </span>
          <p>
            {" "}
            &nbsp;{" "}
            &nbsp;
            <span className="underline">Read More</span>
          </p>
        </div>
        <br/>
        <div className={styles.flexCenter}>
            <>
            <WhaleStatsTrendingCard />
            <WhaleStatsTrendingCard />
            <WhaleStatsTrendingCard />
              {/* <TrendingCard
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
              /> */}
            </>
        </div>
      </div>
    </div>
  );
};

export default WhaleStatsHeader;
