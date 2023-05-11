import React from "react";
import WhaleStatsTrendingCard from "./WhaleStatsTrendingCard";
import btc from '../../assets/btc.png';
import eth from '../../assets/eth.png'
import usdt from '../../assets/usdt.png'

const WhaleStatsHeader = ({whaleTransactionData}) => {
    console.log(whaleTransactionData)
    const styles = {
        trendingWrapper: `mx-auto max-w-screen-2xl`,
        h1: `text-3xl text-white mt-4`,
        flexCenter: `flex items-center flex-col lg:flex-row lg:w-full w-3/4 m-auto`,
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
        <div className="flex lg:text-base text-2xl">
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
        {whaleTransactionData ? (
        <div className={styles.flexCenter}>
        <WhaleStatsTrendingCard title="BTC" symbol={btc} total={whaleTransactionData.totalBtcAmt} amtIn={whaleTransactionData.btcIn} amtOut={whaleTransactionData.btcOut}/>
        <WhaleStatsTrendingCard title="ETH" symbol={eth} total={whaleTransactionData.totalEthAmt} amtIn={whaleTransactionData.ethIn} amtOut={whaleTransactionData.ethOut}/>
        <WhaleStatsTrendingCard title="Combined" symbol={usdt} total={whaleTransactionData.combinedAmt} amtIn={whaleTransactionData.combinedIn} amtOut={whaleTransactionData.combinedOut}/>
    </div>
        ) : (
            <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default WhaleStatsHeader;
