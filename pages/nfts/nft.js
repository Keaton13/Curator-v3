import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import NftTable from "../../components/nft-table/NftTable";
import { NFTContext } from "../../context/nftContext";

const Nfts = () => {
    return (
        <div>
            <Header />
            <NftTable />
        </div>
    )
}

export default Nfts;