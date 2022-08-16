import React, { useState } from "react";
// import ConnectMetaMask from "./connectmeta";
import { Link } from "react-router-dom";
import './header.css'



function Header() {

	const[currentAccount, setCurrentAccount]=useState()

	const connectWallet=async()=>{
		try {
			if(!window.ethereum)return alert('You dont have metamask installed')

		const accounts=await window.ethereum.request({method:'eth_requestAccounts'})
		setCurrentAccount(accounts[0]);
	
		} catch (error) {
			console.log(error)

			throw new Error('no object found')
		}
		
	}
    return (
       <>
{/* <!-- Header --> */}
	<header class="neoh_fn_header">
		<div class="container">
			<div class="header_in">

				<div class="logo">
					<a href="./"><img src="img/logo.png" alt="The Ninth Palace NFT Icon" title="The Ninth Palace "/></a>
				</div>
				
				<div className='navbar_links_desktop'>
				<ul className="navbar_links_desktop_list">
				<Link 
				style={{textDecoration:'none',color:'white'}}
				to="/"><li>Home</li></Link>
				<Link 
				style={{textDecoration:'none',color:'white'}}
				to="/about"><li>About</li></Link>
				<Link 
				style={{textDecoration:'none',color:'white'}}
				to="/roadmap"><li>Securus Protocol</li></Link>
					{/* <li class="menu-item"><Link to="/#">Mint</Link></li> */}
				<div className='underlineForNav'>
				<a 
				style={{textDecoration:'none',color:'white'}}
				href="https://app.nuclino.com/The-Ninth-Palace/The-Ninth-Palace/Welcome-5998cab8-2635-4d24-9a85-fcc42ce3f3b6"><li>Nuclino</li></a>
				</div>
				</ul>
				</div>
				
				{/* <div className='connect_wallet'>
					CONNECT WALLET
				</div> */}

				<div class="trigger">
					<div class="trigger_in hamburger_new">
						<span class="text">Menu</span>
						<span class="hamb">
							<span class="hamb_a"></span>
							<span class="hamb_b"></span>
							<span class="hamb_c"></span>
						</span> 
					</div>
				</div>
				
				<div className='connect_wallet'
				onClick={connectWallet}
				>
					CONNECT WALLET
				</div> 
				{/* <div className="connect_meta_new">
				<ConnectMetaMask />
				</div> */}
				
			</div>
			
		</div>
		
	</header>
	{/* <!-- !Header --> */}

    </>
    
  );
}

export default Header;