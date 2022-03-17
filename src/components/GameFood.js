import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h5>
        <img style={{width : '90px', height : '90px'}} src='./images/logo.png' alt='Guessify'/>
          &nbsp;Guessify!
      </h5>
      <i className="far fa-lightbulb"></i>
      <i className="fas fa-home"></i>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          End game
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <i className="fas fa-chevron-left">Back</i>
        </Button>
      </div>
      <div  className='hero-links'>
        <Link to="/player-stats" className='player-stats'>
                  <i style={{alignItems: 'flex-start', color: '#8c8c8c', marginLeft: '-490px', fontSize: '80px', transform: 'rotate(-9deg)', textShadow: '-5px 5px #bfbfbf'}} className='fas fa-user'></i>
        </Link>   
        <Link to="/" className='game-settings'>
                  <i style={{marginTop: '15px', alignItems: 'flex-start', color: '#8c8c8c', marginLeft: '30px', fontSize: '60px', transform: 'rotate(-9deg)', textShadow: '-5px 5px #bfbfbf'}} className='fas fa-cogs'></i>
        </Link>   
      </div>
    </div>
  );
}

export default HeroSection;