import { Create, Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import "./Feed.css"
import { db } from './firebase';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase/compat/app';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot =>
      setPosts(
        snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        ))))
  }, []);

  const publishPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className='feed__input'>
          <Create />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={publishPost} type="submit">Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#7fc15e" />
          <InputOption Icon={EventNote} title="Event" color="#e7a33e" />
          <InputOption Icon={CalendarViewDay} title="Write Article" color="#fc9294" />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />;
        })}
      </FlipMove>
    </div>
  )
}

export default Feed