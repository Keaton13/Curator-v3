import React, { useContext, useEffect, useState } from "react";
import { NFTContext } from "../../context/nftContext";

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px 120px",
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    // padding: "0 35px"
    marginLeft: "25px",
    padding: "20px 0",
  },
  headerTitleHover: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    // padding: "0 35px"
    marginLeft: "25px",
    padding: "20px 0",
    borderBottom: "1px solid white",
  },
  headerSubtitle: {
    fontSize: "18px",
    textAlign: "center",
    color: "#999",
    marginTop: "10px",
  },
  headerWalletContainer: {
    width: "100%"
  },
  headerWalletValue: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    // padding: "0 35px"
    marginLeft: "25px",
    padding: "20px 0",
  },
};

const NFTDisplayHeader = (props) => {
  const { totalWalletValue } = useContext(NFTContext);
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.headerContainer}>
      <button
        style={hover === 0 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(0)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.setNftDisplay("Floor")}
      >
        <span>Floor</span>
      </button>
      <button
        style={hover === 1 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.setNftDisplay("Volume")}
      >
        <span>Volume</span>
      </button>
      <button
        style={hover === 2 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(2)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.setNftDisplay("Created")}
      >
        <span>Created</span>
      </button>
      {/* <button
        style={hover === 3 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(3)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Activity</span>
      </button> */}
      <div style={styles.headerWalletContainer}>
        {totalWalletValue ? (
          <p style={styles.headerWalletValue}>
            Wallet Value: {totalWalletValue.toFixed(3)} ETH
          </p>
        ) : (
          <p style={styles.headerWalletValue}>Wallet Value: 0 ETH</p>
        )}
      </div>
    </div>
  );
};

export default NFTDisplayHeader;
