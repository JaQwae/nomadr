import React, {useState} from 'react'
import {frenchList} from '../LanguageCards/frenchDB';
import FlashcardList from '../LanguageCards/FlashcardList';


function LanguagePractice() {
    const [cards, setCards] = useState(frenchList)

  return (
    <div>
      <h1>Lets Practice the Language!</h1>

      <FlashcardList flashcards = {cards}/>

    </div>
  )
}
export default LanguagePractice;