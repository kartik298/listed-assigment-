import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import usersData from '../../Data/Users.json';
import Sidebar from '../Sidebar/Sidebar';
import './SCSS/Home.css';
import Navbar from '../Navbar/Navbar';

const Home = ({ logout }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

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
  }, [auth]);

  const handleLogout = () => {
    logout();
  };

  const userEmail = user?.email;
  const userName = user?.displayName;
  const userImage = user?.photoURL;

  const saveUser = (user) => {
    const newUser = {
      id: user?.uid,
      name: user?.displayName,
      imageUrl: user?.photoURL,
    };

    const existingUser = usersData.find((existingUser) => existingUser.id === newUser.id);

    if (!existingUser) {
      usersData.push(newUser);
    }
  };

  return (
    <div className='home'>
      <Sidebar />

      <div className="main">
        <Navbar logout={handleLogout} userEmail={userEmail} userName={userName} userImage={userImage} />
      
        <div className="card-container">
          <div className="card">
            <p>Total Revenues</p>
            <p>$2,129,430</p>
            <i className="fad fa-money-bill"></i>
          </div>

          <div className="card">
            <p>Total Revenues</p>
            <p>$2,129,430</p>
            <i className="far fa-tags"></i>
          </div>

          <div className="card">
            <p>Total Revenues</p>
            <p>$2,129,430</p>
            <i className="fas fa-thumbs-up"></i>
          </div>

          <div className="card">
            <p>Total Revenues</p>
            <p>$2,129,430</p>
            <i className="far fa-user-friends"></i>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
