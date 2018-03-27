import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
  };
  render() {
    const data = this.props.data;

    // const locations = data.map()

    return (
      <div className="google-map" id="Map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.747331}
            lng={-73.851744}
            text={"Where's Waldo?"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map({
  apiKey: AIzaSyBMXdg1z34XtDOGap7WWJpJc299K2gf7S0
})(Map);
