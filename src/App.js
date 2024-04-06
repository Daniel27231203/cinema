import "./App.css";
import Header from "./componets/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import TopRated from "./pages/TopRated/index";
import Popular from "./pages/Popular";
import { useState } from "react";
import Search from "./pages/Search";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Header setValue={setValue} value={value} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Top-rated" element={<TopRated />} />
        <Route path="/Popular" element={<Popular />} />
        <Route
          path="/Search"
          element={<Search value={value} set={setValue} />}
        />
      </Routes>
    </div>
  );
}

export default App;
