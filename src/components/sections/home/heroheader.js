import React from "react";
import { motion } from "framer-motion";
import LandingBg from "../../../assest/landing/LandingBg.jpg";

function HeroHeader() {
    return (
    <>
    <div class="neoh_fn_hero">
			
			{/* <!-- Overlay (of hero header) --> */}
			<div class="bg_overlay">
				
				{/* <!-- Overlay Color --> */}
				<div class="bg_color"></div>
				{/* <!-- !Overlay Color --> */}
				
				{/* <!-- Overlay Image --> */}
				<div class="bg_image" data-bg-img={LandingBg}></div>
				{/* <div class="bg_image" data-bg-img="img/landing/LandingBg.jpg"></div> */}
				{/* <div class="bg_image" data-bg-img="img/svg/LandingImages/LandingBackground.svg"></div> */}
				{/* <!-- !Overlay Image --> */}
				
			</div>
			{/* <!-- Overlay (of hero header) --> */}
			
			<div class="hero_content">
				<div class="container">
					<motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ ease: "easeInOut", duration: 2, type: 'tween' }} class="content">
						<motion.h2 initial={{ opacity: 0 }} transition={{duration:1, delay:0}} whileInView={{ opacity: 1 }} viewport={{ once: true }}
						class="fn_title fn_animated_text" title="Ninth Palace" data-wait="1200" data-speed="8" >The Ninth Palace</motion.h2>
						 {/* class="fn_title fn_animated_text" title="Ninth Palace" data-wait="1000" data-speed="8">The Ninth Palace</motion.h2> */}

						<p class="fn_desc fn_animated_text" data-wait="1500" data-speed="5"><b>Join The Resistance</b></p>
						
					</motion.div>
					
				</div>
				<div class="content_item_landing">
					<br/>
				<motion.div initial={{ x: 300 }} animate={{ x: 0 }} transition={{ ease: "easeInOut", duration: 2, type: 'tween' }}
				 class="buttons">
							<a href="https://discord.gg/XB2z53vAmE" target="_blank" class="neoh_fn_button">
								<span class="icon">
									<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="392.000000pt" viewBox="0 0 512.000000 392.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,392.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1690 3885 c-317 -70 -559 -148 -858 -275 -49 -21 -57 -30 -126 -139 -330 -522 -544 -1059 -641 -1610 -50 -287 -59 -412 -58 -766 1 -181 5 -355 10 -385 l8 -54 130 -89 c325 -221 663 -391 1017 -512 73 -25 138 -43 144 -41 25 10 274 407 274 437 0 4 -26 17 -57 29 -79 31 -335 158 -352 175 -17 17 -13 23 41 62 l43 31 100 -43 c528 -225 1131 -298 1690 -204 257 43 491 114 766 232 35 15 36 15 80 -20 24 -19 44 -40 44 -46 0 -14 -209 -124 -320 -168 -44 -18 -84 -36 -89 -40 -20 -18 239 -448 270 -449 7 0 65 18 130 41 369 127 702 294 1029 516 l130 89 7 54 c3 30 9 159 13 285 28 882 -200 1686 -702 2477 l-74 116 -137 57 c-253 105 -583 205 -826 250 l-90 17 -17 -24 c-10 -12 -42 -74 -71 -137 l-53 -113 -50 6 c-27 3 -93 11 -145 18 -124 16 -645 16 -775 0 -55 -6 -122 -14 -150 -18 l-50 -5 -65 133 c-76 155 -63 148 -220 113z m204 -1649 c131 -64 226 -189 262 -343 20 -84 14 -223 -14 -304 -115 -344 -492 -448 -737 -204 -160 160 -199 419 -95 632 57 115 150 199 269 240 55 20 80 23 154 20 76 -4 98 -9 161 -41z m1702 -1 c171 -84 274 -259 274 -465 0 -150 -47 -274 -142 -375 -260 -279 -680 -133 -764 265 -44 209 47 442 216 550 82 53 151 71 253 66 77 -3 98 -8 163 -41z"/></g></svg>
								</span>
								<span class="text">Discord</span>
							</a>
							<br />
							<a href="https://theninthpalace.medium.com/" class="neoh_fn_button" target="_blank">
								<span class="icon">
									<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><title>Medium</title><path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"/></svg>
								</span>
								<span class="text">Medium</span>
							</a>
							<br />
							<a href="https://twitter.com/theninthpalace/" class="neoh_fn_button" target="_blank">
								<span class="icon">
									<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z" fill="#1da1f2"/></svg>
								</span>
								<span class="text">Twitter</span>
							</a>
						</motion.div>
				</div>
				
				<a href="#about" class="neoh_fn_down magic-hover magic-hover__square">
					<span class="text">Scroll Down</span>
					<span class="icon"><img src='img/svg/right-arr.svg' alt="" class="fn__svg"/></span>
          
				</a>
			</div>
		</div>
    </>
    
  );
}

export default HeroHeader;