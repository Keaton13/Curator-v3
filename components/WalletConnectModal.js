import React from "react";
import { Web3Button, Web3ModalButton } from "@web3modal/react";

const styles = {
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "25%",
    margin: "auto",
    color: "#FFFF",
    background: "#323546",
    alignItems: "center",
    borderRadius: "20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  },
  h2: {
    margin: 0,
    fontSize: "1.5rem",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
  },
  closeIcon: {
    display: "block",
    lineHeight: 1,
  },
  visuallyHidden: {
    position: "absolute",
    clip: "rect(0 0 0 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: 0,
    padding: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    padding: "1rem",
  },
};

const WalletConnectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.header}>
        <h2 style={styles.h2}>Please Connect Wallet</h2>
      </div>
      <div style={styles.content}>
        <div>
          <Web3Button />
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;
