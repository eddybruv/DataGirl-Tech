import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneSlash, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <div className="welcome">
        <h1>Welcome back</h1>
        <p>Join the world's largest community</p>
      </div>
      <div className="audio-icons">
        <FontAwesomeIcon className='mic' icon={faMicrophoneSlash} />
        <FontAwesomeIcon className='speaker' icon={faVolumeHigh} />
      </div>
    </div>
  );
}

export default Header