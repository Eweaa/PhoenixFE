import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="messageSender mt-2 mb-3">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's happening?`}
          />
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <label className="messageSender__option">
          <input type='file'/>
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </label>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
        <div className="messageSender__option">
          <button
            className="messagebtn p-2"
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
