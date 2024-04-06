import React from "react";
import topaxios from "axios";
import { useState, useEffect } from "react";
import "./sliderTop.css";

let key = "45d1d56fc54beedb6c0207f9ac6cab7c";

function SliderTop(props) {
  const [topMovie, setTopMovie] = useState([]);
  function getTopMovie() {
    topaxios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`
    ).then((data) => {
      setTopMovie(data.data.results);
    });
  }

  useEffect(() => {
    getTopMovie();
  }, []);
  console.log(topMovie);
  return (
    <div id="top">
      <div className="container">
        <div className="top">
          {topMovie.map((el) => (
            <div className="topBox">
              <img
                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                alt=""
              />
              <h3>{el.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderTop;
