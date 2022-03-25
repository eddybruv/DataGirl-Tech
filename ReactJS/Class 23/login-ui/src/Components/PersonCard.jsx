import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faEllipsisVertical,
  
} from "@fortawesome/free-solid-svg-icons";



function PersonCard({item}) {
  console.log(item.img);
  console.log(item.name)

  return (
    <div className="card">
      <div className="dot">
        <FontAwesomeIcon icon={faCircleDot} />
      </div>
      <div className="img-container">
        {/* <div style={{ width: "fit-content" }}> */}
          <img src={item.img} alt="" />
        {/* </div> */}
        <p className="name">{item.name}</p>
      </div>
      <div className="three-dots">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
    </div>
  )
}

export default PersonCard