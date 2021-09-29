import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="">
        <img src="/Assets/next.svg" alt="" className="next-icon" />
      </div>
      <div className="img-container">
        <img src="/Assets/list.svg" alt="" />
      </div>
      <div className="img-container">
        <img src="/Assets/circle.svg" alt="" />
      </div>
      <div className="img-container">
        <img src="/Assets/user.svg" alt="" />
      </div>
      <div className="img-container">
        <img src="/Assets/hexagon.svg" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
