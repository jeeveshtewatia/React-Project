import React from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import "./Style.css";
import Sidebar from "./Sidebar";

const Technology = () => {
  return (
    <div>
      <Title title="Technology" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.category === "Technology").map((data) => (
            <Articles
              index={data.id}
              key={data.id}
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
            {Data.filter((data) => data.category === "Technology").map(
              (data) => (
                <Sidebar
                  key={data.id}
                  title={data.title}
                  img={data.img}
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

export default Technology;
