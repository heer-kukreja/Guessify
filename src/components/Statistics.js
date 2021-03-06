import React from 'react'
import Header from './Header';
import './Statistics.css'

function Statistics() {
    let nwins = localStorage.getItem('wins') || '0';
    let nlosses = localStorage.getItem('loss') || '0';
    let cwords = JSON.parse(localStorage.getItem('correctWords'));
    let wwords = JSON.parse(localStorage.getItem('wrongWords'));
    let total = parseInt(nwins)+ parseInt(nlosses) || '0';

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
                    {cwords && cwords.map(el => (<p className='correct-words'>{el}</p>))}
                </div>
                <div className='wrong'> 
                    <h3>Words yet to master</h3>
                    <hr />
                    {wwords && wwords.map(el => (<p className='wrong-words'>{el}</p>))}
                </div>
            </div>
        </div>
    )
}

export default Statistics
