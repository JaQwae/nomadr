
import './App.css';
import React, {useState} from 'react';
import FlashcardList from './LanguageCards/FlashcardList';
import {spanishList} from './LanguageCards/spanishDB';
import {frenchList} from './LanguageCards/frenchDB';
import {BrowserRouter as Router, route } from "react-router-dom";

import NavbarOutline from './NavbarOutline';
function App() {
  const [cards, setCards] = useState(frenchList)
  return (
    <Router>
    <div>
      
     <NavbarOutline/>

      <FlashcardList flashcards = {cards}/>
    </div>
    </Router>
  );
}

export default App;
