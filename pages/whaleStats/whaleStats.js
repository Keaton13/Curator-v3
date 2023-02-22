import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import WhaleStatsHeader from "../../components/WhaleStatsTable/WhaleStatsHeader";
import { WhaleContext } from "../../context/whaleContext";

const WhaleStats = () => {
  let { whaleTransactions, whaleTransactionData } = useContext(WhaleContext);

  useEffect(() => {
    if(whaleTransactions) {
        console.log(whaleTransactions);
        console.log(whaleTransactionData);
    }
  })
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      <WhaleStatsHeader whaleTransactionData={whaleTransactionData}/>
    </div>
  );
};

export default WhaleStats;
