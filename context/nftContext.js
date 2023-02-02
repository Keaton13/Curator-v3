import { createContext, useState, useEffect, useCallback } from "react";

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [top10Collections, setTop10Collections] = useState([]);

  const fetchTop10Collections = useCallback(async () => {
    console.log("calling Moralis data")
    try {
      const res = await fetch("/api/moralisV2");
      const data = await res.json();
      console.log(data);
      setTop10Collections(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <NFTContext.Provider value={{ top10Collections, fetchTop10Collections }}>
      {children}
    </NFTContext.Provider>
  );
};