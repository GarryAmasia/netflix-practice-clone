import React from "react";
import "./Featured.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Batman from "../../assets/batman.png";

const Featured = () => {
  return (
    <div className="featured">
      <img src="https://images.alphacoders.com/110/1101837.jpg" alt="" />
      <div className="info">
        <img src={Batman} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus
          recusandae deleniti, neque vero itaque quod? Culpa aliquam similique
          dolor tempore ad animi explicabo ducimus sint eaque quia! Cupiditate,
          nostrum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayCircleIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
