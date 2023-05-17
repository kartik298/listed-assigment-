import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

const Home = ({ logout }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(); // Initialize the authentication instance

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  });

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Welcome to the Home component!</h1>
      {user && (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Profile Picture: <img src={user.photoURL} alt="Profile" /></p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
