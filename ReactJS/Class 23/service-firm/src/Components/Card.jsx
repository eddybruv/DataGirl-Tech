import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({item}) {
  return (
    <div style={{backgroundColor: item.color}} className='card'>
      <h3>{item.title}</h3>
      <p className='text'>{item.text}</p>
      <button>Get Started <FontAwesomeIcon className='arrow-icon' icon={faArrowRight}/>  </button>
    </div>
  )
}

export default Card