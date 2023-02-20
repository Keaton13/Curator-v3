import React, { useContext, useEffect, useState } from "react";
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
    const [nftDisplay, setNftDisplay] = useState("Floor");
    const [highestFloor, setHighestFloor] = useState();
    const [highestVolume, setHighestVolume] = useState();
    const [newestNft, setNewestNft] = useState();

    let userWalletNftsFiltered;
    if(nftDisplay === "Floor") {
        userWalletNftsFiltered = userWalletNfts.sort((a, b) => b.collectionData.floor - a.collectionData.floor);
    } else if (nftDisplay == "Volume") {
        userWalletNftsFiltered = userWalletNfts.sort((a, b) => b.collectionData.volume24h - a.collectionData.volume24h);
    } else {
        userWalletNftsFiltered = userWalletNfts.sort((a, b) => b.blockNumber - a.blockNumber);
    }


  return (
    <div>
      <NftDisplayHeader setNftDisplay={setNftDisplay}/>
      <div style={styles.container}>
        <div style={styles.grid}>
          {userWalletNftsFiltered.map((nft) => (
            <NftCard nft={nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default nftDisplay;
