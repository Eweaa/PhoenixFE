import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./BellTwo.css";

function Bell() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="notification-icon">
      <button onClick={handleToggleDropdown}>
        {/* Add the notification icon image */}
        {/* <NotificationAddOutlined /> */}
        <FontAwesomeIcon icon={faBell} />
      </button>
      {isOpen && (
        <div className="dropdown">
          {/* Add content for the dropdown */}
          <li>Notification 3.1</li>
          <li>Notification 3.2</li>
          <li>Notification 3.3</li>
        </div>
      )}
    </div>
  );
}

export default Bell;
