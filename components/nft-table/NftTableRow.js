import React, { useState } from "react";

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
    padding: "15px", // add this line
  },
  section2: {
    width: "20%",
    textAlign: "center",
    padding: "15px", // add this line
  },
  section3: {
    width: "20%",
    textAlign: "center",
    padding: "15px", // add this line
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
    width: "6rem",
    height: "5rem",
  },
  imgWidth: {
    maxWidth: "85%",
    borderRadius: "10%",
  },
  name: {
    width: "50%",
    marginLeft: "10px",
  },
};

const NftTableRow = (collection) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const data = collection.collection;
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  console.log(data);

  return (
    <tr style={styles.tableRow}>
      {data && (
        <>
          <td style={styles.section1}>
            <div style={styles.number}>{collection.index}</div>
            <div style={styles.img}>
              <img
                style={styles.imgWidth}
                src={data.collection.image_url}
                alt="icon"
                onLoad={handleImageLoad}
              />
              {!isImageLoaded && <div>Loading...</div>}
            </div>
            <div style={styles.name}>{data.collection.name}</div>
          </td>
          <td style={styles.section2}>
            {data.floorPrice ? (
              <div style={styles.price}>{data.floorPrice.toFixed(2)} ETH</div>
            ) : (
              <div style={styles.price}>0 ETH</div>
            )}
          </td>
          <td style={styles.section3}>
            {data.collection.stats ? (
              <div style={styles.volume}>
                {data.collection.stats.one_day_volume.toFixed(2)} ETH
              </div>
            ) : (
              <div style={styles.volume}>
                0 ETH
              </div>
            )}
          </td>
        </>
      )}
    </tr>
  );
};

export default NftTableRow;
