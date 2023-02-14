import React from 'react'

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px 120px"
  },
  headerTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    // padding: "0 35px"
    marginLeft: "25px",
    padding: "20px 0",
    borderBottom: "1px solid white"
  },
  headerSubtitle: {
    fontSize: "18px",
    textAlign: "center",
    color: "#999",
    marginTop: "10px"
  }
};


const NftTableHeader = () => {
  return (
    <div style={styles.headerContainer}>
    <button style={styles.headerTitle}><span>Trending</span></button>
    <button style={styles.headerTitle}><span>Top</span></button>
  </div>
  )
}

export default NftTableHeader