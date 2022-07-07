import React from "react";
import Dividers from "../../divider";

function Video() {
  return (
    <>
      <section id="video">
        <Dividers />

        {/* <!-- Video Shortcode --> */}
        <div class="neoh_fn_video">
          <div class="bg_overlay">
            <div class="bg_image" data-bg-img="img/landing/LandingBg.jpg"></div>
            <div class="bg_color"></div>
          </div>
          <div class="v_content">
            <a
              class="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img src="img/svg/play.svg" alt="The Ninth Palace NFT Icon " title="The Ninth Palace " class="fn__svg" />
            </a>
          </div>
        </div>
        {/* <!-- !Video Shortcode --> */}
      </section>
    </>
  );
}

export default Video;
