import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  // const travel = "Travel";
  // const Date = "07 Aug 2020";

  return (
    <NavLink
      state={{
        title: props.title,
        img: props.img,
        description: props.pera,
        Date: props.date,
        index: props.index,
        category: props.category,
      }}
      to={`/category/${props.category}/${props.index}`}
      // to="/Blog"
    >
      <div className="sideflex" key={props.index}>
        <div>
          <img
            src={props.img}
            alt="Some information"
            // height="150px"
            // width="150px"
          />
        </div>
        <div>
          <h3 className="animate__animated animate__bounce">{props.title}</h3>
          <p>{props.pera}</p>
          <h5>{`${props.category} / ${props.date}`}</h5>
        </div>
      </div>
    </NavLink>
  );
};

export default Sidebar;
