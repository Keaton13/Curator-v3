import { createContext, useState, useEffect, useCallback } from "react";

// Creating a CoinMarketCap context for the app
export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const [top100Coins, setCoinData] = useState();
  const [coinMetaData, setCoinMetaData] = useState();
  const [globalCryptoData, setGlobalCryptoData] = useState();

  // Calls setData once
  useEffect(() => {
    setData();
  }, []);

  // Fetches TopTenCoins
  const getTopTenCoins = async () => {
    try {
      const res = await fetch("/api/getTopTen");
      const data = await res.json();
      return data.data.data; // Extract the relevant data from the response
    } catch (e) {
      console.log(e.message); // Log any error that occurs during the API call
    }
  };

  // Fetches coin metadata for the given coin IDs
  const getCoinMetaData = async (ids) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coinIds: ids }), // Prepare the request body with the coin IDs
      };
      const res = await fetch("/api/getCoinMetaData", options);
      const data = await res.json();
      return data.data.data; // Extract the relevant data from the response
    } catch (e) {
      console.log(e.message); // Log any error that occurs during the API call
    }
  };

  // Fetches GlobalCryptoData 
  const getGlobalCryptoData = async () => {
    try {
      const res = await fetch("/api/getGlobalCryptoData");
      const data = await res.json();
      return data.data.data; // Extract the relevant data from the response
    } catch (e) {
      console.log(e.message); // Log any error that occurs during the API call
    }
  };

  // Retrieves data from APIs and sets the state variables
  const setData = useCallback(async () => {
    let ids = [];
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];
        ids.push(element.id); // Collect the coin IDs for the subsequent API call
        filteredResponse.push(element); // Collect the relevant data for setting the state
      }
      setCoinData(filteredResponse); // Set the state with the filtered coin data
    } catch (e) {
      console.log(e.message); // Log any error that occurs during the API call
    }

    try {
      let apiResponse = await getCoinMetaData(ids); // Fetch the coin metadata for the collected coin IDs
      let filtered = Object.values(apiResponse).filter((item) => item.id);
      setCoinMetaData(filtered); // Set the state with the filtered coin metadata
    } catch (e) {
      console.log(e.message); // Log any error that occurs during the API call
    }

    try {
      let apiResponse = await getGlobalCryptoData();
      setGlobalCryptoData(apiResponse); // Set the state with the global crypto data
      console.log("Global CryptoData", apiResponse); // Log the fetched global crypto data
    } catch (e) {
      // Handle error if fetching global crypto data fails
    }
  }, [getTopTenCoins, getCoinMetaData, getGlobalCryptoData]);

  return (
    <CoinMarketContext.Provider
      value={{
        top100Coins,
        coinMetaData,
        globalCryptoData,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
};
