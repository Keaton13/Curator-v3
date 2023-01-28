import React, { useState, useContext, useEffect, useCallback } from "react";
import btc from "../../assets/btc.png";
import { CoinMarketContext } from "../../context/context";
import CMCTableHeader from "./CMCTableHeader";
import CMCTableRow from "./CMCTableRow";
const CMCTable = () => {
  let { getTopTenCoins, getCoinMetaData } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState(null);
  let [coinMetaData, setCoinMetaData] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = useCallback(async () => {
    let ids=[]
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];
          ids.push(element.id)
          filteredResponse.push(element);
      }
      setCoinData(filteredResponse);
    } catch (e) {
      console.log(e.message);
    }

    try {
      let apiResponse = await getCoinMetaData(ids);
      let filtered = Object.values(apiResponse).filter(item => item.id);
      setCoinMetaData(filtered);
    } catch (e) {
      console.log(e.message)
    }

  }, [getTopTenCoins, getCoinMetaData]);

  // console.log(coinData, coinMetaData);
  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCTableHeader/>
          {coinData && coinMetaData ? (
            coinData.map((coin, index) => {
              let matchingMetaData = coinMetaData.filter(match => match.id === coin.id);
              return (
                <CMCTableRow
                  key={index}
                  id={coin.id}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={matchingMetaData[0].logo}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  // hRateIsIncrement={true}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCTable;
