import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Card({item}) {
  return (
    <div className="card" >
      <img src={item.img} alt="" />
      <div className="text">
        <p className="title">{item.title}</p>
        <p className="desc">{item.desc}</p>
      </div>
      <FontAwesomeIcon className='caret' icon={faCaretRight} />
    </div>
  );
}

export default Card