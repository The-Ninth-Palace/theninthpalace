import React, { useEffect, useState } from "react";
import { ethers } from "ethers";



function isMobileDevice ()  {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }



const Connectmobile = ({onAddressChanged}) => {

    const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    setUserAddress(userAddress);
  }, [userAddress]);

  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
  }});

  async function checkIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
  
      if (accounts.length > 0) {
        const account = accounts[0];
        onConnected(account);
        return;
      }
  
      if (isMobileDevice()) {
        await connect(onConnected);
      }
    }
  }

  async function connect(onConnected) {
    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    }
  
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  
    onConnected(accounts[0]);
    setUserAddress(accounts[0]);
    onAddressChanged(accounts[0]);
  }


  return (
    <div className='connect_mobile_new'
    style={{width:'200px',height:'100px',padding:'10px'}}
    >
        <p>Connect Wallet</p>
    </div>
  )
}

export default Connectmobile;