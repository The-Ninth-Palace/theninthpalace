import React from "react";
import Arrow from "../assest/svg/right-arr.svg";
import Circle from "../assest/svg/circle.svg";

function ToTop() {
    return (
    <>
    <a href="#" class="neoh_fn_totop">
    <span class="arrow"><img src={Arrow} alt="" class="fn__svg"/></span>
		<span class="circle"><img src={Circle} alt="" class="fn__svg"/></span>
		{/* <span class="arrow"><img src="img/svg/right-arr.svg" alt="" class="fn__svg"/></span>
		<span class="circle"><img src="img/svg/circle.svg" alt="" class="fn__svg"/></span> */}
	</a>
    </>
    
  );
}

export default ToTop;