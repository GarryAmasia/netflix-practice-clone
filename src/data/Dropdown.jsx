import React from "react";

const Dropdown = ({ type }) => {
  const lists = [
    { name: "comedy", val: "Comedy" },
    { name: "crime", val: "Crime" },
    { name: "fantasy", val: "fantasy" },
  ];

  return (
    <div className="category">
      <span>{type === "movie" ? "Movies" : "TV Series"}</span>
      <select name="genre" id="genre">
        {lists.map((list) => {
          return <option value={list.name}>{list.val}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
