import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './homepage.tsx';
import Pricing from './pricing.tsx';
import Blog from './blog.tsx';
import BlogPost from './blogpost.tsx';
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import SignIn from './signin.tsx';
import SignUp from './signup.tsx';
import Dashboard from './dashboard.tsx';
import ProtectedRoute from './protected-route.tsx';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "boardingparty-6ca96.firebaseapp.com",
  projectId: "boardingparty-6ca96",
  storageBucket: "boardingparty-6ca96.firebasestorage.app",
  messagingSenderId: "429095808955",
  appId: "1:429095808955:web:9df3ff2c782576c0841e9e",
  measurementId: "G-7D7T1G40PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blogpost/:slug" element={<BlogPost />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard" element= {
        <ProtectedRoute element={<Dashboard />} />
      } />
    
  </Routes>
</Router>
);


export default app;

