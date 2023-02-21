import { createContext, useState, useEffect, useCallback } from "react";

const WhaleContext = createContext();

export const WhaleProvider = ({ children }) => {
  const [whaleTransactions, setWhaleTransactions] = useState();

  useEffect(() => {
    getWhaleStats();
  }, []);

  const getWhaleStats = async () => {
    try {
      const res = await fetch("/api/getWhaleTransactions");
      const data = await res.json();
      setWhaleTransactions(data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <WhaleContext.Provider
      value={{
        whaleTransactions,
      }}
    >
      {children}
    </WhaleContext.Provider>
  );
};
