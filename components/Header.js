import React from "react";
import Image from "next/image";
import Search from "../assets/svg/search";
import { useRouter } from "next/router";
import { Web3Button, Web3ModalButton } from "@web3modal/react";
import logo from "../assets/keyblade20.png";

const styles = {
  header: `bg-[#17171A] text-white h-20 flex w-full`,
  headerwrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4 items-center`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navItem: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  web3Button: `p-[20px]`,
  image: `m-auto w-100 ml-5 mr-5`,
  logoContainer: `flex justify-center items-center mx-8`,
  logoText: {
    color: '#FFFF',
    marginLeft: '5%',
    fontSize: "36px",
    fontFamily: "Cursive"
  }
  // logoText: `text-white ml-2 text-3xl font-family: 'Lucida Handwriting', cursive;`,
};

const Header = () => {
  const Router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" width={100} className={styles.image} />
        <h1 style={styles.logoText}>Curator</h1>
      </div>
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
