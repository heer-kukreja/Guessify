import React from 'react'
import './Riddle.css'


function Riddle(selectedRiddle) {
    var riddle = selectedRiddle.selectedRiddle;

    return (
        <div className='riddle-container'>
            {riddle.split('\n').map(str => <p className='text-riddle'>{str}</p>)}
        </div>
    )
}

export default Riddle
