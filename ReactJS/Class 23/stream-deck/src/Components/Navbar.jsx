import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCaretRight, faCodeFork, faDoorClosed, faFeed, faRightFromBracket, faScrewdriver, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <FontAwesomeIcon className="icon square" icon={faSquareXmark} />
        </div>
        <div className="rest">
          <div className="nav-list">
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faFeed} /> Main Feed
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faCodeFork} /> Stream
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faScrewdriver} />{" "}
                Settings
              </li>
            </ul>
          </div>
          <div className="logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>
      <div className="lower-bar">
        <p>Activity Stream <FontAwesomeIcon className='carret' icon={faCaretRight} /> <span className="blue-text">List of items</span></p>
      </div>
    </>
  );
}

export default Navbar