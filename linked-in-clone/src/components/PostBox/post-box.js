import React from 'react';
import { Avatar } from '@material-ui/core';
import './post-box.css';
import PhotoIcon from '@material-ui/icons/Photo';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionIcon from '@material-ui/icons/Description';

import InputOptions from '../InputOption/input-option.js';

function PostBox() {
  return (
    <div className="postBox">
      <div className="avatarTextBox">
        <Avatar
          className="avatarPostBox"
          src="https://media-exp1.licdn.com/dms/image/C5603AQFZx9jUrxlsGQ/profile-displayphoto-shrink_100_100/0/1593959098847?e=1628121600&v=beta&t=IQn8O_U_YJCOh_9X7zyzYtnp1mxx3SN7ZIhP8XHSzJ0"
        />
        <form className="textPostBox">
          <label className="">
            <input type="text" placeholder="Insert Comment..." />
            <button type="submit"></button>
          </label>
        </form>
      </div>
      <div className="postImages">
        <div className="postBoxImgs">
          <InputOptions Icon={PhotoIcon} title="Photo" color="lightblue" />
          <InputOptions
            Icon={PlayCircleFilledWhiteIcon}
            title="Video"
            color="lightgreen"
          />
          <InputOptions
            Icon={CalendarTodayIcon}
            title="Event"
            color="lightsalmon"
          />
          <InputOptions
            Icon={DescriptionIcon}
            title="Write Article"
            color="lightcoral"
          />
        </div>
      </div>
    </div>
  );
}

export default PostBox;
