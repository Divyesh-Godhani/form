import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<UserProfile />} />
        <Route path="/" element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
