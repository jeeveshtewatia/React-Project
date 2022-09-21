import React from "react";

const Story = (props) => {
  return (
    <div>
      <h1>{props.heading} </h1>
      <p>{props.para} </p>
      <p>{`${props.title} / ${props.date}`}</p>
    </div>
  );
};

export default Story;
