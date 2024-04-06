import "./index.css";
import hero from "../../images/hero.webp";
import { useState } from "react";
import SliderPop from "./SliderPop/sliderPop";
import SliderTop from "./SliderTop/sliderTop";

function Home(props) {
  const [slide, setSlide] = useState(false);
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="home">
            <div className="home-description">
              <h2>Наш кино сайт сделан...</h2>
              <p>
                Поиск фильмов, новости кино, отзывы пользователей, афиша <br />
                кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и{" "}
                <br />
                многое другое. <br />
                Смотрите на ОРИГИНАЛЬНОМ сайте киного фильмы и сериалы онлайн:{" "}
                <br />
                огромная кино база kinogo доступна бесплатно!
              </p>
              <button>подробнее</button>
            </div>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      <section id="slider">
        <div className="container">
          <div className="slider">
            <h2>На повестке дня...</h2>
            <div className="btn-slider">
              <button onClick={() => setSlide(true)}>TopRated</button>
              <button onClick={() => setSlide(false)}>Popular</button>
            </div>
            {slide == true ? <SliderTop /> : <SliderPop />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
