import React from "react";
import Image from "next/image";

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg" 
      alt='logo'
      width={200}
      height={200}
      />

      <div className={styles.headerwrapper}>
        <div className={styles.nav}>

        </div>
      </div>
    </div>
  );
};

export default Header;
