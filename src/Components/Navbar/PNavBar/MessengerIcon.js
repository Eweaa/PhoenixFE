// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { faMessage } from "@fortawesome/free-solid-svg-icons"; 
// import React, { useState } from "react"; 
// import "./MessengerIcon.css"; 
 
// const MessengerIcon = () => { 
//   const [isOpen, setIsOpen] = useState(false); 
//   const handleToggleMessDropdown = () => { 
//     setIsOpen(!isOpen); 
//   }; 
//   return ( 
//     <div className="messenger-icon mx-1" style={{display:"inline-block"}}> 
//       <button onClick={handleToggleMessDropdown}> 
//         {/* Add the notification icon image */} 
//         <FontAwesomeIcon icon={faMessage} /> 
//       </button> 
 
//       {isOpen && ( 
//         <div className="dropdown"> 
//           {/* Add content for the dropdown */} 
//           <li>messenger 3.1</li> 
//           <li>messenger 3.2</li> 
//           <li>messenger 3.3</li> 
//         </div> 
//       )} 
//     </div> 
//   ); 
// }; 
 
// export default MessengerIcon; 
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMessage } from "@fortawesome/free-solid-svg-icons"; 
import React, { useState } from "react"; 
import "./MessengerIcon.css"; 
 
function MessengerIcon() { 
  const [isOpen, setIsOpen] = useState(false); 
  const handleToggleMessDropdown = () => { 
    setIsOpen(!isOpen); 
  }; 
  return ( 
    <div className="messenger-icon mx-1" style={{ display: "inline-block" }}> 
      <button onClick={handleToggleMessDropdown}> 
        {/* Add the notification icon image */} 
        {/* <NotificationAddOutlined /> */} 
        <FontAwesomeIcon icon={faMessage} /> 
      </button> 
      {isOpen && ( 
        <div className="dropdown"> 
          <div className="msg-content"> 
            <div className="msg_top"> 
              <span>Chats</span> 
              <i>Sttt</i> 
            </div> 
 
            <div className="msg_content"> 
              <div className="col"> 
                <div className="content-sec"> 
                  <img 
                    src="https://ilarge.lisimg.com/image/8073204/740full-gentleman.jpg" 
                    style={{ objectFit: "cover" }} 
                  /> 
                  <div className="text"> 
                    <p> 
                      <span>Moahmmd Elsayed</span> what's wrong? 
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
 
export default MessengerIcon;