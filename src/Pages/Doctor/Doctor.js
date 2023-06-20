import React from "react"; 
import DoctorCSS from "./Doctor.module.css"; 
import Review from "./Review/Review"; 
import img from "../../Assets/GenericUser.jpg"; 
import "./DoctorSec.css"; 
 
const Doctor = () => { 
  const Reviews = [ 
    { 
      id: 1, 
      name: "Ramses", 
      content: 
        "sjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbg", 
    }, 
    { 
      id: 2, 
      name: "Moses", 
      content: 
        "sjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbg", 
    }, 
    { 
      id: 3, 
      name: "Tutankhamun", 
      content: 
        "sjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbg", 
    }, 
  ]; 
 
  return ( 
    <div> 
      <div className="content"> 
        <div> 
          <img 
            src="https://ilarge.lisimg.com/image/8073204/740full-gentleman.jpg" 
            style={{ objectFit: "cover" }} 
            className="docImg" 
          /> 
        </div> 
        <div className="docInfo"> 
          <h3 className="midyHaed"> 
            Doctor <span>Mohammed Fahmy</span> 
          </h3> 
 
          <p className="rightSide"> 
            Dermatologist Specialised in adults, Hand surgy, burn surgy 
            Pediatric Dermatology and Cosmatic Dermatology and Laser Distance : 
            3 KM 
            <br /> 
            ⭐️⭐️⭐️⭐️⭐️ 
            <br /> 
            overall rating from 115 visitors 
            <br /> 
            Dermatologist Specialised 
            <br /> 
            Start with 2 free session 
            <br /> 
            17756 
            <div className=""> 
              <button>Talk now with doctor Mohammed Fahmy</button> 
            </div> 
          </p> 
        </div> 
      </div> 
      <div className={DoctorCSS.Reviews} style={{ borderRadius: "15px" }}> 
        <h6 className="p-2 mx-4">Reviews</h6> 
        <div> 
          {Reviews.map((r) => ( 
            <Review key={r.id} name={r.name} content={r.content} /> 
          ))} 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default Doctor;