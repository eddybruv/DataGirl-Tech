import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons' 

function LowerCard({item}) {
  const [show, setShow] = useState(false);
  let paragraph = document.getElementsByClassName('hide-text');
  console.log("🚀 ~ file: LowerCard.jsx ~ line 8 ~ LowerCard ~ paragraph", paragraph)
  
  const handleShow = () => {
    if(!show) {
      setShow(true);
      paragraph.classList.remove('hide-text');
    } else {
      setShow(false);
      paragraph.classList.add('hide-text');
    }
  }


  // let showW = document.getElementByClassName("hide-text");
  
  // let i;

  // for(i = 0; i < showW.length; i++){
  //   showW[i].addEventListener("click", function(){
  //     this.classList.toggle("new_classname");
  //   })
  // }

  return (
    <div className="lower-card">
      <div className="header-icon">
        <p>{item.title}</p>
        <FontAwesomeIcon onClick={handleShow} className="plus-icon" icon={faPlus} />
      </div>
      <p className="hide-text">{item.text}</p>
    </div>
  );
}

export default LowerCard