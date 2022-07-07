import React from "react";
import HeroSection from "../roadmap/hero";
import SocialList from "../../sociallist";
import BottomDivider from "../../bottomdivider";
import RoadmapPage from "./roadmapcontent1";
import TopDivider from "../../topdivider";

function NormalContent() {
  return (
    <>
      <div class="neoh_fn_content">
        <HeroSection />
        <div class="neoh_fn_roadmap neoh_fn_single">
          <div class="single_content">
            <div class="container" id="roadmap-single-content">
              {/* <div class="neoh_fn_share">
                <h5 class="label">Share:</h5>
                <ul>
                  <li>
                    <SocialList />
                  </li>
                </ul>
              </div> */}

              {/* <div class="neoh_fn_breadcrumbs">
                <p>
                  <a href="/">Home</a>
                  <span class="separator">/</span>
                  <a href="/roadmap">Securus Protocol</a>
                </p>
              </div> */}
              <div class="single_title">
                <h2 class="fn_title">
                    Growth. Economics. Sustainability.
                </h2>
                <div class="categories">
                  <a href="#">Game</a>, <a href="#">NFTs</a>,<a href="#">Tokens</a>
                </div>
              </div>
              {/* <!-- !Single Title --> */}

              {/* <!-- Single Description --> */}
              <div class="single_desc">
                <p class="fn_desc">
                    Please, understand that the following is subject to change. This document is meant to lead the Resistance, but it is not a definitive 
                    list of what we must do to flourish. The timing and order of these items can change as we scale. We've created this Securus Protocol with three
                    primary goals in mind.
                    <ul>
                        <li>Launch The Ninth Palace for PC; Campaign & PvP Modes.</li>
                        <li>Launch Incubator for Web3 game developers/companies.</li>
                        <li>Massive Marketing Campaign - Global, Animated, and Year-Round.</li>
                    </ul>
                    Having said that, we are building in a fluid environment, and that means we need to be flexible and able to adjust in order to 
                    survive. This document was created to help us - the core team - focus, and to give holders an idea of what we intend to do. The 
                    Establishment told us that what we were doing was inconceivable. Then, they told us that what we’ve shown them was going to fail 
                    when “inconceivable” was no longer applicable. Now, they’re telling us they’ll never let us use their marketplace to release the 
                    game build. We will continue to hurdle.
                </p>
              </div>
              {/* <!-- !Single Description --> */}
            </div>
          </div>
          <BottomDivider />
        </div>
        
        

        {/* <!-- RoadMap Page --> */}
        <RoadmapPage />
        {/* <!-- !RoadMap Page --> */}
        <BottomDivider />
      </div>
    </>
  );
}

export default NormalContent;
