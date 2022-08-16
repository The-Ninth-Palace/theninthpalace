import React from "react";
import Dividers from "../../divider";
import Technology from "../../../assest/svg/tech-icon.svg";
import Quality from "../../../assest/svg/good-quality-icon.svg";
import Time from "../../../assest/svg/time-management-icon.svg";
import Bussiness from "../../../assest/svg/trade-icon.svg";

function HomeService() {
    return (
    <>
    <section id="services">
			
			<Dividers />
			
			
			<div class="container">
				
				{/* <!-- Main Title --> */}
				<div class="neoh_fn_title">
					<h3 class="fn_title">What’s the Plan?</h3>
					<div class="line"><span></span></div>
				</div>
				{/* <!-- !Main Title --> */}

				{/* <!-- Services --> */}
				<div class="neoh_fn_gualist_landing">
                <ul>
                  <li>
                    <div class="item">
                      <span class="line"></span>
                      <img src={Technology} alt="The Ninth Palace NFT Icon" title="The Ninth Palace " class="fn__svg" />
					  {/* <img src="img/svg/tech-icon.svg" alt="The Ninth Palace NFT Icon" title="The Ninth Palace " class="fn__svg" /> */}
                      <h3 class="fn_title">Technology</h3>
                      	<p class="fn_desc">
							&#8226; 
							The Resistance Collection mint will be followed by the launch of the Resistance Economy and the Auxiliary Airdrop.
							<br /><br />
							&#8226; 
							Smart contracts will control all of The Ninth Palace dApp’s backend processes for simplicity while managing Avatars, SIGNA/AETHER, and/or in-game assets via The Safe House.
							<br /><br />
							&#8226; 
							An SSO (Single Sign-On) via the Gamer Tag or ENS has been designed to provide frictionless logins and smooth the transition for non-crypto users.
							<br /><br/>
							&#8226;
							All contracts are designed to ensure full scalability and future expansion of The Ninth Palace ecosystem
							<br /><br/>
							&#8226;
							A custom API to ensure complete extensibility while utilizing both on-chain and off-chain data. This allows other websites and/or applications to communicate with our server for seamless data transfers.
						</p>
                    </div>
                  </li>
				  <li>
                    <div class="item">
                      <span class="line"></span>
					  <img src={Quality} alt="The Ninth Palace NFT Icon" title="The Ninth Palace " class="fn__svg" />
                      {/* <img src="img/svg/good-quality-icon.svg" alt="The Ninth Palace NFT Icon" title="The Ninth Palace " class="fn__svg" /> */}
                      <h3 class="fn_title">Quality</h3>
                      	<p class="fn_desc">
						    &#8226;
							The illustrations, backend, game mechanics, narrative, game economy, and so much more has been designed with sustainability and quality in mind.
							<br /><br />
							&#8226;
							The Avatars have been illustrated with unimaginable detail. Quite literally; take a closer look.
							<br /><br />
							&#8226;
							The 3D poly-modeling and animation is being done by one of the best teams in the business.
							<br /><br />
							&#8226;
							Game mechanics are intimately connected to the metadata of a specific NFT. This will shape the gameplay experience for holders in unique ways.
							<br /><br />
							&#8226;
							The narrative of The Ninth Palace guides the PC game; the mobile game's narrative is a sub-set of The Ninth Palace 
							storyline but a bit more romantic.
							<br /><br />
							&#8226;
							The details in the narrative created over many, many months enabled us to design an unbelievably novel game economy based on sustainability and never before seen in NFT, crypto, or P2E gaming builds.
						</p>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <span class="line"></span>
                      <img src={Time} alt="The Ninth Palace Game Icon" title="The Ninth Palace Game " class="fn__svg" />
					  {/* <img src="img/svg/time-management-icon.svg" alt="The Ninth Palace Game Icon" title="The Ninth Palace Game " class="fn__svg" /> */}
                      <h3 class="fn_title">Time</h3>
                      <p class="fn_desc">
					  	&#8226;
						  The Securus Protocol stretches between 18-24 months. It’s taken us 5-months to get through planning and pre-production. Quality takes time to design, develop, and deploy. The v2 Protocol is being plotted for time already.
						<br /><br />
						&#8226;
						The Ninth Palace is an ambitious project. There are no illusions about the scope, time, or capital required to meet our goals. 
						<br /><br />
						&#8226;
						We believe the natural evolutions for both the NFT and P2E communities are quality, experimental design, and the courage to disrupt an industry in its infancy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <span class="line"></span>
					  <img src={Bussiness} alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " class="fn__svg" />
                      {/* <img src="img/svg/trade-icon.svg" alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " class="fn__svg" /> */}
                      <h3 class="fn_title">Business</h3>
                      <p class="fn_desc">
					  	&#8226;
									We are a start-up; we track expenses, investments, and work hours. We have experience with capital efficiency, 
									scaling, and project management.
									<br /><br />
									&#8226;
									We’re exploring the best options for company registration; Singapore being the leading option. Feel free to check in to our Legal channel in the Discord server for regular updates or to share information.
									<br /><br />
									&#8226;
									We’ve consulted with experienced, crypto-minded legal advisors from the very beginning to ensure that our game economy was compliant across multiple jurisdictions and that any future TGE would satisfy the Howey Test requirements in the U.S.A.
									<br /><br/>
									&#8226;
									We are very, very selective about the companies and/or teams that we choose to work with. The partners that any one company has chosen offer an accurate representation of the quality and legitimacy of that project. We are working with some of the best in the animation, modeling, and game development space.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
			  {/* <!-- !Services --> */}
				
				{/* <!-- OLD Services --> */}
				{/* <div class="neoh_fn_services">
					<ul>
						<li>
							<div class="item">
								<div class="item_num"><span>01</span></div>
								<div class="item_content">
									<h3 class="fn_title">Technology</h3>
										<p class="fn_desc">
											&#8226; 
											The Resistance Collection mint will be followed by the launch of The Resistance Economy and Auxiliary Airdrop. 
											The collection will mint on Ethereum (ETH).
											<br />
											<br />
											&#8226; 
											The PC and Mobile games will launch alongside our backend, meant to provide frictionless onboarding for 
											non-crypto gamers. In-game assets and transactions will take place on ImmutableX (IMX).
											<br />
											<br />
											&#8226; 
											Throughout this time we will be hiring enthusiastically, scaling our backend to manage MMO functionality, 
											and developing The Safe House.
											<br />
										</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>02</span></div>
								<div class="item_content">
									<h3 class="fn_title">Quality</h3>
									<p class="fn_desc">
									&#8226;
									Quality and sustainability are the ideals driving the project.
									<br /><br />
									&#8226;
									The collection was illustrated with unimaginable detail and is made up of over 250 traits or variations.
									<br /><br />
									&#8226;
									The game mechanics and game progressions are unique to specific NFT metadata. Not all avatars are equal. Primus
									<br /><br />
									&#8226;
									The game economy was constructed to be sustainable but exciting, complex, and scalable.
									<br /><br />
									&#8226;
									The narrative of The Ninth Palace guides the PC game; the mobile game's narrative is a sub-set of The Ninth Palace 
									storyline but a bit more romantic.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>03</span></div>
								<div class="item_content">
									<h3 class="fn_title">Time</h3>
									<p class="fn_desc">
									&#8226;
									The Resistance mint provides the runway necessary for The Ninth Palace storyline to grow. 
									<br /><br />
									&#8226;
									The Securus Protocol covers the next 18-24 months. The v2 Protocol is already being plotted for time. 
									<br /><br />
									&#8226;
									The Ninth Palace is an ambitious project. There are no illusions here. Great gameplay requires time 
									and capital to build properly. We will not sacrifice quality for anything.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>04</span></div>
								<div class="item_content">
									<h3 class="fn_title">Business</h3>
									<p class="fn_desc">
									&#8226;
									We are a start-up; we track expenses, investments, and work hours. We have experience with capital efficiency, 
									scaling, and project management.
									<br /><br />
									&#8226;
									We've applied for legal registration in Singapore, and are awaiting approval for a crypto-bank account.
									<br /><br />
									&#8226;
									We've worked with legal advisors from the beginning to ensure our game economy was compliant across multiple 
									jurisdictions, and any future TGE would satisfy the Howey Test requirements in the U.S.
									<br />
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div> */}
				{/* <!-- !OLD Services --> */}
				
			</div>
		</section>
    </>
    
  );
}

export default HomeService;