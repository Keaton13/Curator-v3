import React from "react";
import Image from "next/image";
import logo from "../assets/Keyblade20.png";
import { Web3Button, Web3ModalButton } from "@web3modal/react";

// Styles for WalletConnectModal
const styles = {
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    color: "#FFFF",
    background: "#323546",
    alignItems: "center",
    borderRadius: "20px",
  },
  header: {
    padding: "1rem",
    width: "67%",
    margin: "auto",
  },
  h2: {
    margin: 0,
    fontSize: "1.5rem",
    textAlign: "center"
  },
  content: {
    height: "100%",
    padding: "1rem",
  },
  image: {
    margin: "auto",
    width: "75%",
    padding: "20px 10px 10px 10px",
    transform: "rotate(7deg)",
  },
  web3ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 10px"
  },
  logoText: {
    fontSize: "62px",
    fontFamily: "cursive",
    margin: "auto",
    width: "50%",
  },
};

const WalletConnectModal = ({ status, loadingText }) => {
  if (status === "Loading") {
    return (
      <div style={styles.modal} className="modalWidth">
        <div style={styles.header}>
          <h2 style={styles.h2}>{loadingText}</h2>
        </div>
        <div style={styles.content}>
          <div>
            <h1 style={styles.logoText}>Curator</h1>
            <Image src={logo} alt="logo" style={styles.image} />
          </div>
          <div style={styles.web3ButtonContainer}></div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={styles.modal} className="modalWidth">
        <div style={styles.content}>
          <div>
            <h1 style={styles.logoText}>Curator</h1>
            <Image src={logo} alt="logo" style={styles.image} />
          </div>
          <div style={styles.header}>
            <h2 style={styles.h2}>Please Connect Wallet</h2>
          </div>
          <div style={styles.web3ButtonContainer}>
            <Web3Button />
          </div>
        </div>
      </div>
    );
  }
};

export default WalletConnectModal;
