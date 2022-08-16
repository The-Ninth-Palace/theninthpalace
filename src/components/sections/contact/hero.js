import React from "react";
import TeamBg from "../../../assest/landing/teams-bg.webp";

function ContactHero() {
    return (
    <>
    {/* <!-- Page Title --> */}
    <div class="neoh_fn_pagetitle">
			<div class="bg_overlay">
				<div class="bg_color"></div>
				<div class="bg_image" data-bg-img={TeamBg}></div>
				{/* <div class="bg_image" data-bg-img="img/landing/teams-bg1.jpg"></div> */}
			</div>
			<div class="pt_content">
				<div class="container">
					<h3 class="fn_title fn_animated_text" data-wait="1000" data-speed="8">Team</h3>
					{/* <p class="fn_desc">
						<a href="/">Home</a>
						<span class="separator">/</span>
						<span class="current">Team</span>
					</p> */}
				</div>	
			</div>
		</div>
        {/* <!-- !Page Title --> */}
    </>
    
  );
}

export default ContactHero;