import React, { useState } from "react";
import ChevronDown from "../../assets/svg/chevronDown";

// Styles for WhaleStatsTableHeader
const styles = {
  header: {
    padding: "20px",
  },
  headerHover: {
    padding: "20px",
    borderBottom: "1px solid white",
  },
};

const WhaleStatsTableHeader = ({ setTransactionDisplay }) => {
  const [hover, setHover] = useState(false);

  return (
    <tbody>
      <tr>
        <th></th>
        <th
          className="flex items-center"
          onClick={() => setTransactionDisplay("time")}
          onMouseEnter={() => setHover(0)}
          onMouseLeave={() => setHover(false)}
          style={hover === 0 ? styles.headerHover : styles.header}
        >
          <b># &nbsp;</b>
          <ChevronDown />
        </th>
        <th
          onClick={() => setTransactionDisplay("Bitcoin")}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(false)}
          style={hover === 1 ? styles.headerHover : styles.header}
        >
          Blockchain
        </th>
        <th
          onClick={() => setTransactionDisplay("Amount")}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(false)}
          style={hover === 2 ? styles.headerHover : styles.header}
        >
          Amount
        </th>
        <th
          onClick={() => setTransactionDisplay("Amount Usd")}
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(false)}
          style={hover === 3 ? styles.headerHover : styles.header}
        >
          Amount USD
        </th>
        <th>From</th>
        <th>Type</th>
        <th>To</th>
        <th>Type</th>
      </tr>
    </tbody>
  );
};

export default WhaleStatsTableHeader;
