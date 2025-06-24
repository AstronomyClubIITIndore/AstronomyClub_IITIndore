import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../../styles/projects.css';

import CubeSat from './Images/cubeSat.jpeg';
import CanSat from './Images/canSat.jpeg';
import windTunnel from './Images/windTunnel.jpeg';

const projectData = [
  {
    title: 'Remote Weather Station with drone adaptability',
    image:
      'https://www.mdpi.com/drones/drones-07-00340/article_deploy/html/images/drones-07-00340-g001.png',
    description:
      'Advanced drone payloads capable of environmental monitoring, equipped with sensors for temperature, pressure, humidity, and gas levels. These systems allow real-time data transmission, enhancing situational awareness and decision-making in various fields.',
  },
  {
    title: 'CubeSat',
    image: CubeSat,
    description:
      'A robust mini-satellite designed for space deployment. The CubeSat features radiation-hardened systems, thermal protection, and efficient power handling for scientific observations and real-time ground communication.',
  },
  {
    title: 'CanSat',
    image: CanSat,
    description:
      'A miniature satellite modeled in a soda can size, CanSats simulate satellite operations including telemetry, sensor logging, and real-time transmission during descent. Ideal for aerospace training and innovation.',
  },
  {
    title: 'Wind Tunnel',
    image: windTunnel,
    description:
      'Simulates controlled airflow to test models for drag, lift, and aerodynamic stability. A fundamental tool in aerospace and mechanical engineering to study and optimize design performance.',
  },
];

const ProjectCard = ({ title, image, description }) => (
  <div className="project-card">
    <div className="project-img" style={{ backgroundImage: `url(${image})` }} />
    <div className="project-details">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

function Projects() {
  return (
    <div className="projects-container">
      <Navbar />
      <div className="projects">
        <div className="projects-hero">
          <h1>Projects and Innovations</h1>
        </div>
        <div className="projects-grid">
          {projectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
