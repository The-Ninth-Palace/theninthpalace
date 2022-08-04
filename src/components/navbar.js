import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SocialListFooter from "./sociallistfooter";

function Navbar() {
 return (
    <>
    {/* <!-- Right Navigation --> */}
	<div class="nav_overlay"></div>
	<div class="neoh_fn_nav">
		<div class="trigger is-active">
			<div class="trigger_in">
				<span class="text">Close</span>
				<span class="hamb">
					<span class="hamb_a"></span>
					<span class="hamb_b"></span>
					<span class="hamb_c"></span>
				</span>
			</div>
		</div>
		
		<div class="nav_content">
			<div class="nav_menu">
				<ul>
					<li class="menu-item"><Link to="/">Home</Link></li>
					<li class="menu-item"><Link to="/about">About</Link></li>
					<li class="menu-item"><Link to="/roadmap">Securus Protocol</Link></li>
					{/* <li class="menu-item"><Link to="/#">Mint</Link></li> */}
					<li class="menu-item"><Link to="/teams">Team</Link></li>
				</ul>
			</div>
			<div class="nav_buttons">
				{/* <a href="https://opensea.io/" class="neoh_fn_button" target="_blank">
					<span class="icon">
						<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" width="223.000000pt" height="200.000000pt" viewBox="0 0 223.000000 200.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1058 1985 c-40 -22 -48 -45 -48 -129 0 -42 -3 -76 -8 -76 -4 0 -65 16 -136 35 -71 20 -131 34 -133 31 -2 -2 14 -40 36 -85 142 -282 206 -551 170 -723 -13 -65 -90 -228 -153 -327 -26 -40 -45 -79 -42 -87 4 -11 34 -14 136 -14 l130 0 0 -100 0 -100 -152 0 c-134 0 -157 2 -196 21 -56 27 -93 84 -100 149 l-5 50 -275 0 -275 0 6 -78 c7 -85 37 -181 82 -258 44 -75 150 -174 231 -217 140 -73 135 -72 739 -72 534 0 541 0 587 22 69 31 141 104 212 213 35 52 84 127 110 167 37 56 62 82 116 118 37 25 82 50 99 56 31 11 31 11 31 86 0 66 -2 74 -17 69 -10 -3 -137 -39 -283 -81 l-265 -77 -70 -68 c-92 -91 -116 -100 -260 -100 l-115 0 0 100 0 100 74 0 c85 0 102 10 200 120 75 84 110 135 149 218 28 58 32 77 31 147 -1 97 -23 160 -96 272 -52 81 -266 303 -326 338 l-32 19 0 88 c0 90 -13 142 -43 166 -24 20 -79 24 -109 7z"/> <path d="M586 1558 c-18 -29 -126 -198 -240 -376 -113 -178 -206 -328 -206 -333 0 -5 103 -9 254 -9 l254 0 52 105 c61 121 72 195 50 319 -21 118 -101 346 -121 346 -5 0 -24 -24 -43 -52z"/></g></svg>
					</span>
					<span class="text">OpenSea</span>
				</a>
				<a href="https://looksrare.org/" class="neoh_fn_button" target="_blank">
					<span class="icon">
						<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 3.08105 24 19.14"><path d="M12.0002 13.946C9.9412 13.946 8.27051 12.277 8.27051 10.2163C8.27051 8.15559 9.9412 6.48657 12.0002 6.48657C14.0593 6.48657 15.73 8.15559 15.73 10.2163C15.73 12.277 14.0593 13.946 12.0002 13.946ZM10.3786 10.2163C10.3786 11.1123 11.105 11.8379 12.0002 11.8379C12.8955 11.8379 13.6219 11.1123 13.6219 10.2163C13.6219 9.32034 12.8955 8.59468 12.0002 8.59468C11.105 8.59468 10.3786 9.32034 10.3786 10.2163Z M0 10.2211L7.13513 3.08105H16.8649L24 10.2211L12 22.2162L0 10.2211ZM17.5135 7.62156C14.4818 4.57658 9.51816 4.5766 6.48649 7.62158L3.89189 10.2162L6.48649 12.8108C9.51816 15.8558 14.4818 15.8558 17.5135 12.8108L20.1081 10.2162L17.5135 7.62156Z" /></svg>
					</span>
					<span class="text">Looksrare</span>
				</a> */}
				{/* <a href="https://discord.com/" class="neoh_fn_button" target="_blank">
					<span class="icon">
						<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="392.000000pt" viewBox="0 0 512.000000 392.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,392.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1690 3885 c-317 -70 -559 -148 -858 -275 -49 -21 -57 -30 -126 -139 -330 -522 -544 -1059 -641 -1610 -50 -287 -59 -412 -58 -766 1 -181 5 -355 10 -385 l8 -54 130 -89 c325 -221 663 -391 1017 -512 73 -25 138 -43 144 -41 25 10 274 407 274 437 0 4 -26 17 -57 29 -79 31 -335 158 -352 175 -17 17 -13 23 41 62 l43 31 100 -43 c528 -225 1131 -298 1690 -204 257 43 491 114 766 232 35 15 36 15 80 -20 24 -19 44 -40 44 -46 0 -14 -209 -124 -320 -168 -44 -18 -84 -36 -89 -40 -20 -18 239 -448 270 -449 7 0 65 18 130 41 369 127 702 294 1029 516 l130 89 7 54 c3 30 9 159 13 285 28 882 -200 1686 -702 2477 l-74 116 -137 57 c-253 105 -583 205 -826 250 l-90 17 -17 -24 c-10 -12 -42 -74 -71 -137 l-53 -113 -50 6 c-27 3 -93 11 -145 18 -124 16 -645 16 -775 0 -55 -6 -122 -14 -150 -18 l-50 -5 -65 133 c-76 155 -63 148 -220 113z m204 -1649 c131 -64 226 -189 262 -343 20 -84 14 -223 -14 -304 -115 -344 -492 -448 -737 -204 -160 160 -199 419 -95 632 57 115 150 199 269 240 55 20 80 23 154 20 76 -4 98 -9 161 -41z m1702 -1 c171 -84 274 -259 274 -465 0 -150 -47 -274 -142 -375 -260 -279 -680 -133 -764 265 -44 209 47 442 216 550 82 53 151 71 253 66 77 -3 98 -8 163 -41z"/></g></svg>
					</span>
					<span class="text">Discord</span>
				</a> */}
			</div>
		</div>
		
		{/* <!-- Nav Footer --> */}
		<div class="nav_footer">
			{/* <div class="nf_left">
				<p>Copyright: CC0; Design: Frenify; Development: Jin </p>
			</div> */}
			<div class="nf_left">
				<SocialListFooter />
			</div>
		</div>
		{/* <!-- !Nav Footer --> */}
		
	</div>
	{/* <!-- !Right Navigation --> */}
    </>
    
  );
}

export default Navbar;