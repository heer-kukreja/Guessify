import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--med', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonStyle : SIZES[0];

    return (
        <Link to='/game-themes' className='btn-theme'>
            <button className={`btn ${checkButtonStyle} ${checkButtonStyle}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};
