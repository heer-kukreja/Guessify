import React from 'react';
import './Settings.css';

const Settings = (props) => {
  return (props.trigger) ? (
    <div className="settings-container">
      <div className="settings">
        <h2>Music <button></button></h2>
        <h2>Sound <button></button></h2>
        <button onClick ={() => props.setSettingsButton(false)}>Ok</button>
        {props.children}
      </div>
    </div>

  ) : "";
}

export default Settings