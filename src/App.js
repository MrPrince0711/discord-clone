import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './app/features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in

        dispatch( login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        //loggedout
        dispatch(logout())
      }
    });
  }, [dispatch])
  return (
    <div className="app">
      { user ? (
          <>
           <Sidebar/>
           <Chat/>
          </>
        ) : (
          <Login/>
        )
      }

    </div>
  );
}

export default App;
