import React from "react";
import { useLocation } from "react-router-dom";
import Data from "./Data";
import Latest from "./Latest";
import Title from "./Title";

export default function Blog() {
  const location = useLocation();
  console.log("location data", location);

  return (
    <>
      <div className="blogPage ">
        <h1 className="animate__fadeInDown animate__animated">
          {location.state.title}{" "}
        </h1>
        <img
          src={location.state.img}
          alt=""
          width="60%"
          height="100%"
          className="animate__flipInX animate__fadeInDown animate__animated "
        />
        <p>{location.state.description} </p>
        <h5>{location.state.Date}</h5>
      </div>
      <Title title="The Latest" />
      <div className="latestData">
        {Data.filter((data) => data.category === "Latest").map((data) => (
          <Latest
            key={data.id}
            index={data.id}
            title={data.title}
            img={data.img}
            pera={data.Description.slice(0, 200)}
            category={data.category}
            date={data.Date}
          />
        ))}
      </div>
    </>
  );
}
