import React, {useState} from 'react'
import {frenchList} from '../LanguageCards/frenchDB';
import{spanishList} from '../LanguageCards/spanishDB';
import {portugueseList} from '../LanguageCards/portugueseDB';
import FlashcardList from '../LanguageCards/FlashcardList';

function LanguagePractice() {

    const [spanishcards] = useState(spanishList)
    const [frenchcards] = useState(frenchList)
    const [portuguesecards] = useState(portugueseList)

   
  return (
   
<div>
<h1>Lets Practice the Language!</h1>

<div class = 'spanish'>
  <h2>Spanish</h2>
  
      <FlashcardList flashcards = {spanishcards}/>
</div>

<div class = 'french'>
  <h2>French</h2>
  
      <FlashcardList flashcards = {frenchcards}/>
</div>

<div class = 'portuguese'>
  <h2>Portuguese</h2>
  
      <FlashcardList flashcards = {portuguesecards}/>
</div>
    </div>
  )
}
export default LanguagePractice;