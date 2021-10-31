import React from 'react'
import './Notification.css'

const Notification = ({ showNotification, bg, color}) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`} style={{backgroundColor: bg}}>
      <p style={{color: color}}>You have already entered this letter</p>
    </div>
  )
}

export default Notification