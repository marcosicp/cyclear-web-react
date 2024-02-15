import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';

import 'bootstrap/dist/css/bootstrap.css'
import "normalize.css";
import "./components/landing/animate.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./components/stars.scss";
import './index.css';


import "jquery/dist/jquery.min.js";
// import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "lightbox2/dist/js/lightbox.min.js";
import "./libs/easing.js";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
