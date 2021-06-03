import React from 'react';
import './header-options.css';
import { Avatar } from '@material-ui/core';

function HeaderOptions({ avatar, title, Icon }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerIcon" />}
      {avatar && <Avatar className="headerAvatar" src={avatar} />}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
