import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import PersonCard from './PersonCard'
import Eddy from '../Images/me.jpg'
import Sonia from '../Images/sonia.jpg'

function Logins() {

  const recentLogins = [
    { name: "Eddy Bruv", img: Eddy },
    { name: "Xennia 316", img: Sonia },
    { name: 'Yaya', img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_200,q_auto:good,w_200/v1/gcs/platform-data-dsc/events/Slice%201.png"}
  ];


  const listPeople = recentLogins.map((item, index) => {
    return <PersonCard item={item} key={index}/>
  });

  return (
    <div className="login-div">
      <p>Recent Logins</p>
      <div className="people">
        {listPeople}
        <div className="new-account">
          <FontAwesomeIcon className='plus-icon' icon={faCirclePlus}/>
          <p>Add Account</p>
        </div>
        <div className="sign-up">
          <a href="">Sign up <br /> Help</a>
        </div>
        <div className='video'>
          <FontAwesomeIcon className='play-icon' icon={faCirclePlay}/>
          <p>This video will help you to <br /> create a new account</p>
        </div>
      </div>
    </div>
  );
}

export default Logins