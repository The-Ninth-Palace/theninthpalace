import React from 'react';
import ReactDOM from "react-dom/client";
import './style/style.css?ver=1.1';
import './style/plugins.css';
// import '../public/style/style.css?ver=1.1';
// import '../public/style/plugins.css';
import {BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Teams from "./pages/teams";
import Roadmap from "./pages/roadmap";

// Netlify
// const basename = document.querySelector('base')?.getAttribute('href') ?? '/';
// GitHub
const basename = "/theninthpalace";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    {/* <Router basename="/theninthpalace"> </Router> */}
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/teams" element={<Teams />} />
          <Route exact path="/roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </HashRouter>
    {/* <Router basemname={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </Router> */}
   
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
