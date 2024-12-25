import React from "react";
import "./Chat.css";
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import ChatBox from "../../components/Chatbox/ChatBox";
import RightsideBar from "../../components/RightsideBar/RightsideBar";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftsideBar />
        <ChatBox />
        <RightsideBar />
      </div>
    </div>
  );
};

export default Chat;
