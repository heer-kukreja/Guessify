import React from 'react'
import './Word.css'

function Word({selectedWord, correctLetters, selectedRiddle}) {
    var riddle = selectedRiddle.selectedRiddle;

    return (
        <div className='word'>
            {selectedWord.split('').map((letter, i) => {
                return (
                <span className="letter" key={i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
                )
            })}
        </div>
    )
}

export default Word
