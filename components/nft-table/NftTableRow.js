import React from "react";

const styles = {
  tableRow: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  section1: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  section2: {
    width: "20%",
    textAlign: "center",
  },
  section3: {
    width: "20%",
    textAlign: "center",
  },
  number: {
    width: "50%",
    fontSize: "1.25rem",
    marginRight: "1rem",
    textAlign: "center"
  },
  img: {
    width: "50%",
    width: "10rem",
    height: "5rem",
  },
  name: {
    width: "50%",
    marginLeft: "10px",
  },
};

const NftTableRow = (collection) => {
    console.log(collection.collection)
  return (
    <tr style={styles.tableRow}>
      <td style={styles.section1}>
        <div style={styles.number}>1</div>
        <div style={styles.img}>
          <img
            src="https://i.seadn.io/gcs/files/2eae21911b75d9e160e5cb8651ac59a9.jpg?auto=format&w=136&h=136&fr=1"
            alt="icon"
          />
        </div>
        <div style={styles.name}>CryptoKitties</div>
      </td>
      <td style={styles.section2}>
        <div style={styles.price}>0.07 ETH</div>
      </td>
      <td style={styles.section3}>
        <div style={styles.volume}>100 ETH</div>
      </td>
    </tr>
  );
};

export default NftTableRow;
