import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import LostPassword from './pages/LostPassword';
import Verification from './pages/Verification';

function App() {
  return (
    <>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <LostPassword /> */}
      <Verification />
    </>
  );
}

export default App;
