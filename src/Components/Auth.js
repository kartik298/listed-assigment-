import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Import the Firebase products you want to use
// TODO: Add the necessary SDKs for Firebase products you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaPvYhtcGAcEFqDrHRbIOyH1EGvZKeBgw',
  authDomain: 'listedassign-7af3f.firebaseapp.com',
  projectId: 'listedassign-7af3f',
  storageBucket: 'listedassign-7af3f.appspot.com',
  messagingSenderId: '544762025763',
  appId: '1:544762025763:web:7020d35916b949c8edde96',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
