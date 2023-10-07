"use client"
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { StargateClient } from "@cosmjs/stargate";
import ChatBox from '../components/ChatBox'
import Link from "next/link";

export const ConnectWallet = forwardRef((_, ref) => {

    // Usetstate for storing wallets details state.
    const [cosmosAddress, setCosmosAddress] = useState("");
    const [cosmosBalance, setCosmosBalance] = useState(null);
    const [cosmosToken, setCosmosToken] = useState(null);
  

    const buttonHandlerKeplrConnect = async() => {

        if (window.keplr) {

            // Unlock the wallet.
            await window.keplr.enable('akashnet-2'); 

            // Use offlineSigner to get first wallet and public key.
            // Currently only first address is supported.
            const offlineSigner = await window.getOfflineSigner('akashnet-2');
            const keplrAccounts = await offlineSigner.getAccounts();

            // Set state value as first address.
            setCosmosAddress(keplrAccounts[0].address);
        } else {
            alert("Keplr extension is not installed.");
        }
    };

    // Button handler button for handling a balance request for Cosmos SDK wallet as RPC.
    // const buttonHandlerKeplrBalance = async() => {

    //     const client = await StargateClient.connect('https://rpc.akashnet.net:443');

    //     // Get balance as Coin.
    //     // Amount is the number of coins, while denom is the identifier of the coins.
    //     const balanceAsCoin = await client.getBalance(cosmosAddress, 'uakt');
    //     const balance = parseInt(balanceAsCoin.amount) * 1/1e6;

    //     // Set state values.
    //     setCosmosBalance(balance);
    //     setCosmosToken('AKT');
    // };
    // useEffect(() => {
    //   if (cosmosAddress!= undefined) {
    //     buttonHandlerKeplrBalance();
    //   }
    
    // }, [cosmosAddress])
    

    // Clear cosmos balance data.
    useImperativeHandle(ref, () => ({

        handleClearUtils() {
            setCosmosAddress("");
            setCosmosBalance(null);
            setCosmosToken("");
        }
    }));

    return (
        <>
            <img
                src="/bg.png"
                className=" fixed w-screen mt-[3rem] min-w-[1024px] h-screen object-cover -z-10"
            />


            {cosmosAddress ? (
            <div className=" z-20 pixelbg max-w-[100%]">
                {/* <label>
                    Available balance of {cosmosAddress}: {cosmosBalance} {cosmosToken}
                </label>
                <button onClick={buttonHandlerKeplrBalance} variant="primary" disabled={!cosmosAddress}>
                    Get balance
                </button> */}
                <ChatBox walletAddress={cosmosAddress} tokenAmount={cosmosBalance}/>
                <Link href={'/creategroup'} className=" fixed -bottom-8 -right-5 z-50 p-2 pixelbg">
                <img
                    src="/create.svg"
                    className=" h-[2rem] w-[2rem]"                
                />
            </Link>
            </div>
            ) : (
                <div className=" z-10 m-auto scale-150">
                <div className=" text-white">
                    <div className=" text-5xl text-center">
                        Cosmunity
                    </div>
                    <div className=" text-center text-lg italic">
                        Connect With Cosmonauts
                    </div>
                </div>
                <button onClick={buttonHandlerKeplrConnect} data-testid="keplr-button" className=" pixelbg items-center text-xl">
                    CONNECT WALLET
                </button>
                </div>
            )}
        </>
    )
})