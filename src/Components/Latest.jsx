import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const Latest = (props) => {
  console.log("Index number frpm Latest", props.index);
  console.log("category from  Latest", props.category);
  let hyperLink = `/category/${props.category}/${props.index}`;
  console.log("log of the hyperlink", hyperLink);
  return (
    <>
      <NavLink
        state={{
          title: props.title,
          img: props.img,
          description: props.pera,
          Date: props.date,
          index: props.index,
          category: props.category,
        }}
        to={hyperLink}
        // to="/Blog"
      >
        <img alt="" src={props.img} width={"100%"} height={"50%"} />
        <h3>
          {props.title} {props.index}
        </h3>
        <p> {props.pera}</p>
        {props.category && <h5>{`${props.category} / ${props.date}`}</h5>}
      </NavLink>
    </>
  );
};

export default Latest;
