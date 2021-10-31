import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
            <a href='/'>
                <h3 className="heading">
                    <img src='./images/logo.png' alt='Guessify'/>
                        &nbsp; Welcome to Guessify!
                    </h3>
            </a>
        </div>
    )
}

export default Header
