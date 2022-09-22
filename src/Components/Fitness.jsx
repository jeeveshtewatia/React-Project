import React from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import "./Style.css";
import Sidebar from "./Sidebar";

const Fitness = () => {
  return (
    <div>
      <Title title="Fitness" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.category === "Fitness").map((data) => (
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
            {Data.filter((data) => data.category === "Fitness").map((data) => (
              <Sidebar
                key={data.id}
                index={data.id}
                title={data.title}
                img={data.img}
                category={data.category}
                date={data.Date}
              />
            ))}
          </div>
          <div className="addvertise flexbox">Advertisement</div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
