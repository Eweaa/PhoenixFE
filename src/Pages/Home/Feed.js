import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import Widgets from "./Widgets";

function Feed() {
  return (
    <div className="feed">
      <MessageSender />
      <Post
        // key={id}
        profilePic="https://images.pixexid.com/i35dg0e-a-man-wearing-a-black-shirt.jpeg"
        message="Tiny text, also called small text, is a collection of Unicode characters that look like a small font. The small text gives your social media profiles and text messages a tempting appearance and helps you stand out from the crowd. Also, small text is widely used to attract people towards your content by making it more appealing."
        timestamp="This is timestamp"
        userName="Mohammedelsayed2436"
        image="https://kaitlinzhang.com/wp-content/uploads/2017/03/how-to-take-a-profile-photo-personal-branding-kaitlin-zhang-15-1024x683.jpg"
      />
      <Post
        // key={id}
        profilePic="https://images.pixexid.com/i35dg0e-a-man-wearing-a-black-shirt.jpeg"
        message="The demo works"
        timestamp="This is timestamp"
        userName="Ahmed"
        image="https://th.bing.com/th/id/R.5d2640166fb9248ee7ae20cbc19a9141?rik=QcfC8%2ft8rnv%2foQ&pid=ImgRaw&r=0"
      />
      <Widgets />
    </div>
  );
}

export default Feed;
