import React, { Component } from 'react';
import Map from './Map';
import Options from './Options';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Options />
        <Map data={this.props.resources} />
      </div>
    );
  }
}

export default Home;
