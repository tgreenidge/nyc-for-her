import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    initialCenter: { lat: 40.7128, lng: -74.006 },
    zoom: 14
  };
  render() {
    const data = this.props.data;

    // const locations = data.map()

    return (
      <div className="google-map" id="Map">
        <Map
          google={this.props.google}
          center={{
            lat: this.props.initialCenter.lat,
            lng: this.props.initialCenter.lng
          }}
          zoom={this.props.zoom}
        >
          {/* <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 37.7509, lng: -122.40564 }}
          />
          <Marker
            name={'Dolores park'}
            position={{ lat: 37.759703, lng: -122.428093 }}
          /> */}
          <Marker />
          {/* <Marker
            name={'Your position'}
            position={{ lat: 37.762391, lng: -122.439192 }}
            icon={{
              url: '/path/to/custom_icon.png',
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }}
          /> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBMXdg1z34XtDOGap7WWJpJc299K2gf7S0'
})(MapContainer);
