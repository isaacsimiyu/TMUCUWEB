import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './config/Routes'; // Update the path to your route configuration
import './App.css';
import Forgottenpassword from './components/forgottenpassword/Forgottenpassword';
import LoginForm from './components/Login/LoginForm';

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<Forgottenpassword />} />
      </Routes>
    </Router>
  );
}
