import React from "react";
import SocialList from "../../sociallist";
import DescItem1 from "./descitem1";
import DescItem2 from "./descitem2";
import Gallery1 from "./gallery1";
import RoadmapVideo from "./roadmapvideo";

function SingleContent() {
    return (
    <>
   <div class="neoh_fn_roadmap neoh_fn_single">
		
        {/* <!-- Single Background --> */}
        <div class="single_bg"></div>
        {/* <!-- !Single Background --> */}
        
        {/* <!-- Single Content --> */}
        <div class="single_content">
            
            <div class="container" id="roadmap-single-content">
            
                <div class="neoh_fn_share">
                    <h5 class="label">Share:</h5>
                    <ul>
                        <li><SocialList /></li>
                    </ul>
                </div>
                
                <div class="neoh_fn_breadcrumbs">
                    <p>
                        <a href="/">Home</a>
                        <span class="separator">/</span>
                        <a href="/roadmap">Securus Protocol</a>
                        <span class="separator">/</span>
                        <span class="current">Mini Game Launch for Community</span>
                    </p>
                </div>
                
                <div class="single_img">
                    <img src="img/roadmap/Roadmap.jpg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace " />
                </div>
                
                <DescItem1 />
                
                {/* <!-- Mosaic Gallery --> */}
                <Gallery1 />
                {/* <!-- !Mosaic Gallery --> */}
                
                {/* <!-- Single Description --> */}
                <DescItem2 />
                {/* <!-- !Single Description --> */}
                
                
            </div>
            
            {/* <!-- Video & Description Section --> */}
            <RoadmapVideo />
            {/* <!-- !Video & Description Section --> */}
            
        </div>
        {/* <!-- !Single Content --> */}
        
    </div>
    </>
    
  );
}

export default SingleContent;