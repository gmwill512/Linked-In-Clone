import React from 'react';
import './sidebar-bottom.css';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';

function SidebarBottom() {
  /* for scalability and reuseabality
 const recentItems = (topic) => {
    return (
      <div className="sidebarRecentItems">
        <GroupIcon/>
        <p>{topic}</p>
      </div>
    );
  };
*/

  return (
    <div className="sidebarBottom">
      <div className="recent">
        <h6>Recent</h6>
        <p> zerotomastery.io</p>
        <p> Design Engineering Group</p>
        <p> Master of React</p>
        <p> The interactive website</p>
      </div>
      <div className="groups">
        <h6>Groups</h6>
        <p>React JS Users</p>
        <p>Texas Software Engineers</p>
        <p>REACT Student Engagment</p>
        <p>React Developers</p>
      </div>
      <div className="events">
        <div className="insideEvents">
          <h6>Events</h6>
          <AddIcon className="addIcon" />
        </div>
      </div>
      <div className="followedHastags">
        <h6>Followed Hastags</h6>
      </div>
      <div className="discoverMore">
        <p>Discover More</p>
      </div>
    </div>
  );
}

export default SidebarBottom;
