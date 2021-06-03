import React from 'react';
import './center-content.css';
import PostBox from '../PostBox/post-box.js';
import FeedContent from '../FeedContent/feed-content.js';

function centerContent() {
  return (
    <div className="centerContent">
      <PostBox />
      <FeedContent />
    </div>
  );
}

export default centerContent;
