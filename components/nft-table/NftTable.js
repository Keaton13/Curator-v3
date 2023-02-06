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
    backgroundColor: "#2D3748",
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
    padding: "8px",
    width: "60%",
  },
  td: {
    padding: "8px",
  },
};

const NftTable = () => {
  const { top10Collections, fetchTop10Collections, getTrendingNftCollections } = useContext(NFTContext);

  useEffect(() => {
    console.log('Inside Use Effect')
    fetchTop10Collections();
    getTrendingNftCollections();
  }, [fetchTop10Collections]);
  return (
    <div className="text-white font-bold overflow-x-auto">
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
            {top10Collections.length > 0 ? (
              top10Collections[0].result.map((collection) => (
                <NftTableRow collection={collection} />
              ))
            ) : (
              <tr>
                <td colSpan={3}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <table style={styles.table} className="w-full float-left">
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th1}>Collection</th>
              <th style={styles.th}>Floor Price</th>
              <th style={styles.th}>Volume</th>
            </tr>
          </thead>
          <tbody>
            <NftTableRow />
            <NftTableRow />
            <NftTableRow />
            <NftTableRow />
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default NftTable;
