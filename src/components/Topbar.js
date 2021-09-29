import React from "react";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-pagename">
        <img src="/Assets/settings.svg" alt="" />
        <h3>Setting</h3>
      </div>
      <div className="topbar-icons">
        <img src="/Assets/chat.svg" alt="" className="re-icons" />
        <img src="/Assets/question.svg" alt="" className="re-icons" />
        <img src="/Assets/setting.svg" alt="" className="re-icons" />
        <div className="money">
          <i class="fas fa-coins"></i>
          <span>50,000</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <img src="/Assets/profile.svg" alt="" />
      </div>
    </div>
  );
}

export default Topbar;
