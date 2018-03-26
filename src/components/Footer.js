import React from 'react';

const Footer = () => {
  return (
    <div id="Footer">
      <div>
        Services provided in this app are accessed from &nbsp;
        <a href="https://data.cityofnewyork.us/Social-Services/NYC-Women-s-Resource-Network-Database/pqg4-dm6b">
          NYC Women's Resource Network Database
        </a>
      </div>
      &copy;{new Date().getFullYear()} Created by &nbsp;
      <a href="http://www.tgreenidge.com/">Tisha Greenidge</a>. All Rights
      Reserved
    </div>
  );
};

export default Footer;
