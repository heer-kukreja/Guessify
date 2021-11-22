import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Settings from './Settings';

function HeroSection() {

  const [settingsPopup, setSettingsPopup] = useState(false);
  return (
    <div className='hero-container'>
      <h1>
        <img style={{width : '90px', height : '90px', boxShadow: '5px 5px 5px #20421c'}} src='./images/logo.png' alt='Guessify'/>
          &nbsp; Welcome to Guessify!
      </h1>
      <p>Can you guess all the words?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Let's Play! <i className='far fa-play-circle' />
        </Button>
      </div>
      <div  className='hero-links'>
        <Link to="/player-stats" className='player-stats'>
                  <i style={{position: 'fixed', color: '#fffcf7', marginLeft: '-420px', marginTop: '130px', fontSize: '80px', textShadow: '-3px 3px 3px #787878'}} className='fas fa-poll'></i>
        </Link>   
        {/* <button className='settings-btn' onClick={() => setSettingsPopup(true)}> {<i style={{alignItems: 'flex-start', color: '#999999', fontSize: '60px', textShadow: '-5px 5px #787878'}} 'fas fa-cogs' />} </button>  */}
      </div>
      <Settings trigger={settingsPopup} setSettingsPopup={setSettingsPopup}/>
    </div>
    
  );
}

export default HeroSection;