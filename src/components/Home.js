import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Options from './Options';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Options />
        <MapContainer data={this.props.resources} />
      </div>
    );
  }
}

export default Home;
