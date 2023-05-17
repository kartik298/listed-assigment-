import React, { useState, useEffect } from 'react';
import Login from './Components/Login/login';
import Home from './Components/Home/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const userIsLoggedIn = isLoggedIn();
      setLoggedIn(userIsLoggedIn);
    };

    checkLoggedInStatus();
  }, []);

  const isLoggedIn = () => {
    const storedToken = localStorage.getItem('token');
    return !!storedToken;
  };

  const login = () => {
    // Implement your login logic here
    // Replace this example implementation with your own logic
    const token = 'your-authentication-token';
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  const logout = () => {
    // Implement your logout logic here
    // Replace this example implementation with your own logic
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return loggedIn ? <Home logout={logout} /> : <Login login={login} />;
};

export default App;