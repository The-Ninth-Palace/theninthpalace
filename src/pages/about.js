import React, { Component }  from 'react';
import Navbar from "../components/navbar";
import Header from "../components/header";
import ToTop from "../components/totop";
import Footer from "../components/footer";
import About_Intro1 from '../components/sections/about/about_intro1';
import HeroSection from "../components/sections/about/hero";
import About_Intro2 from '../components/sections/about/about_intro2';
import GuaranteeList from '../components/sections/about/guaranteelist';
import Video from '../components/sections/about/video';
import Teams from '../components/sections/about/team';
import GoToTop from '../components/gototop';
import { Helmet } from 'react-helmet';
import Script from '../components/utils/customscript';

function About() {
  return (
    <>
  <div>
      <div class="neoh_fn_main" data-footer-sticky="">
        {/* <!-- Right Navigation --> */}
		<Navbar />
		{/* <!-- !Right Navigation --> */}

		{/* <!-- Header --> */}
		<Header />
		{/* <!-- !Header --> */}

      <div class="neoh_fn_content">
        {/* <!-- Hero --> */}
        <HeroSection />
        {/* <!-- !Hero --> */}

        {/* <!-- About Page --> */}
        <div class="neoh_fn_aboutpage">
          {/* <!-- Information Section --> */}
          <section id="information">
            <div class="container">
              {/* <!-- About Item #1 --> */}
              <About_Intro1 />
              {/* <!-- !About Item #1 --> */}

              {/* <!-- Guarantee List --> */}
              <GuaranteeList />
              {/* <!-- !Guarantee List --> */}

              {/* <!-- About Item #2 --> */}
              <About_Intro2 />
              {/* <!-- !About Item #2 --> */}
            </div>
          </section>
          {/* <!-- !Information Section --> */}

          {/* <!-- Video Section --> */}
          {/* <Video /> */}
          {/* <!-- !Video Section --> */}

          {/* <!-- Team Section --> */}
          {/* <Teams /> */}
          {/* <!-- !Team Section --> */}
        </div>
        {/* <!-- !About Page --> */}
      </div>

      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- !Footer --> */}
      
      {/* <!-- Totop --> */}
      <ToTop />
      {/* <!-- !Totop --> */}
      {/* <!-- Go to top when load --> */}
      <GoToTop />
      </div>
        {/* <Helmet>
        <script src="./js/init.js?ver=1.1" type="text/javascript" />
        <script src="./js/jquery.js" type="text/javascript" />
        <script src="./js/plugins.js" type="text/javascript" />
        </Helmet> */}
        <Script  />

    </div>
    </>
    
    
  );
}

export default About;