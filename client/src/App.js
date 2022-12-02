
import './App.css';
import React, {useState} from 'react';
import FlashcardList from './components/LanguageCards/FlashcardList';
import {spanishList} from './components/LanguageCards/spanishDB';
import {frenchList} from './components/LanguageCards/frenchDB';
import {BrowserRouter as Router, route } from "react-router-dom";
import NavbarOutline from './NavbarOutline';
import LanguagePractice from './components/Pages/Language Practice';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
    <div>
      
     <NavbarOutline/>
      

    <Home/>
      <LanguagePractice/>
    </div>
    </Router>
  );
}

export default App;
