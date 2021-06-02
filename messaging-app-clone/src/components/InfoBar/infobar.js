import React from 'react';
import './infobar.css';
import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png';

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer"></div>
      <a href="/" className="closeIcon">
        <img src={closeIcon} alt="" />
      </a>
    </div>
  );
}

export default InfoBar;
