// import { useEffect, useState, useContext } from "react";
import React from 'react';
import Header from "../../components/Header";
import NftTable from "../../components/nftTable/NftTable";
import NftDisplay from "../../components/nftDisplay/nftDisplay";
// import { NFTContext } from "../../context/nftContext";

const Nfts = () => {
    return (
        <div>
            <Header />
            <NftTable />
            <NftDisplay />    
        </div>
    )
}

export default Nfts;