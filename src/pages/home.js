import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../components/navbar";
import Header from "../components/header";
import HeroSection from "../components/sections/home/heroheader";
import AboutSection from "../components/sections/home/about";
import ServiceSection from "../components/sections/home/service";
import RoadmapSection from "../components/sections/home/roadmap";
import InvestorsSection from "../components/sections/home/investors";
import UpdateSection from '../components/sections/home/updates';
import ToTop from "../components/totop";
import Footer from "../components/footer";
import GoToTop from '../components/gototop';
import Script from '../components/utils/customscript';

function Home() {
  return (
    <div >
      {/* <!-- Main --> */}
	<div class="neoh_fn_main" data-footer-sticky="">
		{/* <!-- Right Navigation --> */}
		<Navbar />
		{/* <!-- !Right Navigation --> */}

		{/* <!-- Header --> */}
		<Header />
		{/* <!-- !Header --> */}

		{/* <!-- Content --> */}
		<div class="neoh_fn_content">
			{/* <!-- Hero Header --> */}
			<HeroSection />
			{/* <!-- !Hero Header --> */}

			{/* <!-- About Section --> */}
			<AboutSection />
			{/* <!-- !About Section --> */}

			{/* <!-- Services Section --> */}
			<ServiceSection />
			{/* <!-- !Services Section --> */}
			
			{/* <!-- Roadmap Section --> */}
			<RoadmapSection />
			{/* <!-- !Roadmap Section --> */}
			
			{/* <!-- Investors Section --> */}
			<InvestorsSection />
			{/* <!-- !Investors Section --> */}

			{/* <!-- Updates & News Section --> */}
			<UpdateSection />
			{/* <!-- !Updates & News Section --> */}
		</div>
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
	{/* <!-- !Main --> */}
    </div>
  );
}

export default Home;
