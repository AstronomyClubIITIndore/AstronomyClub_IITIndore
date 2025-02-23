import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/projects.css';
import PCard from './ProjectsCard';
import Footer from '../../components/Footer/Footer';
import CubeSat from '../Projects/Images/cubeSat.jpeg';
import CanSat from '../Projects/Images/canSat.jpeg';
import windTunnel from '../Projects/Images/windTunnel.jpeg';

function Projects() {
  const projectsInfo = [
    {
      pName: 'Remote Weather Station with drone adaptability',
      img: 'https://www.mdpi.com/drones/drones-07-00340/article_deploy/html/images/drones-07-00340-g001.png',
      pInfo:
        'The development of advanced payload systems for drones, designed to facilitate real-time communication and seamless data transmission of recorded information, is a crucial aspect of modern drone technology. These payloads are equipped with a variety of sensors and instruments capable of capturing and transmitting environmental parameters such as temperature, atmospheric pressure, humidity levels, and gas composition. By integrating these sophisticated measurement capabilities with efficient data transmission mechanisms, drones can be deployed for diverse applications, including environmental monitoring, industrial inspections, and scientific research. The combination of real-time data collection and communication enhances situational awareness, allowing for improved decision-making in various operational scenarios.',
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: 'CubeSat',
      img: CubeSat,
      pInfo:
        'The development of a launch-ready CubeSat involves designing and engineering a compact yet robust satellite capable of withstanding the standard noise and vibration tests required for space deployment. This process includes ensuring structural integrity, thermal regulation, and power efficiency to endure the harsh conditions of launch and orbit. The CubeSat will be equipped with a reliable communication system for seamless data transmission and reception, enabling real-time interaction with ground stations. Additionally, it will feature a suite of advanced sensors designed to conduct scientific observations, environmental monitoring, or mission-specific data collection. By integrating these critical components, the CubeSat will be prepared for deployment in space, contributing to research, technology demonstration, or operational missions in low Earth orbit and beyond.',
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: 'CanSat',
      img: CanSat,
      pInfo:
        'A CanSat is a compact, can-sized satellite designed to replicate real satellite operations by collecting, processing, and transmitting data during its descent. It serves as an educational and experimental platform, allowing students and engineers to gain hands-on experience in aerospace engineering, electronics, and telemetry systems. Equipped with various sensors, a CanSat can measure parameters such as temperature, pressure, altitude, and acceleration, providing valuable insights into atmospheric conditions. The collected data is transmitted to a ground station in real-time, enabling analysis and mission evaluation. By simulating key aspects of satellite development, deployment, and operation, CanSats play a crucial role in fostering innovation and practical learning in the field of space technology.',
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: 'Wind Tunnel',
      img: windTunnel,
      pInfo:
        'A wind tunnel is a sophisticated testing apparatus that simulates airflow over objects, such as aircraft, automobiles, or even architectural models, to study their aerodynamic properties. By precisely controlling the wind speed and direction within a confined environment, it allows engineers to analyze key factors such as lift, drag, and stability. This controlled setting enables a detailed examination of how air interacts with surfaces, helping to optimize designs for enhanced performance, safety, and efficiency. Overall, wind tunnel testing is an indispensable tool in the field of aerodynamics, providing critical insights that drive innovations in transportation, engineering, and various related industries.',
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
  ];

  return (
    <>
      <div className="Projects-encloser1">
        <Navbar />
        <div className="Projects-encloser2">
          {' '}
          <div className="Projects-heading">Projects and Innovations</div>
        </div>
      </div>
      {/* <PCard></PCard>
      <PCard></PCard>
      <PCard></PCard>
      <PCard></PCard> */}
      {projectsInfo.flat().map(PCard)}
      <Footer />
    </>
  );
}

export default Projects;
