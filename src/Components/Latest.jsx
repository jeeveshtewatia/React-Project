import React from "react";
import { NavLink } from "react-router-dom";

const Latest = (props) => {
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
        // to={`/category/${props.category}/${props.index}`}
        to="/Blog"
      >
        <img
          // src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__340.jpg"
          alt=""
          src={props.img}
          width={"100%"}
          height={"60%"}
        />
        <h3>{props.title}</h3>
        <p> {props.pera}</p>
        {props.category && <h5>{`${props.category} / ${props.date}`}</h5>}
        {/* <h5>{`${props.category} / ${props.date}`}</h5> */}
      </NavLink>
    </>
  );
};

export default Latest;
