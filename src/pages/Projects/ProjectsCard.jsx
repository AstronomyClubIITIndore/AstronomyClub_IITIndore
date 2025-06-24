// ProjectCard.jsx
import React from 'react';
import '../../styles/projects.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
      <div className="project-info">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
