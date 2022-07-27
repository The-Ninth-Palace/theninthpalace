import React from "react";
import MediumBlog from "../../mediumblog";

function UpdateSection() {
    return (
    <>
    <section id="blog">
			<div class="container">
				
				{/* <!-- Main Title --> */}
				<div class="neoh_fn_title">
					<h3 class="fn_title">News</h3>
					<div class="line"><span></span></div>
				</div>
				{/* <!-- !Main Title --> */}
				
				{/* <!-- Moving Blog List Shortcode --> */}
				<div class="neoh_fn_moving_blog">
					<ul>
						<li>
							<div class="item">
								{/* <img src="img/landing/twitter.png" alt="" class="moving_img"/> */}
								<p class="fn_date">
									<span>Twitter</span>
								</p>
								<h3 class="fn_title">
									<a href="https://twitter.com/theninthpalace">
										Follow us on Twitter...
									</a>
								</h3>
								<p class="fn_desc">
									{/* <a class="twitter-timeline"
								href="https://twitter.com/theninthpalace/timelines/1532026081682890752">
								the ninth palace Tweets
								</a> */}
								{/* <a class="twitter-timeline" href="https://twitter.com/jpec3y"
								data-width="360" data-height="350" 
								data-chrome=" noborders" 
								data-tweet-limit="3"> 
								Tweets by @theninthpalace </a> */}

								<a class="twitter-timeline" href="https://twitter.com/theninthpalace?ref_src=twsrc%5Etfw"
								data-width="360" data-height="350" 
								data-chrome=" noborders" data-theme="dark"
								data-tweet-limit="3">
									Tweets by theninthpalace</a> 
									
										
								{/* <blockquote class="twitter-tweet" data-lang="en" data-theme="dark">
								<p lang="en" dir="ltr">We just published the first chapter in the storyline for The Ninth Palace. Be sure to follow. The Resistance Riddle&#39;s first clue will be drawn from the story. 
								<a href="https://t.co/7M0LraVSeT">https://t.co/7M0LraVSeT</a><a href="https://twitter.com/hashtag/nftart?src=hash&amp;ref_src=twsrc%5Etfw">#nftart</a> 
								<a href="https://twitter.com/hashtag/NFTs?src=hash&amp;ref_src=twsrc%5Etfw">#NFTs</a> 
								<a href="https://twitter.com/hashtag/P2E?src=hash&amp;ref_src=twsrc%5Etfw">#P2E</a> 
								<a href="https://twitter.com/hashtag/GameFi%E2%80%8C?src=hash&amp;ref_src=twsrc%5Etfw">#GameFi‌</a> 
								<a href="https://twitter.com/hashtag/gaming?src=hash&amp;ref_src=twsrc%5Etfw">#gaming</a> 
								<a href="https://twitter.com/hashtag/Crypto?src=hash&amp;ref_src=twsrc%5Etfw">#Crypto</a> 
								<a href="https://twitter.com/hashtag/NFTCommunity?src=hash&amp;ref_src=twsrc%5Etfw">#NFTCommunity</a> 
								<a href="https://twitter.com/hashtag/NFTGame?src=hash&amp;ref_src=twsrc%5Etfw">#NFTGame</a> 
								<a href="https://twitter.com/hashtag/Ethereum?src=hash&amp;ref_src=twsrc%5Etfw">#Ethereum</a> 
								<a href="https://twitter.com/hashtag/MATIC?src=hash&amp;ref_src=twsrc%5Etfw">#MATIC</a> 
								<a href="https://twitter.com/hashtag/PolygonNFT?src=hash&amp;ref_src=twsrc%5Etfw">#PolygonNFT</a></p>
								&mdash; The Ninth Palace (@theninthpalace) 
								<a href="https://twitter.com/theninthpalace/status/1538611306592358400?ref_src=twsrc%5Etfw">
								June 19, 2022</a></blockquote>  */}
								</p>
								
							</div>
						</li>
						<li>
							<div class="item">
								{/* <img src="img/landing/medium.png" alt="" class="moving_img"/> */}
								<p class="fn_date">
									<span>Medium</span>
								</p>
								<h3 class="fn_title">
									<a href="https://medium.com/coinmonks/the-ninth-palace-d487ab2cbaa9">
										Follow us on Medium...
									</a>
								</h3>
								<MediumBlog />
							</div>
						</li>
						<li>
							<div class="item">
								{/* <img src="img/landing/substack.png" alt="" class="moving_img"/> */}
								
								<p class="fn_date">
									<span>SubStack</span>
								</p>
								<h3 class="fn_title">
									<a href="https://substack.com/profile/96126173-the-one?utm_source=user-menu">
									Follow us on SubStack...
									</a>
								</h3>
								<p class="fn_desc_substack" >
									{/* Asset creation begins, and The Resistance Economy is born. The illustrations for teasers, avatar mint, and marketing begin to get created. */}
									<iframe width="350px" height="420px"
									src="https://theninthpalace.substack.com/embed" frameborder="1" scrolling="no"></iframe>
									
								</p>
							</div>
						</li>
					</ul>
				</div>
				{/* <!-- !Moving Blog List Shortcode --> */}
				
				
			</div>
		</section>
    </>
    
  );
}

export default UpdateSection;