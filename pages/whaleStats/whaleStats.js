import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import WhaleStatsHeader from "../../components/WhaleStatsTable/WhaleStatsHeader";
import WhaleStatsTable from "../../components/WhaleStatsTable/WhaleStatsTable";
import { WhaleContext } from "../../context/whaleContext";

const WhaleStats = () => {
  let { whaleTransactions, whaleTransactionData } = useContext(WhaleContext);

  return (
    <div>
      <Header />
      <WhaleStatsHeader whaleTransactionData={whaleTransactionData} />
      <WhaleStatsTable whaleTransactions={whaleTransactions} />
    </div>
  );
};

export default WhaleStats;
