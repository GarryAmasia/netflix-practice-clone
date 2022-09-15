import React from "react";
import "./Featured.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Batman from "../../assets/batman.png";
// import Dropdown from "../../data/Dropdown";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
        // <Dropdown />
      )}
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
