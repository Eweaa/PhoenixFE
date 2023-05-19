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
    <div className="notification-icon mx-1" style={{ display: "inline-block" }}>
      <button onClick={handleToggleDropdown}>
        {/* Add the notification icon image */}
        {/* <NotificationAddOutlined /> */}
        <FontAwesomeIcon icon={faBell} />
      </button>
      {isOpen && (
        <div className="dropdown">
          <div className="noti-content">
            <div className="notification_top">
              <span>Notifications</span>
              <i>Sttt</i>
            </div>

            <div className="notification_content">
              <div className="col">
                <div className="content-sec">
                  <img src="https://ilarge.lisimg.com/image/8073204/740full-gentleman.jpg" />
                  <div className="text">
                    <p>
                      <span>Moahmmd Elsayed</span> reacted to your post
                    </p>
                    <span className="action_time">5 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bell;
