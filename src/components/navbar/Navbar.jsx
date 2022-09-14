import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Face6Icon from "@mui/icons-material/Face6";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png"
            alt="netflix-logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsIcon className="icon" />
          <Face6Icon className="icon" />
          <div className="profile">
            <KeyboardArrowDownIcon className="icon" />
            <div className="options">
              <span>settings</span>
              <span>logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
