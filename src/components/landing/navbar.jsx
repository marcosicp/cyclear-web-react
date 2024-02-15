import React from "react";
import $ from "jquery";
import { Link } from 'react-router-dom';
import logo1 from "../../img/LOGO-BLANCO-SIN-FONDO.png";
import logo2 from "../../img/LOGO-AZUL-SIN-FONDO.png";

class Navbar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", this.someFunction);

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  someFunction = (e) => {
    if (window.pageYOffset > 50) {
      document
        .querySelector(".navbar-expand-md")
        .classList.add("navbar-reduce");
      document
        .querySelector(".navbar-expand-md")
        .classList.remove("navbar-trans");
      this.setState({ logo: logo2 });
    } else {
      document
        .querySelector(".navbar-expand-md")
        .classList.add("navbar-trans");
      document
        .querySelector(".navbar-expand-md")
        .classList.remove("navbar-reduce");
      this.setState({ logo: logo1 });
    }
  }

  componentWillUnmount() {
    
    $(window).off('scroll');
    window.removeEventListener('scroll', this.someFunction);
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#pdrs">
                  PDRs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Beneficios Cyclear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contactanos
                </a>
              </li>
              <li className="nav-item">
              {/* <button type="button" onClick={handleClick}>
                Go home
              </button> */}
              <Link className="nav-link js-scroll" to="/bienvenido">¡Retiros!</Link>
                {/* <a className="nav-link js-scroll" href="/domiciliario">
                  ¡Retiros!
                  
                </a> */}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
