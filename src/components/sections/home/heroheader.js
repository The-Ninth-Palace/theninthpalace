import React from "react";
import { motion } from "framer-motion";

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
				<div class="bg_image" data-bg-img="img/landing/LandingBg.jpg"></div>
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