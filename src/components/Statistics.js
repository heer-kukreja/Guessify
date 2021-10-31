import React from 'react'
import Header from './Header';
import './Statistics.css'

function Statistics() {
    let nwins = localStorage.getItem('wins');
    let nlosses = localStorage.getItem('loss');
    let cwords = JSON.parse(localStorage.getItem('correctWords'));
    let wwords = JSON.parse(localStorage.getItem('wrongWords'));
    let total = parseInt(nwins)+ parseInt(nlosses)

    return (
        <div className='stats-container'>
            <Header />
            <div className='stats'>
                <h4>Total Number of Games Played: {total}</h4>
                <h4>Total Wins: {nwins}</h4>
                <h4>Total Losses: {nlosses}</h4>
                <div className='correct'>
                    <h3>Correct Guesses</h3>
                    <hr />
                    {cwords.map(el => (<p className='correct-words'>{el}</p>))}
                </div>
                <div className='wrong'> 
                    <h3>Words yet to master</h3>
                    <hr />
                    {wwords.map(el => (<p className='wrong-words'>{el}</p>))}
                </div>
            </div>
        </div>
    )
}

export default Statistics
