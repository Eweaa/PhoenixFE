import React from "react"; 
import "./Profile.css"; 
import Post from "../Home/Post"; 
 
const Profile = () => { 
  return ( 
    <div> 
      <img 
        src="https://mytechshout.com/wp-content/uploads/2014/10/Facebook-Cover-Photos-8.jpg" 
        className="bgImg" 
      /> 
 
      <div className="details"> 
        <img 
          src="https://th.bing.com/th/id/OIP.z1Fl9P5QfqFRfLuPS5GjQwHaFk?pid=ImgDet&rs=1" 
          className="proImg" 
        /> 
        <h2 className="proHeader">Ahmed Mostafa</h2> 
      </div> 
      <Post 
        // key={id} 
        profilePic="https://images.pixexid.com/i35dg0e-a-man-wearing-a-black-shirt.jpeg" 
        message="The demo works" 
        timestamp="This is timestamp" 
        userName="Ahmed Mostafa" 
        image="https://th.bing.com/th/id/R.5d2640166fb9248ee7ae20cbc19a9141?rik=QcfC8%2ft8rnv%2foQ&pid=ImgRaw&r=0" 
      /> 
    </div> 
  ); 
}; 
 
export default Profile;