import React, { useEffect, useState, useContext } from "react";
import NftTableHeader from "./NftTableHeader";
import NftTableRow from "./NftTableRow";
import { NFTContext } from "../../context/nftContext";

const styles = {
  thead: {
    // backgroundColor: "#2D3748",
  },
  th: {
    color: "#A0AEC0",
    fontSize: "12px",
    textAlign: "center",
    padding: "8px",
    width: "20%",
  },
  th1: {
    color: "#A0AEC0",
    fontSize: "12px",
    textAlign: "left",
    padding: "8px 50px",
    width: "60%",
  },
  td: {
    padding: "8px",
  },
  
  // media queries for mobile devices
  "@media (max-width: 768px)": {
    table: {
      width: "100%",
    },
    th: {
      fontSize: "10px",
      width: "30%",
    },
    th1: {
      fontSize: "10px",
      padding: "8px 10px",
      width: "70%",
    },
    td: {
      fontSize: "10px",
    },
  },
};

const NftTable = () => {
  const [trending1, setTrending1] = useState(null);
  const [trending2, setTrending2] = useState(null);
  const [nftDisplayTime, setNftDisplayTime] = useState("24h");
  const [nftDisplayCategory, setNftDisplayCategory] = useState("Top");

  const {
    trendingCollections,
    trendingCollections24h,
    trendingCollections7d,
    trendingCollections30d,
  } = useContext(NFTContext);

  let nftCollections1;
  let nftCollections2;

  useEffect(() => {
  }, [nftCollections1, nftCollections2])

  if (nftDisplayCategory === "Trending") {
    nftCollections1 = trendingCollections?.stats?.slice(0, 5) || [];
    nftCollections2 = trendingCollections?.stats?.slice(5, 10) || [];
  } else {
    if (nftDisplayTime === "24h") {
      nftCollections1 = trendingCollections24h?.stats?.slice(0, 5) || [];
      nftCollections2 = trendingCollections24h?.stats?.slice(5, 10) || [];
    } else if (nftDisplayTime === "7d") {
      nftCollections1 = trendingCollections7d?.stats?.slice(0, 5) || [];
      nftCollections2 = trendingCollections7d?.stats?.slice(5, 10) || [];
    } else {
      nftCollections1 = trendingCollections30d?.stats?.slice(0, 5) || [];
      nftCollections2 = trendingCollections30d?.stats?.slice(5, 10) || [];
    }
  }  
  
  let nftIndex = 1; 

  return (
    <div className="text-white font-bold overflow-x-auto">
      <NftTableHeader setNftDisplayTime={setNftDisplayTime} nftDisplayTime={nftDisplayTime} setNftDisplayCategory={setNftDisplayCategory}/>
      <div className="mx-auto max-w-screen-2xl">
        <table className="nftTable float-left">
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th1}>Collection</th>
              <th style={styles.th}>Floor Price</th>
              <th style={styles.th}>Volume</th>
            </tr>
          </thead>
          <tbody className="text-2xl lg:text-base">
            {nftCollections1 ? (
              nftCollections1.map((collection, index) => (
                <NftTableRow collection={collection} index={index + 1} />
              ))
            ) : (
              <tr>
                <td colSpan={3}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        <table className="nftTable float-left">
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th1}>Collection</th>
              <th style={styles.th}>Floor Price</th>
              <th style={styles.th}>Volume</th>
            </tr>
          </thead>
          <tbody className="text-2xl lg:text-base">
            {nftCollections2 ? (
              nftCollections2.map((collection, index) => (
                <NftTableRow collection={collection} index={6 + index} />
              ))
            ) : (
              <tr>
                <td colSpan={3}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NftTable;
