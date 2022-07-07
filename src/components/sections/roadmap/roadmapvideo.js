import React from "react";
import Dividers from "../../divider";

function RoadmapVideo() {
  return (
    <>
      {/* <!-- Video Section --> */}
      <section id="video">
        {/* <!-- Dividers --> */}
        <Dividers />
        {/* <!-- !Dividers --> */}

        {/* <!-- Video Shortcode --> */}
        <div class="neoh_fn_video">
          <div class="bg_overlay">
            <div class="bg_image" data-bg-img="img/hero/wbBg-roadmap.jpg"></div>
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
      {/* <!-- !Video Section --> */}

      {/* <!-- Single Description --> */}
      <div class="single_desc" id="roadmap-desc">
        <div class="container">
          <p>
            Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt
            purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer
            mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque
            ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis
            elementum vel. Curabitur sagittis quis diam et rhoncus. Nam
            pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem
            at, tempus libero.
          </p>
          <p>
            Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci,
            eleifend euismod justo. Quisque luctus turpis eu tristique feugiat.
            Praesent ac magna feugiat, interdum lacus ac, interdum dui.
            Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce
            imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non
            arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus
            faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum.
          </p>
        </div>
      </div>
      {/* <!-- !Single Description --> */}
    </>
  );
}

export default RoadmapVideo;
