import { Create, Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import "./Feed.css"
import { db } from './firebase';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase/compat/app';

function Feed() {
  const [input, setInput] = useState('');
  const [ posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot =>
      setPosts(
        snapshot.docs.map(doc => (
          {
          id: doc.id,
          data: doc.data(),
          }
    ))))
  },[]);

  const publishPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Aayush Rijal',
      description: 'Software Engineer',
      message: input,
      photoUrl: 'https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/103414580_3294645780566613_3999404826124014751_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MK4zLfPsNWYAX9G30sL&_nc_ht=scontent-syd2-1.xx&oh=00_AT_VbKoogq7yEdsxHYUaqlJqtPDX2eDbuZRGQsifdTKhKg&oe=62398878',
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

        { posts.map(({ id, data: { name , description, message, photoUrl }}) => {
          return <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />;
        })}
    </div>
  )
}

export default Feed