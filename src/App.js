import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import './App.css';
import Header from './Header';
import { selectUser, logout, login } from "./features/userSlice"; 
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      }
      else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (

      <div className="app__body">
          <Sidebar />
          <Feed />
      </div>
      )}
    </div>
  );
}

export default App;
