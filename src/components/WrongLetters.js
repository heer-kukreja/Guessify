import React from 'react'
import './WrongLetters.css'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div className="wrong-letters">
        {wrongLetters.length > 0 && 
          <p>Wrong Guesses: </p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        <br />
        <br />
        <p className="guess-left">Number of Guesses Left: {6-wrongLetters.length} </p>
      </div>
    </div>
  )
}

export default WrongLetters
