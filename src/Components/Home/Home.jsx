import React, { useEffect, useState, useCallback } from 'react'
import { getAuth } from 'firebase/auth';
import usersData from '../../Data/Users.json';
import Sidebar from '../Sidebar/Sidebar';
import './SCSS/Home.css';
import Navbar from '../Navbar/Navbar';
import StatsCard from './StatsCard';
import Charts from './Charts';

const Home = ({ logout }) => {
  const [user, setUser] = useState(null);
  const [savedUsers, setSavedUsers] = useState(usersData);
  const auth = getAuth();

  const saveUser = useCallback((user) => {
    const newUser = {
      id: user?.uid,
      name: user?.displayName,
      imageUrl: user?.photoURL,
    };

    const existingUser = savedUsers.find((existingUser) => existingUser.id === newUser.id);

    if (!existingUser) {
      setSavedUsers((prevUsers) => [...prevUsers, newUser]);
    }
  }, [savedUsers]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        saveUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, saveUser]);

  const handleLogout = () => {
    logout();
  };

  const userEmail = user?.email;
  const userName = user?.displayName;
  const userImage = user?.photoURL;

  return (
    <div className='home'>
      <Sidebar />

      <div className="main">
        <Navbar saveUser={saveUser} logout={handleLogout} userEmail={userEmail} userName={userName} userImage={userImage} savedUsers={savedUsers} />
        <StatsCard/>
        <Charts />
        <p className='credit'>Developed by Prashant Kumar - https://enally.in/projects/</p>
      </div>
    </div>
  );
};

export default Home;
