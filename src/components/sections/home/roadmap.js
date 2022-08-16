import React from "react";
import { Link } from "react-router-dom";
import Roadmap1 from "../../../assest/landing/roadmap1.webp";
import Roadmap2 from "../../../assest/landing/roadmap2a.webp";
import Roadmap3 from "../../../assest/landing/roadmap3a.webp";
import Roadmap4 from "../../../assest/landing/roadmap4.webp";
import Roadmap5 from "../../../assest/landing/roadmap5.webp";
import RightArrow from "../../../assest/svg/right-arr.svg";
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
                      {/* <p class="fn_desc">
                        Introducing the project to the world. Bringing the gaming & NFT communities together through Discord, Medium, and SubStack. 
                        Releasing the first clue in "The Resistance Riddle." The pre-production phase for the PC game will end and production will begin. 
                        The avatars will mint and the first "Safe House" will be opened for holders only. Mobile beta-testing list will open for enrollment. 
                        {/* Events 1 & 2. */}
                        {/* </p> */}
                        <ul>
                        <li>
                            Introduce The Ninth Palace via <span><a style={{color:'white'}} href='https://theninthpalace.medium.com/'>Medium</a></span>, <span><a style={{color:'white'}} href='https://twitter.com/theninthpalace'>Twitter</a></span>, <span><a style={{color:'white'}} href='https://discord.gg/XB2z53vAmE'>Discord</a></span>, and <span><a style={{color:'white'}} href='https://app.nuclino.com/The-Ninth-Palace/The-Ninth-Palace/Welcome-5998cab8-2635-4d24-9a85-fcc42ce3f3b6'>Nuclino</a></span> documentation.
                            </li>
                            <li>
                            Open the Allow List with our Resistance Riddle
                            </li>
                            {/* <li>Share the Virtual Waiting Room mint style with the community; Contract Audit.</li> */}
                            <li>The Resistance Avatar mint</li>
                            <li>Gamer Tag (SSO) registration begins.</li>
                            <li>Pre-Production wraps and Production begins.</li>
                        </ul>
                      <div>
							<Link 
							style={{textDecoration:'none',color:'white'}}
							to="/roadmap">
								<span className='btn_new'>Read More</span>
								{/* <span class="button">
									<svg class="fn__svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 29.96"><title>3-horizontal-dots</title><path class="cls-1" d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z"/></svg>
								</span> */}
							</Link>
						</div>
                        {/* <Link to="/roadmap" class="neoh_fn_button only_text">
												<span class="text">Read More</span>
											</Link> */}
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
                      {/* The avatar viewer and dApp are released. Holders and players will have a chance to familiarize themselves with the environment; 
                      we will take suggestions, and be able to test effectively before the in-game deployment of a crucial piece of the ecosystem. 
                      Genesis holders will receive the "Auxiliary" airdrop. The Resistance Economy White Paper is introduced; voting ensues.  */}
                      {/* Events 3 & 4. */}
                      <ul>
                          <li>
                          Release The Resistance Economy docs in full detail.
                          {/* Update the Nuclino for The Resistance Economy in full-detail. */}
                          {/* Share the White Paper for the Resistance economy. */}
                          </li>
                            <li>
                            The Safe House marketplace beta testing begins.
                            {/* dApp/Marketplace: Release “The Safe House” Beta version to Resistance members only */}
                            {/* dApp/Marketplace: Release “The Safe House” Beta version to Resistance members only. */}
                            </li>
                            <li>The Auxiliary Airdrop</li>
                            <li>Open beta testing list for mobile.</li>
                            <li>Integrate Gamer Tag/ENS into dApp and backend.</li>
                            </ul>  
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
                      {/* The Resistance Economy is launched. The $SIGNA token IDO; enables in-game & marketplace buying, selling, and trading of assets. 
                      The mobile game-"The Ninth Palace: Hunted for Love"- a sub-set of the storyline for the PC game, is released. 
                      The "ConnectOne" log-ins are introduced to coincide with the mobile game launch. The PC beta-testing list will open.  */}
                      {/* Event 5 & 6. */}
                      <ul>
                        <li>Release the Resistance Economy in two-stages; SIG/AET.</li>
                        <li>The Safe House goes Live.</li>
                        <li>Integrate Gamer Tag (SSO) into mobile game.</li>
                        <li>Testing across the wider ecosystem: TSH, GT/ENS, and Mobile Game</li>
                        <li>Launch the campaign-mode mobile game</li>
                      </ul>
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
                      {/* The team gears up for the PC game launch. There will be changes; security checks, and audits; testing will be done to ensure a smooth 
                      operating environment at scale; the "ConnectOne" system will undergo UI/UX/, A/B testing, and traffic testing. 
                      There will be an exclusive merchandise drop w/ Collaborators of the Resistance, which is marked Top Secret. */}
                      <ul>
                        <li>Beta Test PvP/Faction play on mobile.</li>
                        <li>A/B & beta testing the asset creation UI/UX within The Safe House.</li>
                        <li>Beta testing list for PC game opens.</li>
                        <li>Ensure the “Faction” economic model addition is operational and sustainable.</li>
                        <li>Testing the asset creation economic addition.</li>
                        <li>Ensure cross-platform gameplay, data transfer, and wallet synchronicity is intact.</li>
                      </ul>
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
                      <ul>
                        <li>Launch The Ninth Palace - Campaign play.</li>
                        <li>Introduce “Waiting Room” design into TSH for pregame video interaction.</li>
                        <li>Analysis; audits; employee retention/contracting. Sharpen the blade.</li>
                        <li>Massive marketing and publicity campaign across the globe.</li>
                        <li>Sponsorship applications to the gaming community open.</li>
                        <li>Tournament Play begins; introduce the “MD 1%” economic model.</li>
                      </ul>
                      {/* The PC game launches. Integration with Flamestore. The $SIGNA token will become the official store of value within the ecosystem. 
                      We will introduce a marketplace that will provide a revolutionary new way for the community to monetize from contributing to the game. 
                      Community members will be able to submit assets to the Asset Approval Committee. Upon the committee’s approval, the assets’ creators will 
                      receive royalties from the sales of these assets.                      
                      A massive marketing campaign begins. The "Web3 x Gaming Incubator" is introduced to the world. */}
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
              <a href="#" 
              class="nav_prev">
                <img src={RightArrow} alt="" class="fn__svg" />
              </a>
              <a href="#" class="nav_next">
                <img src={RightArrow} alt="" class="fn__svg" />
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
