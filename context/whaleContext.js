import { createContext, useState, useEffect, useCallback } from "react";

export const WhaleContext = createContext();

export const WhaleProvider = ({ children }) => {
  // State variables for whale transactions
  const [whaleTransactions, setWhaleTransactions] = useState();
  const [whaleTransactionData, setWhaleTransactionData] = useState();

  useEffect(() => {
    getWhaleStats(); // Fetch whale transaction data on component mount
  }, []);

  // Fetches whale transaction data from the API
  const getWhaleStats = async () => {
    try {
      const res = await fetch("/api/getWhaleTransactions");
      const data = await res.json();
      setWhaleTransactions(data.data.transactions); // Set the state with the fetched transaction data
      filterWhaleStatsData(data.data.transactions); // Filter and process the transaction data
    } catch (e) {
      console.log(e.message);
    }
  };

  // Filters and processes the whale transaction data
  const filterWhaleStatsData = async (data) => {
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
        totalBtcAmt += data[i].amount_usd; // Calculate the total BTC amount
        totalTransactionsBtc++;
        if (data[i].from.owner_type === "exchange") {
          btcOut += data[i].amount_usd; // Calculate the BTC amount sent from exchanges
        } else if (data[i].to.owner_type === "exchange") {
          btcIn += data[i].amount_usd; // Calculate the BTC amount received by exchanges
        }
      } else if (data[i].blockchain === "ethereum") {
        totalEthAmt += data[i].amount_usd; // Calculate the total ETH amount
        totalTransactionsEth++;
        if (data[i].from.owner_type === "exchange") {
          ethOut += data[i].amount_usd; // Calculate the ETH amount sent from exchanges
        } else if (data[i].to.owner_type === "exchange") {
          ethIn += data[i].amount_usd; // Calculate the ETH amount received by exchanges
        }
      } else {
        otherAmt += data[i].amount_usd; // Calculate the total amount for other blockchains
        if (data[i].from.owner_type === "exchange") {
          otherOut += data[i].amount_usd; // Calculate the amount sent from exchanges for other blockchains
        } else if (data[i].to.owner_type === "exchange") {
          otherIn += data[i].amount_usd; // Calculate the amount received by exchanges for other blockchains
        }
      }
    }
    setWhaleTransactionData({
      totalBtcAmt: totalBtcAmt,
      totalEthAmt: totalEthAmt,
      combinedAmt: totalBtcAmt + totalEthAmt + otherAmt, // Calculate the combined total amount
      totalTransactionsBtc: totalTransactionsBtc,
      totalTransactionsEth: totalTransactionsEth,
      btcIn: btcIn,
      btcOut: btcOut,
      ethIn: ethIn,
      ethOut: ethOut,
      combinedIn: btcIn + ethIn + otherIn, // Calculate the combined total amount received
      combinedOut: btcOut + ethOut + otherOut // Calculate the combined total amount sent
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