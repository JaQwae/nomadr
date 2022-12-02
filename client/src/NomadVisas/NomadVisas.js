import React, {useState} from 'react'


    const Flashcard = ({flashcard}) => {
      const [flip, setFlip] = useState(false);
      return (
      <div className = {`card ${flip ? 'flip' : '' }`} onClick={() => setFlip(!flip)} >
        <div className="front">
          {flashcard.englishWord} 
          </div>
        <div className ="back">
        {flashcard.translation}
      </div>
      </div>
  )
}
export default Flashcard;
