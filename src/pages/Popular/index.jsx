import React, { useEffect, useState } from "react";
import "./index.css";
import popAxios from "axios";
let key = "45d1d56fc54beedb6c0207f9ac6cab7c";

function Popular(props) {
  const [popular, setPopular] = useState([]);

  function getPopular() {
    popAxios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    ).then((data) => {
      setPopular(data.data.results);
    });
  }
  useEffect(() => {
    getPopular();
  }, []);
  console.log(popular);
  return (
    <div id="popPop">
      <div className="container">
        <div className="popPop">
          <h1>популярные фильмы</h1>
          <div className="popPopBox">
            {popular.map((el) => (
              <div>
                <img
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                  alt=""
                />
                <h2>{el.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
