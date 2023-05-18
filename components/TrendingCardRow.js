import React from "react";
import Rate from "./cmc-table/Rate";
import Image from "next/image";

// Style for TrendingCardRow
const styles = {
  trendingCardRow: `flex items-center justify-between mb-4  text-[2rem] sm:text-[0.93rem]`,
};

const TrendingCardRow = ({ number, icon, name, symbol, rate }) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="w-full flex">
        <div className="mx-5">
          {icon && (
            <Image className="w-[40px]" src={icon} width={20} height={20} alt="Coin"/>
          )}
        </div>
        <div className="lg:mt-[.5rem]">
          <p className="font-bold">
            {name}
            <span className="text-gray-400"> {symbol}</span>
          </p>
        </div>
      </div>
      <Rate rate={rate} />
    </div>
  );
};

export default TrendingCardRow;
