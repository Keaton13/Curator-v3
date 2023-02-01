import React from "react";
import NftTableHeader from "./NftTableHeader";
import NftTableRow from "./NftTableRow";

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
      width: '20%'
    },
    th1: {
        color: "#A0AEC0",
        fontSize: "12px",
        textAlign: "left",
        padding: "8px",
        width: '60%'
      },
    td: {
      padding: "8px",
    },
  };

const NftTable = () => {
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
            <NftTableRow />
            <NftTableRow />
            <NftTableRow />
            <NftTableRow />
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
            <NftTableRow />
            <NftTableRow />
            <NftTableRow />
            <NftTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NftTable;
