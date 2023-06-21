import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="notification-icon mx-1" style={{ display: "inline-block" }}>
      <button onClick={handleToggleDropdown}>
        {/* <FontAwesomeIcon icon={faBell} /> */}
      </button>
      {isOpen && (
        <div className="dropdown">
          <div className="noti-content">
            <div className="notification_top container">
              <img
                src="https://th.bing.com/th/id/OIP.z1Fl9P5QfqFRfLuPS5GjQwHaFk?pid=ImgDet&rs=1"
                className="imgModi"
              />
              <span className="profileHeader">Ahmed Mostafa</span>
            </div>
            <hr />
            <div className="">
              <div className="">
                <i></i>
                <button className="btnModi">Settings & Privacy</button>
              </div>
              <i></i>
              <div className="btnModi">Log Out</div>
            </div>
            {/* <div className="notification_content"> 
              <div className="col"> 
                <div className="content-sec"> 
                  <div className="text"> 
                    <p> 
                      <span>Moahmmd Elsayed</span> reacted to your post 
                    </p> 
                    <span className="action_time">5 hours ago</span> 
                  </div> 
                  <div className="text"> 
                   
                  </div> 
                </div> 
              </div> 
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
