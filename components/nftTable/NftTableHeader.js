import React, { useState } from "react";
import ChevronDown from "../../assets/svg/chevronDown";

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px 120px",
  },
  headerTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginLeft: "25px",
    padding: "20px 0",
    cursor: "pointer", // add cursor property to make the button look clickable
  },
  headerTitleHover: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginLeft: "25px",
    padding: "20px 0",
    borderBottom: "1px solid white",
    cursor: "pointer", // add cursor property to make the button look clickable
  },
  headerSubtitle: {
    fontSize: "18px",
    textAlign: "center",
    color: "#999",
    marginTop: "10px",
  },
  dropdownContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    border: "2px solid white",
    width: "auto",
    borderRadius: "17px",
    marginLeft: "25px", // add margin to separate the dropdown from the button
    paddingRight: "10px"
  },
  dropdownButton: {
    background: "transparent",
    color: "white",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px 20px", // add padding to increase the clickable area of the button
  },
  dropdownContent: {
    position: "absolute",
    top: "100%",
    backgroundColor: "#f9f9f9",
    minWidth: "100%",
    borderRadius: "17px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  dropdownItem: {
    color: "black",
    padding: "12px 16px",
    textDecoration: "none",
    display: "block",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

const NftTableHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    props.setNftDisplayTime(option);
  };

  return (
    <div style={styles.headerContainer}>
      <button
        style={hover === 0 ? styles.headerTitleHover : styles.headerTitle}
        onClick={() => props.setNftDisplayCategory("Trending")}
        onMouseEnter={() => setHover(0)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Trending</span>
      </button>
      <button
        style={hover === 1 ? styles.headerTitleHover : styles.headerTitle}
        onClick={() => props.setNftDisplayCategory("Top")}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Top</span>
      </button>
      <div style={styles.dropdownContainer} onClick={handleDropdownClick}>
        <button style={styles.dropdownButton}>
          {props.nftDisplayTime}
        </button>
        <ChevronDown />
        {isOpen && (
          <div style={styles.dropdownContent}>
            <span
              style={styles.dropdownItem}
              onClick={() => handleOptionClick("24h")}
            >
              24h
            </span>
            <span
              style={styles.dropdownItem}
              onClick={() => handleOptionClick("7d")}
            >
              7d
            </span>
            <span
              style={styles.dropdownItem}
              onClick={() => handleOptionClick("30d")}
            >
              30d
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftTableHeader;
