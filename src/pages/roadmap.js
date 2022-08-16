import React, { Component }  from 'react';
import Navbar from "../components/navbar";
import Header from "../components/header";
import ToTop from "../components/totop";
import Footer from "../components/footer";
import NormalContent from '../components/sections/roadmap/normalcontent';
import GoToTop from '../components/gototop';
import Script from '../components/utils/customscript';

function Roadmap() {
  return (
    <div>
      <div class="neoh_fn_main" data-footer-sticky="">
        {/* <!-- Right Navigation --> */}
        <Navbar />
        {/* <!-- !Right Navigation --> */}

        {/* <!-- Header --> */}
        <Header />
        {/* <!-- !Header --> */}

        {/* <!-- Content --> */}
          {/* <SingleContent /> */}
          <NormalContent />
        {/* <!-- Content --> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- !Footer --> */}
        
        {/* <!-- Totop --> */}
        <ToTop />
        {/* <!-- !Totop --> */}
        {/* <!-- Go to top when load --> */}
		    <GoToTop />
        <Script  />
      </div>
      
    </div>
  );
}

export default Roadmap;