import React, { useContext, useEffect} from "react";
import { CoinMarketContext } from "../../context/context";
import CMCTableHeader from "./CMCTableHeader";
import CMCTableRow from "./CMCTableRow";

const CMCTable = () => {
  let { top100Coins, coinMetaData } = useContext(CoinMarketContext);

  useEffect(() => {

  }, [top100Coins, coinMetaData])

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
        <CMCTableHeader/>
          {top100Coins && coinMetaData ? (
            top100Coins.map((coin, index) => {
              let matchingMetaData = coinMetaData.filter(match => match.id === coin.id);
              let volumeInCoin = coin.quote.USD.volume_24h / coin.quote.USD.price
              return (
                <CMCTableRow
                  key={index}
                  id={coin.id}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={matchingMetaData[0].logo}
                  showBuy={true}
                  hour1={coin.quote.USD.percent_change_1h}
                  hour24={coin.quote.USD.percent_change_24h}
                  dayRate={coin.quote.USD.percent_change_7d}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                  volumeInCoin={volumeInCoin}
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
