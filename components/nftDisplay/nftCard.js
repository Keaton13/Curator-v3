import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/KeybladeBlackVertical.png";

const styles = {
  card: {
    background: "#F5F5F5",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    // boxShadow: "0 0 10px 5px white"
  },
  imageContainer: {
    height: "340px",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    margin: "auto"
  },
  altImageText: {
    textAlign: "center",
    fontStyle: "oblique",
  },
  altImage: {
    margin: "30px 25%",
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

const NftCard = ({nft}) => {
  const [localStyles, setLocalStyles] = useState(styles);
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    let nftImage = nft.metadata;
    if (nftImage) {
      if (nftImage.image.startsWith("ipfs://")) {
        nftImage.image = "https://dweb.link/ipfs/" + nftImage.image.substring(7);
        setImageSrc(nftImage.image)
      } else {
        setImageSrc(nftImage.image)
      }
    } else {
      setImageSrc()
    }
  }, [nft]);

  const handleImageError = () => {
    console.log('Error loading image:', nft.metadata.image)
    setImageSrc()
  }

  return (
    <div key={nft.id} style={styles.card}>
      <div style={styles.imageContainer}>
        {imageSrc ? (
          <img
            style={styles.image}
            src={imageSrc}
            alt={nft.collectionData.name}
            onError={handleImageError}
          />
        ) : (
          <div>
            <Image
              src={logo}
              alt={nft.collectionData.name}
              height={250}
              style={styles.altImage}
            />
            <h1 style={styles.altImageText}>Unable to load image</h1>
          </div>
        )}
      </div>
      <div style={styles.details}>
        {imageSrc ? (
          <div>
            {nft.metadata && nft.metadata.name ? (
              <h2 style={styles.statLabel}>{nft.metadata.name}</h2>
            ) : (
              <h2 style={styles.statLabel}>{nft.tokenId}</h2>
            )}
            <h2 style={styles.statLabel}>{nft.name}</h2>
          </div>
        ) : (
          <div>
            <h2 style={styles.statLabel}>
              {" " + " " + "#"}
              {nft.tokenId.slice(0, 8)}
            </h2>
            <h2 style={styles.statLabel}>{nft.name}</h2>
          </div>
        )}
        <br />
        <div style={styles.stats}>
          <div style={styles.stat}>
            <p style={styles.statLabel}>Floor Price</p>
            <p style={styles.statValue}>{nft.collectionData.floor}</p>
          </div>
          <div style={styles.stat}>
            <p style={styles.statLabel}>Volume (24hr)</p>
            <p style={styles.statValue}>
              {(+nft.collectionData.volume24h).toFixed(3)}
            </p>
          </div>
        </div>
        <div style={styles.link}>
          <a
            href={`https://opensea.io/assets/ethereum/${nft.tokenAddress}/${nft.tokenId}`}
          >
            View on OpenSea
          </a>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
