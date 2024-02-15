import React, { Component } from "react";

import "../stars.scss";
//import components
import Navbar from "./navbar.jsx";
import Intro from "./intro.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx";
import Contact from "./contact.jsx";
import BackToTop from "./back-top.jsx";
import Preloader from "./preloader";

class Landing extends Component {
  render() {
    return (
      <div>
      {/* <React.Fragment>*/}
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop />
        <Preloader />
     {/* </React.StrictMode> </React.Fragment> */}
      </div>
    );
  }
}

export default Landing;
