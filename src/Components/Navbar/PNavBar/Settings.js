import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Auth/AuthContext";
import "./Settings.css";
import SVG from '../../../Assets/Vector (3).svg'
import SVG2 from '../../../Assets/ic_baseline-log-out.svg'
import SVG3 from '../../../Assets/angle-right-b.svg'

function Settings() {

  const [isOpen, setIsOpen] = useState(false);
  const {currentUser, logout} = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
        setError('')
        await logout()
        navigate('/login')
    } catch {
        setError('Failed to Logout')
    }
}

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
                <Link className="btnModi" to='/settings'>
                  <img src={SVG}/>
                  Settings & Privacy
                  <img src={SVG3}/>
                </Link>
              </div>
              <button className="btnModi" onClick={handleLogout} style={{border:"none", outline:"none", color:"#4E5D78", display: 'flex'}}>
                <img src={SVG2}/>
                Log Out
                <img src={SVG3}/>
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
