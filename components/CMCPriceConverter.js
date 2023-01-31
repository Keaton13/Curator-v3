import React, { useEffect } from "react";
import Image from "next/image";
import converter from "../assets/converter.png";
import Usd from "../assets/svg/usd";

const styles = {
  converter: `flex items-center justify-between bg-[#171924] border border-grey-500/10 px-5 py-5 rounded-xl`,
  convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
};

const CMCPriceConverter = ({coinTextData}) => {

  const formatNum = num => {
    if(num){
      return Number(num.toFixed(2)).toLocaleString()
    }
  }

  return (
    <div>
      <h2>
        {coinTextData.fromSymbol} to USD Converter
      </h2>
      <br />
      <div className={styles.converter}>
        <div>
          <div className="flex">
            <div className="avatar-container">
              {coinTextData.fromLogo && coinTextData.fromLogo ? (
                <Image
                  src={coinTextData.fromLogo}
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt=""
                />
              ) : (
                <div></div>
              )}
            </div>
            &nbsp; &nbsp;
            <div>
              <p>{coinTextData.fromSymbol}</p>
              <h4>{coinTextData.from}</h4>
            </div>
          </div>
        </div>

        <div className="flex">
          <p className="text-3xl">1</p>
          &nbsp;&nbsp;
          <div>
            <Image alt="test" src={converter} width={40} height={40} />
          </div>
          &nbsp;&nbsp;
          <div className="flex">
            <Usd />
            &nbsp; &nbsp;
            <div>
              <p>USD</p>
              <h4>United States Dollars</h4>
            </div>
          </div>
        </div>
        <p className="text-3xl">${formatNum(coinTextData.price)}</p>
      </div>

      <div className={styles.convertButton}>Convert</div>
    </div>
  );
};

export default CMCPriceConverter;
