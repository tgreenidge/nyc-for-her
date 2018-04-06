import React from 'react';
import { Link } from 'react-router-dom';

const Options = data => {
  let redirectToNew = false;
  let redirectToSaved = false;
  
  return (
    <div id="Options">
      {' '}
      <div className="options">
        <div>
          <Link to="/newResults">Search For Services
            {/* <div className="overlay">
              <div className="text">
                <i className="fa fa-search" />
              </div>
            </div> */}
          </Link>
        </div>
        <div>
        <Link to="/savedResults">My Saved Services
          {/* <div className="overlay">
            <div className="text">
              <i className="fa fa-bookmark" />
            </div>
          </div> */}
        </Link>
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
