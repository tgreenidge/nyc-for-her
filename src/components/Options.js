import React from 'react';
import { Link } from 'react-router-dom';

const Options = data => {
  return (
    <div id="Options">
      {' '}
      <div className="options">
        <div>
          Search For Services
          <div className="overlay">
            <div className="text">
              <i className="fa fa-search" />
            </div>
          </div>
        </div>
        <div>
          My Saved Services
          <div className="overlay">
            <div className="text">
              <i className="fa fa-bookmark" />
            </div>
          </div>
        </div>
      </div>
      <h1>NYC FOR HER</h1>
      <p>
        Access non-profits and organizations that provide services for women in
        NYC
      </p>
    </div>
  );
};

export default Options;
