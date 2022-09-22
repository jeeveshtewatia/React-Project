import React from "react";
import Articles from "./Articles";
import Latest from "./Latest";
import Title from "./Title";
import Data from "./Data";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="head">
        <div className="leftimg animate__animated animate__slideInLeft">
          <h1>The vertical Gallery</h1>
          <p>21 Sep 2022</p>
        </div>
        <div className="rightimg">
          <div>
            <NavLink to="/category/Bollywood">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/29/12/13/nature-3047449__340.jpg"
                alt=""
                className="animate__animated animate__lightSpeedInRight"
              />
            </NavLink>
          </div>
          <div>
            <NavLink to="/Food">
              <img
                src="https://media.istockphoto.com/photos/spicy-red-soup-beef-noodle-in-a-bowl-on-wooden-table-picture-id1318125728?b=1&k=20&m=1318125728&s=170667a&w=0&h=3knMWagOqC8ZdxSMOlw4bMeC67SCbB59E2468pfjMfo="
                alt=""
                className="animate__animated animate__lightSpeedInRight"
              />
            </NavLink>
          </div>
        </div>
      </div>

      <Title title="The Latest" />
      <div className="latestData">
        {Data.filter((data) => data.category === "Latest").map((data) => (
          <Latest
            key={data.id}
            title={data.title}
            img={data.img}
            pera={data.Description}
            category={data.category}
            date={data.Date}
          />
        ))}
      </div>
      <Title title="Latest Articles" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.category === "Bollywood").map((data) => (
            <Articles
              key={data.id}
              title={data.title}
              img={data.img}
              pera={data.Description}
              category={data.category}
              date={data.Date}
            />
          ))}

          <div className="articleimg">
            <h1>Title of the Vertical gallary</h1>
            <p>31 Dec 2022</p>
          </div>
        </div>
        <div className="leftArticle">
          <div className="advertisement">Advertisement</div>
          <Title title="Top Posts" />
          <div>
            <Latest
              key={Data[0].id}
              title={Data[0].title}
              img={Data[0].img}
              category={Data[0].category}
              date={Data[0].Date}
            />{" "}
            <Sidebar
              key={Data[0].id}
              title={Data[0].title}
              img={Data[0].img}
              category={Data[0].category}
              date={Data[0].Date}
            />{" "}
            {/* {Data.filter((item, index) => {
              index % 5 === 0;
            }).map((item) => {
              console.log("filtered items", item);
            })} */}
            <Sidebar
              key={Data[7].id}
              title={Data[7].title}
              img={Data[7].img}
              category={Data[7].category}
              date={Data[7].Date}
            />{" "}
            <Sidebar
              key={Data[14].id}
              title={Data[14].title}
              img={Data[14].img}
              category={Data[14].category}
              date={Data[14].Date}
            />{" "}
            <Sidebar
              key={Data[20].id}
              title={Data[20].title}
              img={Data[20].img}
              category={Data[20].category}
              date={Data[20].Date}
            />{" "}
          </div>
        </div>
      </div>
      <Title title="Top Stories" />
      <br />
      <hr />
      <div className="topStory">
        {Data.filter((data) => data.category === "Story").map((data) => (
          <Latest
            key={data.id}
            title={data.title}
            img={data.img}
            pera={data.Description}
            // category={data.category}
            // date={data.Date}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Home;
