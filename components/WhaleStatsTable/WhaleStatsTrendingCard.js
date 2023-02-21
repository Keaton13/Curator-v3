import React from "react";
import MoreButton from "../MoreButton";
import Image from "next/image";

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: {
    display: "flex",
    justifyContent: "space-between"
  },
  transactionAmt: {
    fontSize: "24px",
    fontWeight: "700",
    padding: "10px",
  },
  titleText: {
    fontSize: "16px",
    fontWeight: "400",
  },
};

const WhaleStatsTrendingCard = ({title, symbol}) => {
  return (
    <div className={styles.trendingCard}>
      <div style={styles.trendingCardWrapper}>
        <div className="flex">
          {/* {icon && <Image src={icon} width={27} height={27} alt="icon" />} */}
          &nbsp;&nbsp;
          <p style={styles.titleText}>Transaction Amount {title} </p>
          &nbsp;&nbsp;
          {symbol && <Image src={symbol} width={24}/>}
        </div>
        <MoreButton />
      </div>
      <div>
        <h1 style={styles.transactionAmt}>$13,251,468</h1>
      </div>
      <br/>
    </div>
  );
};

export default WhaleStatsTrendingCard;
