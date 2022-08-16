import React from "react";
import Dividers from "../../divider";
// import Flame from "../../../assest/landing/flame_logo.webp";
import ETH from "../../../assest/svg/eth-logo-horiz.svg";
// import ImmutableX from "../../../assest/svg/immutableX-logo-horiz.svg";
// import Unity from "../../../assest/svg/unity-logo-horiz.svg";

function Investors() {
    return (
    <>
    <section id="investor">
			
    <Dividers />
		
			<div class="container"> 
				
				{/* <!-- Main Title --> */}
				<div class="neoh_fn_title">
					<h3 class="fn_title">Powered By</h3>
					<div class="line"><span></span></div>
				</div>
				{/* <!-- !Main Title --> */}
				
				{/* <!-- Investor List Shortcode --> */}
				<div class="neoh_fn_investor">
					<ul>
						<li>
							<div class="item">
								<a href='https://unrealengine.com/en-US'>
								<img 
								style={{backgroundColor:'white'}}
								src='/unreal5.png' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								</a>
								{/* <img src="img/landing/flame_logo.png" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						<li>
							<div class="item">
								<img 
								
								src={ETH} alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								{/* <img src="img/svg/eth-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						<li>
							<div class="item">
								<img 
								src='/sso.webp' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								{/* <img src="img/svg/eth-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						<li>
							<div class="item">
								<a href='https://ens.domains/'>
								<img src='./enslogo.png' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								</a>
								{/* <img src="img/svg/immutableX-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						
						
						 
						{/*<li>
							<div class="item">
								<img src="img/investors/7.png" alt=""/>
								<a href="#" class="full_link"></a>
							</div>
						</li>
						<li>
							<div class="item">
								<img src="img/investors/8.png" alt=""/>
								<a href="#" class="full_link"></a>
							</div>
						</li>
						<li>
							<div class="item">
								<img src="img/investors/9.png" alt=""/>
								<a href="#" class="full_link"></a>
							</div>
						</li>
						<li>
							<div class="item">
								<img src="img/investors/10.png" alt=""/>
								<a href="#" class="full_link"></a>
							</div>
						</li> */}
					</ul>
				</div>
				<div class="neoh_fn_investor">
					<ul>
					<li>
							<div class="item">
								<a href='https://www.nuclino.com/'>
								<img src='./nuclino.png' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								</a>
								{/* <img src="img/svg/unity-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						<li>
							<div class="item">
								<a href='https://www.autodesk.com/products/maya/overview'>
								<img src='./autodeskmaya.png' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								</a>
								{/* <img src="img/svg/unity-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						<li>
							<div class="item">
								<a href='https://www.blender.org/'>
								<img src='./Logo_Blender.svg.png' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								</a>
								{/* <img src="img/svg/unity-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
						<li>
							<div class="item">
								<a href='https://www.audiokinetic.com/en/products/wwise'>
								<img src='./wwise.png' alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								</a>
								{/* <img src="img/svg/unity-logo-horiz.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
								{/* <a href="#" class="full_link"></a> */}
							</div>
						</li>
					</ul>
					
					{/* <ul>
						<li>
							<div class="item">
								<img src="img/landing/playstore.png" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								<a href="#" class="full_link"></a>
							</div>
						</li>
						<li>
							<div class="item">
								<img src="img/landing/appstore.png" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
								<a href="#" class="full_link"></a>
							</div>
						</li>
					</ul> */}
				</div>
				{/* <!-- !Investor List Shortcode --> */}
				
			</div>
		</section>
    </>
    
  );
}

export default Investors;