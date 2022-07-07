// Importing modules
import React, { useState } from "react";
import { ethers } from "ethers";
// import { Button, Card } from "react-bootstrap";
  
function ConnectMetaMask() {
  
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          address: address,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };
  
//   return (
//     <div >
//       {/* Calling all values which we 
//        have stored in usestate */}
  
//         <p>Address: {data.address}</p>
          
//         <p>Balance: {data.Balance}</p>
          
//         <button onClick={btnhandler} >
//             Connect to wallet
//         </button>
//     </div>
//   );
return data.address ? (
    <div>
    Connected with <span className="text">{data.address.substring(0, 5)}…{data.address.substring(data.address.length - 4)}</span>
    </div>
  ) : (
    <div class="buttons">
              <a href="" class="neoh_fn_button" onClick={btnhandler}>
                  <span class="text">
                  Connect
                  </span>
              </a>
              
      </div>
    // <Connect setUserAddress={setUserAddress}/>
  );
}
  
export default ConnectMetaMask;