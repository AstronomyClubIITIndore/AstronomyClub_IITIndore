import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/projects.css";
import PCard from "./ProjectsCard";
import Footer from "../../components/Footer/Footer";

function Projects() {
  return (
    <>
      <div className="Projects-encloser1">
        <Navbar />
        <div className="Projects-encloser2">
          {" "}
          <div className="Projects-heading">Projects and Innovations</div>
        </div>
      </div>
      <PCard></PCard>
      <PCard></PCard>
      <PCard></PCard>
      <PCard></PCard>
      <Footer />
    </>
  );
}

export default Projects;
