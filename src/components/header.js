import React from "react";
import ConnectMetaMask from "./connectmeta";

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
				<div class="trigger">
					
					<div class="trigger_in">
					
						<span class="text">Menu</span>
						<span class="hamb">
							<span class="hamb_a"></span>
							<span class="hamb_b"></span>
							<span class="hamb_c"></span>
						</span>
					</div>
				</div>
				
			</div>
		</div>
	</header>
	{/* <!-- !Header --> */}

    </>
    
  );
}

export default Header;