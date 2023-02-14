import React from "react";

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
};

const NFTDisplayHeader = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.headerContainer}>
      <button
        style={hover === 0 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(0)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Collected</span>
      </button>
      <button
        style={hover === 1 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Created</span>
      </button>
      <button
        style={hover === 2 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(2)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Favorited</span>
      </button>
      <button
        style={hover === 3 ? styles.headerTitleHover : styles.headerTitle}
        onMouseEnter={() => setHover(3)}
        onMouseLeave={() => setHover(false)}
      >
        <span>Activity</span>
      </button>
    </div>
  );
};

export default NFTDisplayHeader;