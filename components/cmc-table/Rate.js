import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";

const styles = {
  rate: `rate flex items-center`,
  red: `ml-2 text-[#EA3943]`,
  green: `ml-2 text-[#17C784]`,
};

const Rate = ({ rate, symbol }) => {
  rate = parseFloat(rate).toFixed(2);
  return (
    <div className={styles.rate}>
      {symbol ? <small className="text-gray-400">{symbol}</small> : <></>}&nbsp;&nbsp;
      {rate >= 0 ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p className={rate >= 0 ? styles.green : styles.red}>
        {rate + "%"}
      </p>
    </div>
  );
};

export default Rate;
