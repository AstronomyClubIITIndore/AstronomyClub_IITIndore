import React from 'react';
import '../../styles/projects.css';

function PCard(project) {
  return (
    <>
      <center>
        <div className="Projects-Card w-[90vw] ">
          <div
            className="Photo"
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundSize: 'contain',
            }}
          ></div>
          <div className="Info">
            <h2>{project.pName}</h2>
            <p>{project.pInfo}</p>
            {/* <div>
            <a href={project.pLink} className="button">
              Link
            </a>
          </div> */}
          </div>
        </div>
      </center>
    </>
  );
}

export default PCard;
