import React from "react";
import { BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/AboutUs";
import Activities from "./Activities/Activities";
import News from "./News/News";
import Projects from "./Projects/Projects";
import Team from "./Team/Team";

function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"    element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
