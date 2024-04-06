import React, { useEffect, useState } from "react";
import "./index.css";
import searchAxios from "axios";
let key = "45d1d56fc54beedb6c0207f9ac6cab7c";

function Search({ value, set }) {
  const [movie, setMovie] = useState([]);
  function addSearch() {
    searchAxios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${value}`
    ).then((data) => {
      setMovie(data.data.results);
    });
  }
  useEffect(() => {
    addSearch();
  }, [value]);
  if (movie.length == []) {
    return <h1>вы ошиблись! такого фильма нету</h1>;
  }
  return (
    <div id="search">
      <div className="container">
        <div className="search">
          <div className="search-block">
            {movie.map((el) => (
              <div>
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
    </div>
  );
}

export default Search;
