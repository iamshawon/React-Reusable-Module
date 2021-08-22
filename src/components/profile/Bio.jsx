import React from "react";

const Bio = (props) => {
  return (
    <div className="Bio">
      <h3>{props.name}</h3>
      <ul>{props.title}</ul>
    </div>
  );
};

export default Bio;
