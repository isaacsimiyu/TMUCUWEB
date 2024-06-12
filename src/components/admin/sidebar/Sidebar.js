import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import TmucuLogo from "../../../assets/images/tmulogo.jpg"; // Import the image

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [sublistVisible, setSublistVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSublist = () => {
    setSublistVisible(!sublistVisible);
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <div className="logo-name">
            <img src={TmucuLogo} alt="Tmucu Logo" className="logo" />
            <div className="institution-info">
              <span className="institutionname">Tom Mboya University</span>
              <span className="institutionname">Christian Union</span>
            </div>
          </div>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          {/* Use onClick to navigate */}
          <div onClick={() => navigate("/dashboard")}>
            <BsGrid1X2Fill className="icon" /> Dashboard
          </div>
        </li>
        <li className="sidebar-list-item">
          {/* Use onClick to navigate */}
          <div onClick={() => navigate("/users")}>
            <BsPeopleFill className="icon" /> Users
          </div>
        </li>
        <li className="sidebar-list-item">
          {/* Use onClick to navigate */}
          <div onClick={() => navigate("/subscribers")}>
            <BsFillGrid3X3GapFill className="icon" /> Subscribers
          </div>
        </li>
        <li className="sidebar-list-item">
          {/* Use onClick to navigate */}
          <div onClick={() => navigate("/contacts")}>
            <BsPeopleFill className="icon" /> Contacts
          </div>
        </li>
        <li className="sidebar-list-item">
          <div className="sublist-toggle" onClick={toggleSublist}>
            <div>
              <BsMenuButtonWideFill className="icon" /> Ministries
            </div>
            <div className="arrow">{sublistVisible ? "▼" : "▶"}</div>
          </div>
          <ul className={`sublist ${sublistVisible ? "visible" : ""}`}>
            {/* Add onClick to navigate for each ministry */}
          </ul>
        </li>
        <li className="sidebar-list-item">
          {/* Use onClick to navigate */}
          <div onClick={() => navigate("/settings")}>
            <BsFillGearFill className="icon" /> Setting
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
