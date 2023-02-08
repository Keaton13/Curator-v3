import { createContext, useState, useEffect, useCallback } from "react";

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [top10Collections, setTop10Collections] = useState();
  const [userWalletNfts, setUserWalletNfts] = useState([]);
  const [walletNftCollections, setWalletNftCollections] = useState();

  useEffect(() => {
    getTrendingNftCollections();
    getWalletNftCollections();
    // fetchTop10Collections();
  }, []);

  const getTrendingNftCollections = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections");
      const data = await res.json();
      console.log(data.data);
      setTop10Collections(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTop10Collections = useCallback(async () => {
    console.log("calling Moralis data");
    try {
      const res = await fetch("/api/moralisV2");
      const data = await res.json();
      //   console.log(data);
      //   convertCollectionNamesToOpenSeaSlugs(data);
      //   await getTrendingNftCollections();
      console.log(data.data);
      setUserWalletNfts(data.data);
      convertCollectionNamesToOpenSeaSlugs(data.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getWalletNftCollections = async () => {
    try {
        const res = await fetch("/api/getWalletNftCollectionsOpensea");
        const data = await res.json();
        
        console.log(data);
        setWalletNftCollections(data);
    } catch (e) {
        console.error(e);
    }
  }

  const convertCollectionNamesToOpenSeaSlugs = async (data) => {
    // console.log(data);
    let collectionDataForOpenSea = [];
    // await getTrendingNftCollections();
    // let collections = {
    //     Eth : [],
    //     Poly : []
    // }

    for (let i = 0; i < data.data.length; i++) {
      console.log(data[0]);
      let nftData = {
        name: data.data[i].name,
        slug: data.data[i].slug,
        address: data.data[i].primary_asset_contracts[0].address
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
    <NFTContext.Provider value={{ top10Collections, userWalletNfts }}>
      {children}
    </NFTContext.Provider>
  );
};
