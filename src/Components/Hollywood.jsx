import React from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import "./Style.css";
import Sidebar from "./Sidebar";

const Hollywood = () => {
  return (
    <div>
      <Title title="Hollywood" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.category === "Hollywood").map((data) => (
            <Articles
              index={data.id}
              title={data.title}
              img={data.img}
              pera={data.Description}
              category={data.category}
              date={data.Date}
            />
          ))}
        </div>
        <div className="leftArticle">
          <Title title="Top Posts" />
          <div>
            {Data.filter((data) => data.category === "Hollywood").map(
              (data) => (
                <Sidebar
                  key={data.id}
                  title={data.title}
                  img={data.img}
                  // pera={data.Description.slice(0, 20)}
                  category={data.category}
                  date={data.Date}
                />
              )
            )}
          </div>
          <div className="addvertise flexbox">Advertisement</div>
        </div>
      </div>
    </div>
  );
};

export default Hollywood;
