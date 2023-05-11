import React, { useState } from "react";
import WhaleStatsTableHeader from "./WhaleStatsTableHeader";
import WhaleStatsTableRow from "./WhaleStatsTableRow";

const WhaleStatsTable = ({ whaleTransactions }) => {
  const [transactionDisplay, setTransactionDisplay] = useState("Amount");
  let transactionsFiltered;

  if(whaleTransactions){
    if (transactionDisplay === "Amount") {
      transactionsFiltered = whaleTransactions.sort(
        (a, b) => b.amount - a.amount
      );
    } else if (transactionDisplay === "Amount Usd") {
      transactionsFiltered = whaleTransactions.sort(
        (a, b) => b.amount_usd - a.amount_usd
      );
    } else if (transactionDisplay === "Bitcoin") {
      transactionsFiltered = whaleTransactions.sort((a,b) => {
        if(a.blockchain < b.blockchain){
          return -1;
        }
        if(a.blockchain > b.blockchain){
          return 1
        }
        return 0;
      })
    } else {
        transactionsFiltered = whaleTransactions.sort(
          (a, b) => b.timestamp - a.timestamp
        );
    }
  }
  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl overflow-auto">
        <table className="w-full overflow-auto lg:text-lg text-3xl">
          <WhaleStatsTableHeader setTransactionDisplay={setTransactionDisplay}/>
          {whaleTransactions &&
            whaleTransactions.map((transaction, index) => {
              return (
                <WhaleStatsTableRow
                  transaction={transaction}
                  index={index + 1}
                />
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default WhaleStatsTable;
