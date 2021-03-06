import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function LowerCard({ item }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="lower-card">
      <div className="header-icon">
        <p className="title">{item.title}</p>
        <FontAwesomeIcon
          onClick={handleShow}
          className="plus-icon"
          icon={faPlus}
        />
      </div>
      {show && <p className="p-text">{item.text}</p>}
    </div>
  );
}

export default LowerCard;
