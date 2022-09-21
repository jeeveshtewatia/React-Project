import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className="animate__animated animate__bounce title">{props.title}</h1>
    </div>
  );
};

export default Title;
