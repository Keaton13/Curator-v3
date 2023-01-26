import React from "react";
import Image from "next/image";
import converter from "../assets/converter.png";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import usdc from "../assets/usdc.png";
import usdt from "../assets/usdt.png";
import xrp from "../assets/xrp.png";
import cardano from "../assets/cardano.png";
import terra from "../assets/tera.png";
import solana from "../assets/solana.png";
import avalance from "../assets/avalanche.png";
import bnd from "../assets/bng.png";

const styles = {
  converter: `flex items-center justify-between bg-[#171924] border border-grey-500/10 px-5 py-5 rounded-xl`,
  convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
};

const CMCPriceConverter = ({
  from,
  to,
  fromSymbol,
  toSymbol,
  fromLogo,
  price,
}) => {
  const coinIcon = () => {
    switch (from) {
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Ethereum":
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Tether":
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Uscd":
        return (
          <Image
            src={usdc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Xrp":
        return (
          <Image
            src={xrp}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Cardano":
        return (
          <Image
            src={cardano}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Terra":
        return (
          <Image
            src={terra}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Solana":
        return (
          <Image
            src={solana}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case "Avalanche":
        return (
          <Image
            src={avalance}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
    }
  };

  return <div>CMCpriceConverter</div>;
};

export default CMCPriceConverter;
