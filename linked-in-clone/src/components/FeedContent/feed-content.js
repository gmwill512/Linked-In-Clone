import React from 'react';
import './feed-content.css';
import { Avatar } from '@material-ui/core';
import InputOptions from '../InputOption/input-option.js';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MessageIcon from '@material-ui/icons/Message';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import SendIcon from '@material-ui/icons/Send';

function FeedContent({ name, description, message, photoUrl }) {
  return (
    <div className="feedContent">
      <div className="postHeader">
        <Avatar />
        <div className="postInfo">
          <h2>George Williams</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="postMessage">
        <p>Message goes here</p>
      </div>
      <img className="postImage" src={photoUrl} alt="" />
      <div className="postButtons">
        <InputOptions Icon={ThumbUpAltIcon} title="Like" />
        <InputOptions Icon={MessageIcon} title="Comment" />
        <InputOptions Icon={ScreenShareIcon} title="Share" />
        <InputOptions Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}

export default FeedContent;
