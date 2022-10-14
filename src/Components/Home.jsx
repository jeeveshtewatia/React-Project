import React, { useState, useEffect } from "react";
import fetchData from "./api";
import Articles from "./Articles";
import Latest from "./Latest";
import Title from "./Title";
// import Data from "./Data";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [apidata, setData] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      setData(await fetchData());
    };
    apiFetch();
  }, [apidata]);
  console.log("Home page api", apidata);
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
        {apidata &&
          apidata
            .filter((data) => data.category === "Latest")
            .map((data) => (
              <Latest
                key={data.id}
                index={data.id}
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
          {apidata &&
            apidata
              .filter((data) => data.category === "Bollywood")
              .map((data) => (
                <Articles
                  key={data.id}
                  index={data.id}
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
          {apidata.length > 1 && (
            <div>
              <Latest
                key={apidata[0].id}
                index={apidata[0].id}
                title={apidata[0].title}
                img={apidata[0].img}
                category={apidata[0].category}
                date={apidata[0].Date}
              />
              <Sidebar
                key={apidata[0].id}
                index={apidata[0].id}
                title={apidata[0].title}
                img={apidata[0].img}
                category={apidata[0].category}
                date={apidata[0].Date}
              />

              <Sidebar
                key={apidata[7].id}
                title={apidata[7].title}
                index={apidata[7].id}
                img={apidata[7].img}
                category={apidata[7].category}
                date={apidata[7].Date}
              />
              <Sidebar
                key={apidata[14].id}
                index={apidata[14].id}
                title={apidata[14].title}
                img={apidata[14].img}
                category={apidata[14].category}
                date={apidata[14].Date}
              />
              <Sidebar
                key={apidata[20].id}
                index={apidata[20].id}
                title={apidata[20].title}
                img={apidata[20].img}
                category={apidata[20].category}
                date={apidata[20].Date}
              />
            </div>
          )}
        </div>
      </div>
      <Title title="Top Stories" />
      <br />
      <hr />
      <div className="topStory">
        {apidata &&
          apidata
            .filter((data) => data.category === "Story")
            .map((data) => (
              <Latest
                key={data.id}
                index={data.id}
                title={data.title}
                img={data.img}
                pera={data.Description}
                category={data.category}
                // date={data.Date}
              />
            ))}
      </div>
      <hr />
    </div>
  );
};

export default Home;
