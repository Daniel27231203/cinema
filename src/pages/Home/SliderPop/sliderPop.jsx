import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./sliderPop.css";

let key = "45d1d56fc54beedb6c0207f9ac6cab7c";

function SliderPop(props) {
  const [popularMovie, setPopularMovie] = useState([]);
  function getPopularMovie() {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`
    ).then((data) => {
      setPopularMovie(data.data.results);
    });
  }

  useEffect(() => {
    getPopularMovie();
  }, []);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {popularMovie.map((el) => (
            <div className="popularBox">
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

export default SliderPop;
