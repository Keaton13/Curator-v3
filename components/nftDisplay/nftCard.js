import React, { useState } from "react";

const styles = {
  card: {
    background: "#F5F5F5",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    height: "340px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  details: {
    padding: "20px 20px 20px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  description: {
    marginBottom: "24px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
  },
  statLabel: {
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  statValue: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  link: {
    marginTop: "24px",
    alignSelf: "flex-end",
    textDecoration: "none",
    color: "#2E7DF7",
    fontWeight: "bold",
  },
};

const NftCard = (nft) => {
  const [localStyles, setLocalStyles] = useState(styles);
  
  nft = nft.nft;
  console.log(nft);
  let nftImage = nft.metadata;
  let nftName = nft.name;
  let tokenId = nft.tokenId;

  if (nftImage) {
    if (nftImage.image.startsWith("ipfs://")) {
      nftImage.image = "https://dweb.link/ipfs/" + nftImage.image.substring(7);
      console.log(nftImage.image);
    }
  }

  return (
    <div key={nft.id} style={styles.card}>
      <div style={styles.imageContainer}>
        {nftImage ? (
          <img src={nftImage.image} alt={nftName} />
        ) : (
          <h1>No Image</h1>
        )}
      </div>
      <div style={styles.details}>
        {nftImage ? (
          <div>
            <h2 style={styles.statLabel}>{nftImage.name}</h2>
            <h2 style={styles.statLabel}>{nft.name}</h2>
          </div>
        ) : (
          <h2 style={styles.statLabel}>
            {nftName}
            {" " + " " + "#" + tokenId}
          </h2>
        )}
        <br/>
        <div style={styles.stats}>
          <div style={styles.stat}>
            <p style={styles.statLabel}>Price</p>
            {/* <p style={styles.statValue}>{nft.price}</p> */}
          </div>
          <div style={styles.stat}>
            <p style={styles.statLabel}>Volume (24hr)</p>
            {/* <p style={styles.statValue}>{nft.volume24h}</p> */}
          </div>
        </div>
        <a href={`https://opensea.io/assets/ethereum/${nft.tokenAddress}/${nft.tokenId}`}>View on OpenSea</a>
      </div>
    </div>
  );
};

export default NftCard;
