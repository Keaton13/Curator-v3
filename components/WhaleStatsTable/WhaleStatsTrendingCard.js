import React from "react";
import MoreButton from "../MoreButton";
import Image from "next/image";

const styles = {
  trendingCard: `w-full p-5 py-4 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  transactionAmt: {
    fontSize: "24px",
    fontWeight: "700",
    padding: "20px 0px",
  },
  exchangeAmt: {
    fontSize: "20px",
    fontWeight: "700",
    padding: "5px 0px",
  },
  titleText: {
    fontSize: "16px",
    fontWeight: "400",
  },
};

const WhaleStatsTrendingCard = ({ title, symbol, total, amtIn, amtOut }) => {
  const formatNum = (num) => {
    if (num) {
      return Number(num.toFixed(2)).toLocaleString();
    }
  };
  return (
    <div className={styles.trendingCard}>
      <div style={styles.trendingCardWrapper}>
        <div className="flex">
          {/* {icon && <Image src={icon} width={27} height={27} alt="icon" />} */}
          <p style={styles.titleText}>Transaction Amount {title} </p>
          &nbsp;&nbsp;
          {symbol && <Image src={symbol} width={24} />}
        </div>
        <MoreButton />
      </div>
      <div>
        <h1 style={styles.transactionAmt}>${formatNum(total)}</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <p style={styles.titleText}>{title} In: <h2 style={styles.exchangeAmt}>${formatNum(amtIn)}</h2></p>
        </div>
        <div>
          <p style={styles.titleText}>{title} Out: <h2 style={styles.exchangeAmt}>${formatNum(amtOut)}</h2></p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default WhaleStatsTrendingCard;
