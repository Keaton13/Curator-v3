import React, { useContext, useEffect } from "react";
import NftDisplayHeader from "./nftDisplayHeader";
import NftCard from "./nftCard";
import { NFTContext } from "../../context/nftContext";

const styles = {
  container: {
    margin: "0 auto",
    maxWidth: "85%",
    padding: "0 24px",
  },
  header: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "24px",
  },
};

const nftDisplay = () => {
  const { userWalletNfts, walletNftCollectionData, totalWalletValue } =
    useContext(NFTContext);

  useEffect(() => {
    if (userWalletNfts && walletNftCollectionData && totalWalletValue) {
      console.log(userWalletNfts);
      console.log(walletNftCollectionData);
      console.log(totalWalletValue);
    }
  }, [userWalletNfts, walletNftCollectionData, totalWalletValue]);
  return (
    <div>
      <NftDisplayHeader />
      <div style={styles.container}>
        <div style={styles.grid}>
          {userWalletNfts.map((nft) => (
            <NftCard nft={nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default nftDisplay;
