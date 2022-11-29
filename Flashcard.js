import React, {useState} from 'react'

export default function flashcard( ) {
    const [flip, setFlip] = useState (false)
  return (
    <div onClick={() => setFlip(!flip)}>

      
    </div>
  )
}
