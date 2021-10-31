import React, { useEffect } from 'react';
import './Popup.css'
import { checkWin } from '../helpers/helpers'

const Popup = ({ correctLetters, wrongLetters, selectedWord, selectedGif, setPlayable, playAgain}) => {
  
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
      finalMessage = 'It was a correct Guess! 😃 I am a ' + selectedWord + ' !';
      playable = false;

  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
      finalMessage = 'Unfortunately you lost. 😕';
      finalMessageRevealWord = `...the word was: ${selectedWord}`;
      playable = false;
      
  }

  function statView () {
    window.open('/player-stats', '_self');
    playAgain();
  }


  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex', marginTop:'-20px'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <img src={selectedGif} alt={selectedWord} /><br />
        <button onClick={playAgain}>Play Again</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <button onClick={statView}>View Stats</button>
      </div>
    </div>
  )
}

export default Popup