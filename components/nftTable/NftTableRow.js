import React, {useState} from "react";

// NftTableRow styles
const styles = {
  tableRow: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  section1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",  // add this line
  },
  section2: {
    width: "20%",
    textAlign: "center",
    padding: "15px",  // add this line
  },
  section3: {
    width: "20%",
    textAlign: "center",
    padding: "15px",  // add this line
  },
  number: {
    width: "10%",
    fontSize: "1.25rem",
    marginRight: "1rem",
    textAlign: "center",
  },
  img: {
    display: "flex",
    alignItems: "center",
    width: "10rem",
    height: "5rem",
  },
  imgWidth: {
    maxWidth: "50%",
    borderRadius: "10%"
  },
  name: {
    width: "50%",
    marginLeft: "10px",
  },
};

const NftTableRow = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Setting collection data
  const data = props.collection;

  // Onload sets imageLoaded to true
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <tr style={styles.tableRow}>
      {data && (
        <>
          <td style={styles.section1}>
            <div style={styles.number}>{props.index}</div>
            <div style={styles.img}>
              <img style={styles.imgWidth} src={data.collection.image_url} alt="icon" onLoad={handleImageLoad} />
              {!isImageLoaded && <div>Loading...</div>}
            </div>
            <div style={styles.name}>{data.collection.name}</div>
          </td>
          <td style={styles.section2}>
            <div style={styles.price}>{data.floorPrice.toFixed(2)} ETH</div>
          </td>
          <td style={styles.section3}>
            <div style={styles.volume}>
              {data.collection.stats.one_day_volume.toFixed(2)} ETH
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default NftTableRow;