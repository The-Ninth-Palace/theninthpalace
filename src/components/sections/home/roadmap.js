import React from "react";
import { Link } from "react-router-dom";
import Roadmap1 from "../../../assest/landing/roadmap1.jpg";
import Roadmap2 from "../../../assest/landing/roadmap2a.jpg";
import Roadmap3 from "../../../assest/landing/roadmap3a.png";
import Roadmap4 from "../../../assest/landing/roadmap4.jpg";
import Roadmap5 from "../../../assest/landing/roadmap5.png";

function HomeRoadmap() {
  return (
    <>
      <section id="drop">
        <div class="container">
          {/* <!-- Main Title --> */}
          <div class="neoh_fn_title">
            <h3 class="fn_title">Securus Protocol 2022-2023</h3>
            <div class="line">
              <span></span>
            </div>
          </div>
          {/* <!-- !Main Title --> */}

          {/* <!-- Timeline --> */}
          <div class="neoh_fn_timeline">
            {/* <!-- Timeline Content --> */}
            <div class="timeline_content">
              <ul class="timeline_list">
                <li class="timeline_item active" data-index="1">
                  <div class="t_item">
                    <div class="t_item_img">
                    <div class="img_item">
                      <img src={Roadmap1} alt="The Ninth Palace NFT Icon " title="The Ninth Palace " />
                      {/* <img src="img/landing/roadmap1.jpg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace " /> */}
                    </div>
                      {/*<div class="neoh_fn_gallery_1_2">
                         <div class="gallery_in">                        
                           <div class="item row2">
                            <img src="img/landing/roadmap1.jpg" alt="" />
                          </div> 
                          <div class="item">
                            <img src="img/thumbs/02.png" alt="" />
                          </div>
                          <div class="item">
                            <img src="img/thumbs/02.png" alt="" />
                          </div>
                        </div> 
                      </div>*/}
                    </div>
                    <div class="t_item_info">
                      <p class="fn_date">
                        <span>August-September, 2022</span>
                      </p>
                      <h3 class="fn_title"><Link to="/roadmap">Introduction. Explanation. Understanding.</Link></h3>
                      <p class="fn_desc">
                        Introducing the project to the world. Bringing the gaming & NFT communities together through Discord, Medium, and SubStack. 
                        Releasing the first clue in "The Resistance Riddle." The pre-production phase for the PC game will end and production will begin. 
                        The avatars will mint and the first "Safe House" will be opened for holders only. Mobile beta-testing list will open for enrollment. 
                        {/* Events 1 & 2. */}
                        </p>
                        <Link to="/roadmap" class="neoh_fn_button only_text">
												<span class="text">Read More</span>
											</Link>
                    </div>
                  </div>
                </li>
                <li class="timeline_item" data-index="2">
                  <div class="t_item">
                    <div class="t_item_img">
                    <div class="img_item">
                      <img src={Roadmap2} alt="The Ninth Palace NFT Icon " title="The Ninth Palace " />
                      {/* <img src="img/landing/roadmap2a.jpg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace " /> */}
                    </div>
                      {/*<div class="neoh_fn_gallery_1_2">
                         <div class="gallery_in">
                          <div class="item row2">
                            <img src="img/landing/roadmap2a.jpg" alt="" />
                          </div>
                           <div class="item">
                            <img src="img/landing/appstore.png" alt="" />
                          </div>
                          <div class="item">
                            <img src="img/landing/playstore.png" alt="" />
                          </div> 
                        </div> 
                      </div>*/}
                    </div>
                    <div class="t_item_info">
                      <p class="fn_date">
                        <span>October-December, 2022</span>
                      </p>
                      <h3 class="fn_title"><Link to="/roadmap">Growth. Economics. Sustainability.</Link></h3>
                      <p class="fn_desc">
                      The avatar viewer and dApp are released. Holders and players will have a chance to familiarize themselves with the environment; 
                      we will take suggestions, and be able to test effectively before the in-game deployment of a crucial piece of the ecosystem. 
                      Genesis holders will receive the "Auxiliary" airdrop. The Resistance Economy White Paper is introduced; voting ensues. 
                      {/* Events 3 & 4. */}
                        </p>
                        <Link to="/roadmap" class="neoh_fn_button only_text">
												<span class="text">Read More</span>
											</Link>
                    </div>
                  </div>
                </li>
                <li class="timeline_item" data-index="3">
                  <div class="t_item">
                    <div class="t_item_img">
                    <div class="img_item">
                    <img src={Roadmap3} alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                      {/* <img src="img/landing/roadmap3a.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " /> */}
                    </div>
                      {/*<div class="neoh_fn_gallery_1_2">
                        <div class="gallery_in">
                          <div class="item row2">
                            <img src="img/landing/roadmap3a.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>
                           <div class="item">
                            <img src="img/thumbs/02.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>
                          <div class="item">
                            <img src="img/thumbs/02.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div> 
                        </div>
                      </div>*/}
                    </div>
                    <div class="t_item_info">
                      <p class="fn_date">
                        <span>January-April, 2023</span>
                      </p>
                      <h3 class="fn_title"><Link to="/roadmap">Launch. Test. Upgrade.</Link></h3>
                      <p class="fn_desc">
                      The Resistance Economy is launched. The $SIGNA token IDO; enables in-game & marketplace buying, selling, and trading of assets. 
                      The mobile game-"The Ninth Palace: Hunted for Love"- a sub-set of the storyline for the PC game, is released. 
                      The "ConnectOne" log-ins are introduced to coincide with the mobile game launch. The PC beta-testing list will open. 
                      {/* Event 5 & 6. */}
                        </p>
                        <Link to="/roadmap" class="neoh_fn_button only_text">
												<span class="text">Read More</span>
											</Link>
                    </div>
                  </div>
                </li>
                <li class="timeline_item" data-index="4">
                  <div class="t_item">
                    <div class="t_item_img">
                    <div class="img_item">
                      <img src={Roadmap4} alt="The Ninth Palace Game Icon " title="The Ninth Palace Game " />
                      {/* <img src="img/landing/roadmap4.jpg" alt="The Ninth Palace Game Icon " title="The Ninth Palace Game " /> */}
                    </div>
                      {/*<div class="neoh_fn_gallery_1_2">
                         <div class="gallery_in">
                          <div class="item row2">
                            <img src="img/landing/roadmap4.jpg" alt="The Ninth Palace Game Icon " title="The Ninth Palace Game " />
                          </div>
                           <div class="item">
                            <img src="img/thumbs/02.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>
                          <div class="item">
                            <img src="img/thumbs/02.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>  
                        </div>
                      </div>*/}
                    </div>
                    <div class="t_item_info">
                      <p class="fn_date">
                        <span>May-August, 2023</span>
                      </p>
                      <h3 class="fn_title"><Link to="/roadmap">Level Up. Consolidate. Prepare.</Link></h3>
                      <p class="fn_desc">
                      The team gears up for the PC game launch. There will be changes; security checks, and audits; testing will be done to ensure a smooth 
                      operating environment at scale; the "ConnectOne" system will undergo UI/UX/, A/B testing, and traffic testing. 
                      There will be an exclusive merchandise drop w/ Collaborators of the Resistance, which is marked Top Secret.
                      </p>
                      <Link to="/roadmap" class="neoh_fn_button only_text">
												<span class="text">Read More</span>
											</Link>
                    </div>
                  </div>
                </li>
                <li class="timeline_item" data-index="5">
                  <div class="t_item">
                    <div class="t_item_img">
                    <div class="img_item">
                      <img src={Roadmap5} alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                      {/* <img src="img/landing/roadmap5.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " /> */}
                    </div>
                      {/*<div class="neoh_fn_gallery_1_2">
                        <div class="gallery_in">
                          <div class="item row2">
                            <img src="img/landing/roadmap5.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>
                            <div class="item">
                            <img src="img/thumbs/02.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>
                          <div class="item">
                            <img src="img/thumbs/02.png" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                          </div>  
                        </div>
                      </div>*/}
                    </div>
                    <div class="t_item_info">
                      <p class="fn_date">
                        <span>September-December, 2023</span>
                      </p>
                      <h3 class="fn_title"><Link to="/roadmap">Launch. Secure. Market. Scale.</Link></h3>
                      <p class="fn_desc">
                      The PC game launches. Integration with Flamestore. The $SIGNA token will become the official store of value within the ecosystem. 
                      We will introduce a marketplace that will provide a revolutionary new way for the community to monetize from contributing to the game. 
                      Community members will be able to submit assets to the Asset Approval Committee. Upon the committee’s approval, the assets’ creators will 
                      receive royalties from the sales of these assets.                      
                      A massive marketing campaign begins. The "Web3 x Gaming Incubator" is introduced to the world.
                      </p>
                      <Link to="/roadmap" class="neoh_fn_button only_text">
												<span class="text">Read More</span>
											</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- !Timeline Content --> */}

            {/* <!-- Timeline Progress --> */}
            <div class="timeline_progress">
              {/* <!-- Nav --> */}
              <a href="#" class="nav_prev">
                <img src="img/svg/right-arr.svg" alt="" class="fn__svg" />
              </a>
              <a href="#" class="nav_next">
                <img src="img/svg/right-arr.svg" alt="" class="fn__svg" />
              </a>
              {/* <!-- !Nav --> */}

              <div class="progress_line_wrapper">
                <div class="progress_line">
                  <ul>
                    <li class="active" data-index="1">
                      <a href="#">
                        <span class="text">August-September 2022</span>
                        <span class="circle"></span>
                      </a>
                    </li>
                    <li data-index="2">
                      <a href="#">
                        <span class="text">October-December 2022</span>
                        <span class="circle"></span>
                      </a>
                    </li>
                    <li data-index="3">
                      <a href="#">
                        <span class="text">January-April 2023</span>
                        <span class="circle"></span>
                      </a>
                    </li>
                    <li data-index="4">
                      <a href="#">
                        <span class="text">May-August 2023</span>
                        <span class="circle"></span>
                      </a>
                    </li>
                    <li data-index="5">
                      <a href="#">
                        <span class="text">September-December 2023</span>
                        <span class="circle"></span>
                      </a>
                    </li>
                  </ul>
                  <span class="active_line"></span>
                </div>
              </div>
            </div>
            {/* <!-- !Timeline Progress --> */}
          </div>
          {/* <!-- !Timeline --> */}
        </div>
      </section>
    </>
  );
}

export default HomeRoadmap;
