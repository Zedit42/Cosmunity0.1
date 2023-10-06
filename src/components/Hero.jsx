"use client"
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { StargateClient } from "@cosmjs/stargate";
import ChatBox from '../components/ChatBox'

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
    const buttonHandlerKeplrBalance = async() => {

        const client = await StargateClient.connect('https://rpc.akashnet.net:443');

        // Get balance as Coin.
        // Amount is the number of coins, while denom is the identifier of the coins.
        const balanceAsCoin = await client.getBalance(cosmosAddress, 'uakt');
        const balance = parseInt(balanceAsCoin.amount) * 1/1e6;

        // Set state values.
        setCosmosBalance(balance);
        setCosmosToken('AKT');
    };
    useEffect(() => {
      if (cosmosAddress!= undefined) {
        buttonHandlerKeplrBalance();
      }
    
    }, [cosmosAddress])
    

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
                className=" fixed w-screen min-w-[1024px] h-screen object-cover z-0"
            />


            {cosmosAddress ? (
            <div className=" z-10 pixelbg max-w-[90%] max-h-[85vh]">
                {/* <label>
                    Available balance of {cosmosAddress}: {cosmosBalance} {cosmosToken}
                </label>
                <button onClick={buttonHandlerKeplrBalance} variant="primary" disabled={!cosmosAddress}>
                    Get balance
                </button> */}
                <ChatBox walletAddress={cosmosAddress} tokenAmount={cosmosBalance}/>
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