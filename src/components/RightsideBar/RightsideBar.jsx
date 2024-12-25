import React from "react";
import "./RightsideBar.css";
import assets from "../../assets/assets";

const RightsideBar = () => {
  return (
    <div className="rs">
      <div className="profile">
        <img src={assets.profile_img} alt="" />
        <h3>Shashank Mg <img src={assets.green_dot} className="dot"/></h3>
        <p>Hey, There i am using Chatbox </p>
      </div>
      <hr />
      <div className="media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default RightsideBar;
