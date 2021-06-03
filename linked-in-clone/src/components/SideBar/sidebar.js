import React from 'react';
import './sidebar.css';
import { Avatar } from '@material-ui/core';

function SidebarTop() {
  return (
    <div className="sidebartop">
      <div className="sidebarTop">
        <img
          className="sidebarImage"
          src="http://www.seekgif.com/download/abstract-pattern-background-3419"
          alt=""
        />
        <Avatar
          className="sidebarAvatar"
          src="https://media-exp1.licdn.com/dms/image/C5603AQFZx9jUrxlsGQ/profile-displayphoto-shrink_100_100/0/1593959098847?e=1628121600&v=beta&t=IQn8O_U_YJCOh_9X7zyzYtnp1mxx3SN7ZIhP8XHSzJ0"
        />
        <h2>George Williams</h2>
        <h3>gmarvwill413@gmail.com</h3>
      </div>
      <div className="sidebarStats">
        <div className="sidebarStat">
          <p>Who viewed you </p>
          <p className="sidebarNumber"> 4,556</p>
        </div>

        <div className="sidebarStat">
          <p>Views on posts </p>
          <p className="sidebarNumber">4,556</p>
        </div>
      </div>
      <div className="sidebarPremium">
        <p>See all Premium features</p>
      </div>
      <div className="sidebarMyItems">
        <p>My Items</p>
      </div>
    </div>
  );
}

export default SidebarTop;
