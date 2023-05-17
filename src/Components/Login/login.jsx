import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Auth';

const Login = ({ login }) => {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      
      console.log('Logged in with Google');
      console.log('User:', user);

      // Call the login function passed from the App component
      login();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
