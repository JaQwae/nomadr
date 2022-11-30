import {BrowserRouter as Router, route } from "react-router-dom"
import './App.css';
import React from 'react';
import NavbarOutline from './NavbarOutline';

function App() {
  return (
    <Router>
      <NavbarOutline />
    </Router>
  )
}

export default App;