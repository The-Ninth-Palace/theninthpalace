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
                Organize. Design. Develop. Test. Release.
                </h2>
                {/* <div class="categories">
                  <p>Game, NFTs, Tokens</p>
                </div> */}
              </div>
              {/* <!-- !Single Title --> */}

              {/* <!-- Single Description --> */}
              <div class="single_desc">
                <p class="fn_desc">
                Please understand that the following is subject to change. This document is meant to lead The Resistance, but it is not a definitive list of what we must do to flourish. The timing and order of these items can change as we scale. Development in our industry is fluid and game design documents, roadmaps, or business plans are used more as guides than strict sets of rules.
                </p>
                <p class="fn_desc">
                Any delays in the development, design, or implementation of the following will be communicated to the community as early as possible.
                </p>
                <p class="fn_desc">
                We've created this Roadmap with three primary goals in mind.
                </p>
                <p class="fn_desc">
                    <ul>
                        <li>
                        Build a AAA-quality P2E game that is fun. Our primary goal is to ensure that our community enjoys game play and becomes invested in the storyline.
                        </li>
                        <li>
                        Create a game economy that is sustainable over time and ensure that ownership of assets lies with the community, not the publisher or the development team.
                        </li>
                        <li>
                        Onboard traditional gamers into Web3 gaming ecosystems and change the way gamers earn through eSports.
                        </li>
                    </ul>
                    Finally, great game design and/or development takes time. However, this doesn’t mean wasteful spending or endless delays with no apparent reason. Technical updates will be shared regularly via Nuclino; creative updates will be shared via Medium and/or our social media accounts.
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
