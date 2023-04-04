import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Bell.css";

function Bell(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown mx-1">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBell} />
      </button> 
        <ul className="dropdown-menu" style={{display: isOpen ? 'block' : 'none'}}>
          <li>{props.opt1}</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
    </div>
  );
}

export default Bell;
