import React from "react";
import Image from "next/image";

// Styles for CoinNameRow
const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
};

const CoinNameRow = ({ name }) => {
  let image;

  // Sets diffent coin icons based off name
  if (name == "bitcoin") {
    image = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png";
  } else if ((name = "ethereum")) {
    image = "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png";
  } else if (name == "ripple") {
    image = "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png";
  } else {
    image = "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png";
  }

  return (
    <div className={styles.coinNameRow}>
      {image && name ? (
        <div className="mr-3 flex">
          <div className="mr-2">
            <Image
              src={image}
              className="rounded-full"
              width={20}
              height={20}
              alt=""
            />
          </div>
          {name}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default CoinNameRow;
