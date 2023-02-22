import { createContext, useState, useEffect, useCallback } from "react";

export const WhaleContext = createContext();

export const WhaleProvider = ({ children }) => {
  const [whaleTransactions, setWhaleTransactions] = useState();
  const [whaleTransactionData, setWhaleTransactionData] = useState();

  useEffect(() => {
    getWhaleStats();
  }, []);

  const getWhaleStats = async () => {
    try {
      const res = await fetch("/api/getWhaleTransactions");
      const data = await res.json();
      setWhaleTransactions(data.data.transactions);
      filterWhaleStatsData(data.data.transactions);
    } catch (e) {
      console.log(e.message);
    }
  };

  const filterWhaleStatsData = async (data) => {
    // let transactionData = {
    //     totalBtcAmt: null,
    //     totalEthAmt: null,
    //     totalTransactionsBtc: 0,
    //     totalTransactionsEth: 0,
    //     btcIn: 0,
    //     btcOut: 0,
    //     ethIn: 0,
    //     ethOut: 0
    // }
    let totalBtcAmt = 0;
    let totalEthAmt = 0;
    let otherAmt = 0;
    let totalTransactionsBtc = 0;
    let totalTransactionsEth = 0;
    let btcIn = 0;
    let btcOut = 0;
    let otherIn = 0;
    let ethIn = 0;
    let ethOut = 0;
    let otherOut = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].blockchain === "bitcoin") {
        totalBtcAmt += data[i].amount_usd;
        totalTransactionsBtc++;
        if (data[i].from.owner_type === "exchange") {
          btcOut += data[i].amount_usd;
        } else if (data[i].to.owner_type === "exchange") {
          btcIn += data[i].amount_usd;
        }
      } else if (data[i].blockchain === "ethereum") {
        totalEthAmt += data[i].amount_usd;
        totalTransactionsEth++;
        if (data[i].from.owner_type === "exchange") {
          ethOut += data[i].amount_usd;
        } else if (data[i].to.owner_type === "exchange") {
          ethIn += data[i].amount_usd;
        }
      } else {
        otherAmt += data[i].amount_usd;
        if (data[i].from.owner_type === "exchange") {
          otherOut += data[i].amount_usd;
        } else if (data[i].to.owner_type === "exchange") {
          otherIn += data[i].amount_usd;
        }
      }
    }
    setWhaleTransactionData({
      totalBtcAmt: totalBtcAmt,
      totalEthAmt: totalEthAmt,
      combinedAmt: totalBtcAmt + totalEthAmt + otherAmt,
      totalTransactionsBtc: totalTransactionsBtc,
      totalTransactionsEth: totalTransactionsEth,
      btcIn: btcIn,
      btcOut: btcOut,
      ethIn: ethIn,
      ethOut: ethOut,
      combinedIn: btcIn + ethIn + otherIn,
      combinedOut: btcOut + ethOut + otherOut
    });
  };

  return (
    <WhaleContext.Provider
      value={{
        whaleTransactions,
        whaleTransactionData,
      }}
    >
      {children}
    </WhaleContext.Provider>
  );
};
