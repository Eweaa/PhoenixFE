import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import Camp from "./Comp1.mp4";
import Image from "../../Assets/Phoenix.png";

function Post({ profilePic, image, userName, timestamp, message }) {
  return (
    <div className="post mb-3">
      <div className="post_top">
        <Avatar src={Image} className="post_avatar" />
        <div className="post_topInfo">
          <h3>First Degree</h3>
          <p></p>
        </div>
      </div>

      {/* <div className="post_bottom">
        <p>{message}</p>
      </div> */}

      <div className="post_image">
        {/* <video src="" /> */}
        <video width="842" height="500" controls>
          <source src={Camp} type="video/mp4" />
        </video>
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
