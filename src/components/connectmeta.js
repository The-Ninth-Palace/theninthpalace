import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function isMobileDevice ()  {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

export default function ConnectMetaMask  ({ onAddressChanged }) {
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

  function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
      const dappUrl = "jing313.github.io/theninthpalace/"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
      const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
      return (
          <div class="buttons">
              <a href={metamaskAppDeepLink} class="neoh_fn_button">
                  <span class="text">
                  Connect to MetaMask
                  </span>
              </a>
      </div>
      );
    }
  
    
    return (
      <div class="buttons">
              <a href="" class="neoh_fn_button only_text" onClick={() => connect(setUserAddress)}>
              
              <span class="text"> {userAddress? "Connected": "Connect wallet"} </span>
              
              </a>
              <span className="text">{userAddress? `${userAddress.substring(0, 5)}...${userAddress.substr(-6)}`  : ""}</span>
      </div>
      // <button  onClick={() => connect(setUserAddress)}>
      //   Connect to MetaMask
      // </button>
    );
  }
  

  // return userAddress ? (
  //   <div>
  //   Connected with <Address userAddress={userAddress} />
  //   </div>
  // ) : (
  //   <Connect setUserAddress={setUserAddress}/>
  // );
  return <Connect setUserAddress={setUserAddress}/>;
}





function Address({ userAddress }) {
  
  return (
    <span className="text">{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
    // <div class="buttons">
    //     <span className="text">{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
    // </div>
    
  );
}

// ------------------------------ 2nd ---------------------------
// import React, { useEffect, useState } from "react";

// function isMobileDevice ()  {
//     return 'ontouchstart' in window || 'onmsgesturechange' in window;
// }

// function isMetaMaskInstalled() {
//   return Boolean(window.ethereum);
// }

// async function readAddress() {
//   const method = "eth_requestAccounts";
//   const accounts = await window.ethereum.request({
//     method
//   });

//   return accounts[0];
// }

// function getSelectedAddress() {
//   return window.ethereum?.selectedAddress;
// }

// const ConnectWalletButton = ({ onChange }) => {
//   const [address, setAddress] = useState(getSelectedAddress()
//   );

//   const connectWallet = async () => {
//     const selectedAddress = await readAddress();

//     setAddress(selectedAddress);
//     onChange(selectedAddress);
//   };

//   useEffect(() => {
//     const eventName = `accountsChanged`;

//     if (!isMetaMaskInstalled()) {
//       return;
//     }

//     const listener = (selectedAddress) => {
//       setAddress(selectedAddress);
//       onChange(selectedAddress);
//     };

//     window.ethereum.on(eventName, listener);

//     return () => {
//       window.ethereum.removeListener(eventName, listener);
//     };
//   }, [onChange]);

//   // Connnect button
//   function Connect({ setUserAddress }) {
//     if (isMobileDevice()) {
//       const dappUrl = "jing313.github.io/theninthpalace/"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
//       const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
//       return (
//           <div class="buttons">
//               <a href={metamaskAppDeepLink} class="neoh_fn_button">
//                   <span class="text">
//                   Connect to MetaMask
//                   </span>
//               </a>
//       </div>
//       );
//     }

//     return (
//       <div class="buttons">
//               <a href="" class="neoh_fn_button only_text" onClick={connectWallet}>
              
//                   <span class="text">
//                   Connect
//                   </span>
//               </a>
              
//       </div>
//     );
//   }

//   // Address
//   function Address({ userAddress }) {
  
//       return (
//         <span className="text">{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
//       );
//     }

//   if (!isMetaMaskInstalled()) {
//     return <>No wallet found. Please install MetaMask.</>;
//   }

//   if (address) {
//     return <div> Connected with <Address userAddress={address} /></div>;
//   }

//   return <Connect />;
// };

// export default ConnectWalletButton;


