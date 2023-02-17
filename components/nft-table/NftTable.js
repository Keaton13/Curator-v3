import React, { useEffect, useState, useContext } from "react";
import NftTableHeader from "./NftTableHeader";
import NftTableRow from "./NftTableRow";
import { NFTContext } from "../../context/nftContext";

const styles = {
  table: {
    width: "50%",
    borderCollapse: "collapse",
  },
  thead: {
    // backgroundColor: "#2D3748",
  },
  th: {
    color: "#A0AEC0",
    fontSize: "12px",
    textAlign: "center",
    padding: "8px",
    width: "20%",
  },
  th1: {
    color: "#A0AEC0",
    fontSize: "12px",
    textAlign: "left",
    padding: "8px 50px",
    width: "60%",
  },
  td: {
    padding: "8px",
  },
};

const NftTable = () => {
  const [trending1, setTrending1] = useState(null);
  const [trending2, setTrending2] = useState(null);
  const {
    trendingCollections24h,
  } = useContext(NFTContext);

  useEffect(() => {
    if (trendingCollections24h) {
      setTrending1(trendingCollections24h.stats.slice(0, 5));
      setTrending2(trendingCollections24h.stats.slice(5, 10));
    }
  }, [trendingCollections24h]);


  return (
    <div className="text-white font-bold overflow-x-auto">
      <NftTableHeader />
      <div className="mx-auto max-w-screen-2xl">
        <table style={styles.table} className="w-full float-left">
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th1}>Collection</th>
              <th style={styles.th}>Floor Price</th>
              <th style={styles.th}>Volume</th>
            </tr>
          </thead>
          <tbody>
            {trending1 ? (
              trending1.map((collection, index) => (
                <NftTableRow collection={collection} index={index + 1} />
              ))
            ) : (
              <tr>
                <td colSpan={3}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        <table style={styles.table} className="w-full float-left">
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th1}>Collection</th>
              <th style={styles.th}>Floor Price</th>
              <th style={styles.th}>Volume</th>
            </tr>
          </thead>
          <tbody>
            {trending2 ? (
              trending2.map((collection, index) => (
                <NftTableRow collection={collection} index={index + 6} />
              ))
            ) : (
              <tr>
                <td colSpan={3}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NftTable;
