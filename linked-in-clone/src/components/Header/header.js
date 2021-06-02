import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="headerLeft"></div>
      <img
        className="logo"
        src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        alt=""
      />
      <div classname="headerSearch">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="headerRight"></div>
    </div>
  );
}

export default Header;
