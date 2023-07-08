import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import News from "./Components/News";

const App = () => {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Dark Mode");
  const [country, setCountry] = useState("in");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("Light Mode");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      setToggleText("Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  const getCountry = (cnt) => {
    setCountry(cnt);
  };

  return (
    <Router>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
        getCountry={getCountry}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              key="general"
              mode={mode}
              category="general"
              country={country}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={<News key="business" mode={mode} category="business" />}
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News key="entertainment" mode={mode} category="entertainment" />
          }
        />
        <Route
          exact
          path="/general"
          element={<News key="general" mode={mode} category="general" />}
        />
        <Route
          exact
          path="/health"
          element={<News key="health" mode={mode} category="health" />}
        />
        <Route
          exact
          path="/science"
          element={<News key="science" mode={mode} category="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<News key="sports" mode={mode} category="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={<News key="technology" mode={mode} category="technology" />}
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
};

export default App;
