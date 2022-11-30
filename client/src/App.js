import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


import FlashcardList from './LanguageCards/FlashcardList';
import {spanishList} from './LanguageCards/spanishDB';
import {frenchList} from './LanguageCards/frenchDB';

function App() {
  const [cards, setCards] = useState(frenchList)
  return (
    
    <div>
      
     

      <FlashcardList flashcards = {cards}/>
    </div>
  );
}

export default App;
