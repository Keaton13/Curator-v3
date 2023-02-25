import React from "react";
import Image from "next/image";
import Search from "../assets/svg/search";
import { useRouter } from "next/router";
import { Web3Button, Web3ModalButton } from "@web3modal/react";

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerwrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4 items-center`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navItem: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  web3Button: `p-[20px]`
};

const Header = () => {
  const Router = useRouter();

  return (
    <div className={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={200}
        height={200}
      />
      <div className={styles.headerwrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink} onClick={() => Router.push("/")}>
              Cryptocurrencies
            </div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>
          <div className={styles.navItem}>
            <div
              className={styles.navLink}
              onClick={() => Router.push("/nfts/nft")}
            >
              NFT Display
            </div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div
              className={styles.navLink}
              onClick={() => Router.push("/whaleStats/whaleStats")}
            >
              Whale Stats
            </div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>
          </div>
        </nav>
        <div className={styles.web3Button}>
          <Web3Button />
        </div>
        <div className="flex items-center">
          {/* <ConnectButton /> */}
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
