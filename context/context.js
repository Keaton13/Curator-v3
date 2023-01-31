import { createContext, useState, useEffect, useCallback } from "react";

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const [top100Coins, setCoinData] = useState();
  const [coinMetaData, setCoinMetaData] = useState();
  const [globalCryptoData, setGlobalCryptoData] = useState();

  useEffect(() => {
    setData();
  }, []);

  const getTopTenCoins = async () => {
    try {
      const res = await fetch("/api/getTopTen");
      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };

  const getCoinMetaData = async (ids) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coinIds: ids }),
      };
      const res = await fetch("/api/getCoinMetaData", options);
      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };

  const getGlobalCryptoData = async () => {
    try {
      const res = await fetch("/api/getGlobalCryptoData");
      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };

  const setData = useCallback(async () => {
    let ids = [];
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];
        ids.push(element.id);
        // console.log(element)
        filteredResponse.push(element);
      }
      setCoinData(filteredResponse);
    } catch (e) {
      console.log(e.message);
    }

    try {
      let apiResponse = await getCoinMetaData(ids);
      let filtered = Object.values(apiResponse).filter((item) => item.id);
      setCoinMetaData(filtered);
    } catch (e) {
      console.log(e.message);
    }

    try {
      let apiResponse = await getGlobalCryptoData();
      setGlobalCryptoData(apiResponse);
      console.log("Global CryptoData", apiResponse);
    } catch (e) {

    }
  }, [getTopTenCoins, getCoinMetaData, getGlobalCryptoData]);

  return (
    <CoinMarketContext.Provider
      value={{
        top100Coins,
        coinMetaData,
        globalCryptoData
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
};
