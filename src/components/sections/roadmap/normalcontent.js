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
                  <p>Game, NFTs, Tokens</p>
                </div>
              </div>
              {/* <!-- !Single Title --> */}

              {/* <!-- Single Description --> */}
              <div class="single_desc">
                <p class="fn_desc">
                Please, understand that the following is subject to change. This document is meant to lead The Resistance, 
                but it is not a definitive list of what we must do to flourish. The timing and order of these items can change as we scale. 
                We've created this Roadmap with three primary goals in mind.
                    <ul>
                        <li>Raise the bar for NFT projects as businesses. Creating value has to be the future; great art is a healthy baseline. 
                          This is the standard we have set for ourselves, and hopefully, it translates into a higher level of commitment from the 
                          projects that are building the future.</li>
                        <li>Build AAA-quality Web3, P2E video game. All blockchain games don't have to be pixelated cartoons or card games. 
                          They should be fun, engaging, challenging, and sustainable. We have worked tirelessly to make this a reality by 
                          building what we think is fun.</li>
                        <li>Bridge gaming and Web3 in a tangible way and change the way gamers earn in eSports. There is a point on the curve of 
                          p2e sustainability that we identified as the sweet spot. This involves building a business around the game, and ensuring 
                          each step of the process is bringing us closer to our fulfilling our goals.</li>
                    </ul>
                    Having said that, we are building in a fluid environment, and that means we need to be flexible and able to adjust in order to survive. 
                    This document was created to help us - the core team - focus, and to give holders an idea of what we intend to do. We're excited for the future 
                    and welcome suggestions surrounding gameplay, onboarding, The Safe House marketplace, or anything else the community thinks is missing from the 
                    P2E environment. 
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
