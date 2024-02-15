import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "";

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -64.1994,
      lat: -31.3996,
      zoom: 9,
      pdrs: null,
    };
    this.mapContainer = React.createRef();
  }

  async componentDidMount() {
    const response = await fetch(
      "https://cyclear-api.herokuapp.com/api/PDRs/GetAllPDRs"
    );
    const data = await response.json();
    const geolocateControl = new mapboxgl.GeolocateControl({
      showUserLocation: true,
      positionOptions: {
        enableHighAccuracy: true,
      },
      fitBoundsOptions: {
        zoom: 9,
      },
      trackUserLocation: true,
    });

    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/cyclear/ckpgoc60e1bvt18pgm6z8c37u",
      center: [lng, lat],
      zoom: zoom,
    }).addControl(geolocateControl);

    map.on("load", () => {
      geolocateControl.trigger();
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    this.setState({ pdrs: data });
    this.state.pdrs.forEach((pdr) => {
      var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        "<div>" + pdr.nombre + "<div>" + "<div>" + pdr.telefono + "<div>"
      );
      new mapboxgl.Marker({ color: "#debb39", rotation: 0, icon: "" })
        .setLngLat([pdr.lng, pdr.lat])
        .setPopup(popup)
        .addTo(map);
    });
  }

  render() {
    return (
      <section id="pdrs" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">ENCONTRÁ TU PDR</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={this.mapContainer} className="map-container" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
