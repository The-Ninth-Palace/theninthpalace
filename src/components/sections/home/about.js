import React from "react";
import { Link } from "react-router-dom";
// import PlaySound from "../../sound";
import InceptionCollection from "../../../assest/landing/InceptionCollection.webp";
import WhatareAvatar from "../../../assest/landing/whatareAvatar.webp";
// import AudioPlayer from "../../musicplayer/audioplayer";

function HomeAbout() {
    return (
    <>
    <section id="about">
			<div class="container">
				
				{/* <!-- About Item #1 --> */}
				<div class="neoh_fn_about_item">
					<div class="img_item">
						{/* <img src="img/landing/InceptionCollection.jpg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/> */}
						<img src={InceptionCollection} alt="The Ninth Palace NFT Icon " title="The Ninth Palace "/>
					</div>
					<div class="content_item">
						
						<div class="neoh_fn_title" data-align="left">
							<h3 class="fn_title">The Resistance Collection</h3>
							<div class="line"><span></span></div>
						</div>
						
						<div class="desc">
							{/* <PlaySound/> */}
							{/* <AudioPlayer /> */}
							<p>
							The Resistance Collection is the first and only avatar collection from The Ninth Palace. The Resistance is a collective of 10,007 rogue soldiers and civilians committed to taking down the Modgnik Detinu government.
							</p>
							<ul>
								<li>Date/Time: 8/29; 7:53 EST</li>
								<li>Price: 0.17 Ether</li>
								<li>Maximum per Wallet: 7</li>
								<li>Total Supply: 10,007; 21 Avatars will be withheld from public mint for the Core Team.</li>
								{/* Your Resistance NFT will double as your avatar for “The Ninth Palace” PC game and “The Ninth Palace: Hunted for Love” mobile game.  */}
							</ul>
							<p>
							The smart contract created for the mint is novel. It’s one of the most efficient mint contracts ever written. The gas fee/s for minting will be incredibly low regardless of the number of avatars minted. 
							</p>
							<p>
							The Safe House will only be available to members of The Resistance; your bonafides will be checked at the door. Holders will own all IP rights to all of their assets.
							</p>
						</div>

						<div className='about_home_new'>
							<a href='https://app.nuclino.com/The-Ninth-Palace/The-Ninth-Palace/Avatar-d3a122c8-db4b-401d-a358-1809e01859aa'
							style={{textDecoration:'none',color:'white'}}
							>
								<span className='btn_new'>Read More</span>
								{/* <span class="button">
									<svg class="fn__svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 29.96"><title>3-horizontal-dots</title><path class="cls-1" d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z"/></svg>
								</span> */}
							</a>
						</div>
						
					</div>
				</div>
				{/* <!-- !About Item #1 --> */}
				
				{/* <!-- About Item #2 --> */}
				<div class="neoh_fn_about_item reverse">
					<div class="img_item">
						{/* <img src="img/landing/whatareAvatar.jpg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace " /> */}
						<img src={WhatareAvatar} alt="The Ninth Palace NFT Icon " title="The Ninth Palace " />
					</div>
					 <div class="content_item">
						<div class="neoh_fn_title" data-align="left">
							<h3 class="fn_title">What are the Avatars?</h3>
							<div class="line"><span></span></div>
						</div>
						
						<div class="desc">
						<p>
						The Resistance Avatars are the 2D representations of the in-game avatars for The Ninth Palace game/s. It will determine the game mechanics a user experiences during gameplay based on the traits within the metadata.
						</p>
						<p>
						Collectors will have the chance to move up or down on the secondary market before the game/s are released, before the Auxiliary Airdrop, and/or before the game mechanics for specific metadata are shared.
						</p>
						<ul>
							<li>The Auxiliary Airdrop is connected to avatar metadata and will NOT include another round of avatars.</li>
							<li>There are eight base versions of Avatar. Each NFT will be programmatically generated from roughly 217 unique traits. However, the avatar generation is a bit more complex than that. Below is the simple trait breakdown to help the community better grasp the nuance surrounding generation.</li>
							<ul>
								<li>Total Traits = 217</li>
								<li>Male ONLY Traits = 32</li>
								<li>Female ONLY Traits = 27</li>
							</ul>
						{/* The hidden meaning is built into every aspect of the project. Unwinding it will take some time and it’s important to stop, look, and 
						factor in every detail. */}
						</ul>
						</div>
						
						{/* <div class="buttons">
							<a href="https://discord.gg/XB2z53vAmE" target="_blank" class="neoh_fn_button">
								<span class="icon">
									<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="392.000000pt" viewBox="0 0 512.000000 392.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,392.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1690 3885 c-317 -70 -559 -148 -858 -275 -49 -21 -57 -30 -126 -139 -330 -522 -544 -1059 -641 -1610 -50 -287 -59 -412 -58 -766 1 -181 5 -355 10 -385 l8 -54 130 -89 c325 -221 663 -391 1017 -512 73 -25 138 -43 144 -41 25 10 274 407 274 437 0 4 -26 17 -57 29 -79 31 -335 158 -352 175 -17 17 -13 23 41 62 l43 31 100 -43 c528 -225 1131 -298 1690 -204 257 43 491 114 766 232 35 15 36 15 80 -20 24 -19 44 -40 44 -46 0 -14 -209 -124 -320 -168 -44 -18 -84 -36 -89 -40 -20 -18 239 -448 270 -449 7 0 65 18 130 41 369 127 702 294 1029 516 l130 89 7 54 c3 30 9 159 13 285 28 882 -200 1686 -702 2477 l-74 116 -137 57 c-253 105 -583 205 -826 250 l-90 17 -17 -24 c-10 -12 -42 -74 -71 -137 l-53 -113 -50 6 c-27 3 -93 11 -145 18 -124 16 -645 16 -775 0 -55 -6 -122 -14 -150 -18 l-50 -5 -65 133 c-76 155 -63 148 -220 113z m204 -1649 c131 -64 226 -189 262 -343 20 -84 14 -223 -14 -304 -115 -344 -492 -448 -737 -204 -160 160 -199 419 -95 632 57 115 150 199 269 240 55 20 80 23 154 20 76 -4 98 -9 161 -41z m1702 -1 c171 -84 274 -259 274 -465 0 -150 -47 -274 -142 -375 -260 -279 -680 -133 -764 265 -44 209 47 442 216 550 82 53 151 71 253 66 77 -3 98 -8 163 -41z"/></g></svg>
								</span>
								<span class="text">Discord</span>
							</a>
							<a href="https://theninthpalace.medium.com/" class="neoh_fn_button" target="_blank">
								<span class="icon">
									<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><title>Medium</title><path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"/></svg>
								</span>
								<span class="text">Medium</span>
							</a>
						</div> */}
						
					</div> 
				</div>
				{/* <!-- !About Item #2 --> */}
				
				
			</div>
		</section>
    </>
    
  );
}

export default HomeAbout;