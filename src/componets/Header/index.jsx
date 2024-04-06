import React from "react";
import Logo from "../../images/Kinoblackwebp-1024x1015.webp";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Header({ setValue, value }) {
  const nav = useNavigate();
  function getSearch() {
    if (value !== "") {
      nav(`/Search`);
    } else {
      alert("заполните все поля..");
    }
  }

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={Logo} alt="" />
            <h1>Danistation</h1>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Top-rated">Top Rated</Link>
            <Link to="/Popular">Popular</Link>
          </nav>
          <div className="search">
            <input
              onChange={(el) => {
                setValue(el.target.value);
              }}
              value={value}
              type="text"
              placeholder="search"
            />
            <button onClick={() => getSearch()}>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
