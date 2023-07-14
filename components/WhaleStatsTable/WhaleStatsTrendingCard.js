import React from "react";
import MoreButton from "../MoreButton";
import Image from "next/image";

// Styles for WhaleStatsTrendingCard
const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3 mb-5`,
  trendingCardWrapper: `flex justify-between`,
  transactionAmt: `text-3xl xl:text-2xl font-bold pt-3 pb-3`,
  exchangeAmt: `text-3xl xl:text-2xl font-bold pt-3 pb-3`,
  titleText: `text-3xl xl:text-xl`
};

const WhaleStatsTrendingCard = ({ title, symbol, total, amtIn, amtOut }) => {
  // Formats number for trending card
  const formatNum = (num) => {
    if (num) {
      return Number(num.toFixed(2)).toLocaleString();
    }
  };
  
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {/* {icon && <Image src={icon} width={27} height={27} alt="icon" />} */}
          <p className={styles.titleText}>Transaction Amount {title} </p>
          &nbsp;&nbsp;
          {symbol && <Image src={symbol} width={24} />}
        </div>
        <MoreButton />
      </div>
      <div>
        <h1 className={styles.transactionAmt}>${formatNum(total)}</h1>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className={styles.titleText}>{title} In: <p className={styles.exchangeAmt}>${formatNum(amtIn)}</p></p>
        </div>
        <div>
          <p className={styles.titleText}>{title} Out: <p className={styles.exchangeAmt}>${formatNum(amtOut)}</p></p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default WhaleStatsTrendingCard;
