import instagram from './download.jpeg'

import React from 'react'

function Card({item}) {
  return (
    <div className="card">
      <img src={item.img} alt="hey" className="img-section" />
      <div>
        <div>{item.firstText}</div>
        <div>{item.secondText}</div>
      </div>
      <span className="caret">></span>
    </div>
  );
}

export default Card