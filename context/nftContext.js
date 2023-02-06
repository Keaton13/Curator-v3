import { createContext, useState, useEffect, useCallback } from "react";

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [top10Collections, setTop10Collections] = useState([]);
  const [openSeaData, setOpenSeaData] = useState();

  const getTrendingNftCollections = async () => {
    try{
        const res = await fetch("/api/getNftCollectionInfoOffAddress")
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
  }

  const fetchTop10Collections = useCallback(async () => {
    console.log("calling Moralis data");
    try {
      const res = await fetch("/api/moralisV2");
      const data = await res.json();
    //   console.log(data);
      convertCollectionNamesToOpenSeaSlugs(data);
      setTop10Collections(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const convertCollectionNamesToOpenSeaSlugs = async (data) => {
    // console.log(data);
    let collectionDataForOpenSea = [];
    await getTrendingNftCollections();
    // let collections = {
    //     Eth : [],
    //     Poly : []
    // }

    for (let i = 0; i < data[0].result.length; i++) {
      console.log(data[0].result[i]);
      let nftData = {
        name: data[0].result[i].name,
        address: data[0].result[i].token_address,
      };
      collectionDataForOpenSea.push(nftData);
      // let collection = data[0].result[i];
      // collections.Eth.push(collection);
    }
    // for(let i=0; i<data[1].result.length; i++){
    //     let collection = data[1].result[i];
    //     collections.Poly.push(collection);
    // }
    // console.log(collectionData);
    // setOpenSeaData(collectionDataForOpenSea)
    console.log(collectionDataForOpenSea);
  };

  return (
    <NFTContext.Provider value={{ top10Collections, fetchTop10Collections, getTrendingNftCollections }}>
      {children}
    </NFTContext.Provider>
  );
};
