import React, { useContext, useEffect, useState } from "react";
import NftDisplayHeader from "./nftDisplayHeader";
import NftCard from "./nftCard";
import { NFTContext } from "../../context/nftContext";
import { useAccount } from "wagmi";

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
  const { userWalletNfts, convertCollectionData } = useContext(NFTContext);
  const [nftDisplay, setNftDisplay] = useState("Floor");
  const { address, isConnecting, isDisconnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (address && userWalletNfts.length === 0) {
      setIsLoading(true);
      setError(null);
      convertCollectionData(address)
        .then(() => setIsLoading(false))
        .catch((err) => setError(err));
    } else {
      setIsLoading(false)
    }
  }, [address]);

  let userWalletNftsFiltered;
  if (nftDisplay === "Floor") {
    userWalletNftsFiltered = userWalletNfts.sort(
      (a, b) => b.collectionData.floor - a.collectionData.floor
    );
  } else if (nftDisplay == "Volume") {
    userWalletNftsFiltered = userWalletNfts.sort(
      (a, b) => b.collectionData.volume24h - a.collectionData.volume24h
    );
  } else {
    userWalletNftsFiltered = userWalletNfts.sort(
      (a, b) => b.blockNumber - a.blockNumber
    );
  }

  return (
    <div>
      <NftDisplayHeader setNftDisplay={setNftDisplay} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : address ? (
        <div style={styles.container}>
          <div style={styles.grid}>
            {userWalletNftsFiltered.map((nft) => (
              <NftCard nft={nft} />
            ))}
          </div>
        </div>
      ) : (
        <div>Please Connect Wallet</div>
      )}
    </div>
  );
};

export default nftDisplay;