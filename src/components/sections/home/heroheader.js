import React from "react";

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
					<div class="content">
						<h2 class="fn_title" title="Ninth Palace">The Ninth Palace</h2>
						<p class="fn_desc fn_animated_text" data-wait="200" data-speed="5"><b>Join The Resistance</b></p>
					</div>
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