import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import HeaderOptions from '../HeaderOptions/header-options.js';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import CommentIcon from '@material-ui/icons/Comment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          className="logo"
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="headerSearch">
          <SearchIcon className="searchIcon" />
          <input type="text" />
        </div>
      </div>
      <div className="headerRight">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" />
        <HeaderOptions Icon={CommentIcon} title="Messages" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQFZx9jUrxlsGQ/profile-displayphoto-shrink_100_100/0/1593959098847?e=1628121600&v=beta&t=IQn8O_U_YJCOh_9X7zyzYtnp1mxx3SN7ZIhP8XHSzJ0"
          title="Me"
        />
        <HeaderOptions Icon={AppsIcon} title="Work" />
        <HeaderOptions Icon={LibraryBooksIcon} title="Learning" />
      </div>
    </div>
  );
}

export default Header;
