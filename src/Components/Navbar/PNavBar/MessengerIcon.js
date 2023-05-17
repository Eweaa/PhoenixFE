import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./MessengerIcon.css";

const MessengerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMessDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="messenger-icon mx-1" style={{display:"inline-block"}}>
      <button onClick={handleToggleMessDropdown}>
        {/* Add the notification icon image */}
        <FontAwesomeIcon icon={faMessage} />
      </button>

      {isOpen && (
        <div className="dropdown">
          {/* Add content for the dropdown */}
          <li>messenger 3.1</li>
          <li>messenger 3.2</li>
          <li>messenger 3.3</li>
        </div>
      )}
    </div>
  );
};

export default MessengerIcon;
