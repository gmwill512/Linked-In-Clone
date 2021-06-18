import React, { useState, useEffect } from 'react';
import './center-content.css';
import FeedContent from '../FeedContent/feed-content.js';
import { Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionIcon from '@material-ui/icons/Description';
import InputOptions from '../InputOption/input-option.js';
import { db, auth } from '../../firebase';
import firebase from 'firebase';

function CenterContent() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const SendPost = (event) => {
    event.preventDefault();

    db.collection('posts').add({
      name: 'George Williams',
      description: 'Test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="centerContent">
      <div className="postBox">
        <div className="avatarTextBox">
          <Avatar
            className="avatarPostBox"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFZx9jUrxlsGQ/profile-displayphoto-shrink_100_100/0/1593959098847?e=1628121600&v=beta&t=IQn8O_U_YJCOh_9X7zyzYtnp1mxx3SN7ZIhP8XHSzJ0"
          />
          <form className="textPostBox">
            <label className="">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="text"
                placeholder="Insert Comment..."
              />
              <button onClick={SendPost} type="submit"></button>
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

      {posts.map(({ id, data: { messages, name, description, photoUrl } }) => (
        <FeedContent
          key={id}
          name={name}
          description={description}
          messages={messages}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default CenterContent;
