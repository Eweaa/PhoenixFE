import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Auth/AuthContext";
import "./Settings.css";
import SVG from "../../../Assets/Vector (3).svg";
import SVG2 from "../../../Assets/ic_baseline-log-out.svg";
import SVG3 from "../../../Assets/angle-right-b.svg";
import { Avatar } from "@mui/material";

function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      setError("");
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Logout");
    }
  };

  return (
    <div className="notification-icon mx-1" style={{ display: "inline-block" }}>
      <button onClick={handleToggleDropdown} className="upBtn">
        {/* <FontAwesomeIcon icon={Avatar} /> */}
        <img
          className="profBar"
          src="https://th.bing.com/th/id/R.527c33c37149dfe8297bec9d7e44899a?rik=sx9smtloPK1WdA&pid=ImgRaw&r=0https://th.bing.com/th/id/R.527c33c37149dfe8297bec9d7e44899a?rik=sx9smtloPK1WdA&pid=ImgRaw&r=0"
        />
        {/* <div className="profBar"></div> */}
      </button>
      {isOpen && (
        <div className="dropdown" style={{ minHeight: "250px" }}>
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
              <div className="setIcon">
                {/* <i></i> */}
                <Link className="btnModi" to="/settings">
                  <img src={SVG} className="iconMo" />
                  Settings & Privacy
                  <img src={SVG3} className="iconMoh" />
                </Link>
              </div>
              <button
                className="btnModi"
                onClick={handleLogout}
                style={{
                  border: "none",
                  outline: "none",
                  color: "#4E5D78",
                  display: "flex",
                }}
              >
                <img src={SVG2} className="iconMo" />
                Log Out
                <img src={SVG3} className="iconMohh" />
              </button>
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
