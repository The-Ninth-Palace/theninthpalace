import React from "react";
import ConnectMetaMask from "./connectmeta";
import { Link } from "react-router-dom";
import './header.css'



function Header() {
    return (
       <>
{/* <!-- Header --> */}
	<header class="neoh_fn_header">
		<div class="container">
			<div class="header_in">

				<div class="logo">
					<a href="./"><img src="img/logo.png" alt="The Ninth Palace NFT Icon" title="The Ninth Palace "/></a>
				</div>
				{/* <ConnectMetaMask /> */}
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
				<Link 
				style={{textDecoration:'none',color:'white'}}
				to="/teams"><li>Nuclino</li></Link>
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
				<div className='connect_wallet'>
					CONNECT WALLET
				</div> 
			</div>
			
		</div>
		
	</header>
	{/* <!-- !Header --> */}

    </>
    
  );
}

export default Header;