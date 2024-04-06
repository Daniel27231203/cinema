import React, { useEffect, useState } from "react";
import "./index.css";
import topAxios from "axios";

let key = "45d1d56fc54beedb6c0207f9ac6cab7c";

function TopRated(props) {
  const [TopRated, setTopRated] = useState([]);
  const [topBtn, setTopBtn] = useState([]);
  const [topArr, setTopArr] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  function getTopTated() {
    topAxios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${topRatedPage}`
    ).then((data) => {
      setTopRated(data.data.results);
      setTopBtn(data.data.total_pages);
    });
  }
  function getPages() {
    let newArr = [];
    for (let i = 1; i <= topBtn; i++) {
      newArr.push(i);
    }
    return setTopArr(newArr);
  }
  useEffect(() => {
    getTopTated();
    getPages();
  }, [topRatedPage]);
  console.log(topArr);
  return (
    <div id="topRated">
      <div className="container">
        <div className="topRated">
          <h1>Сегодня в топе.....</h1>
          <div className="topRatedBox">
            {TopRated.map((el) => (
              <div>
                <img
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                  alt=""
                />
                <h2>{el.title}</h2>
              </div>
            ))}
          </div>
          <div className="topRated_btn">
            {/* {topArr.map((el) => (
              <button onClick={() => setTopRatedPage(el)}>{el}</button>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRated;
