import React from "react";
import "../stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              {/* <h1 className="intro-title mb-4">Welcome, I am </h1> */}
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "“Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo.” \n E. Galeano"
                    ]}
                    typeSpeed={70}
                    backDelay={1100}
                    backSpeed={40}
                    loop
                  />
                </strong>
              </p>
              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  See my works
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
