import React from "react";
import "../../styles/projects.css";

function PCard(project) {
  return (
    <>
      <div className="Projects-Card">
        <div
          className="Photo"
          style={{
            backgroundImage: `url(${project.img})`,
          }}></div>
        <div className="Info">
          <h2>{project.pName}</h2>
          <p>{project.pInfo}</p>
          <div>
            <a href={project.pLink} className="button">
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCard;
