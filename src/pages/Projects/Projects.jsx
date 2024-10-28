import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/projects.css';
import PCard from './ProjectsCard';
import Footer from '../../components/Footer/Footer';

function Projects() {
  const projectsInfo = [
    {
      pName: 'Remote Weather Station with drone adaptability',
      img: 'https://www.mdpi.com/drones/drones-07-00340/article_deploy/html/images/drones-07-00340-g001.png',
      pInfo:
        'The Remote Weather Station project focuses on developing payloads for drones that can measure temperature, pressure, humidity, and gas composition. The payloads will be integrated with communication systems to transmit collected data in real-time. The project involves designing and testing these payloads to ensure accurate and reliable data transmission. The goal is to enhance weather monitoring capabilities and provide valuable information for various applications, including environmental studies and disaster management.',
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: 'Ion Plasma Thruster',
      img: 'https://i.ytimg.com/vi/mnCmvxt2jn8/maxresdefault.jpg',
      pInfo:
        "The development of a functional Ionic Plasma Thruster prototype involves designing and constructing a device that generates thrust through the acceleration of ionized gases. This project includes creating a robust ionization chamber, optimizing the ion acceleration process, and testing the thruster's performance in various conditions. The prototype aims to demonstrate efficient propulsion and precise control, contributing to advancements in space exploration technology. Key challenges include achieving high thrust-to-power ratios and ensuring operational stability in a vacuum environment.",
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: 'Magneto-torquer for ADCS system',
      img: 'https://www.ece3sat.com/images/ADCS_subsystem.png',
      pInfo:
        "The Magneto-Torquer for ADCS system project involves developing an Attitude Determination and Control System (ADCS) for a CubeSat, integrating magneto-torquers, reaction wheels, and gyroscopes. The magneto-torquers use Earth's magnetic field to control the satellite's orientation, while reaction wheels provide precise angular momentum control. Gyroscopes measure the satellite's rotational rates to support accurate attitude determination. The project focuses on optimizing these components to ensure stable and reliable satellite positioning and control for various space missions.",
      // pLink:
      //   "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: 'Data processing and analysis',
      img: 'https://img.freepik.com/premium-vector/digital-concept-big-data-is-fluttering-data-collection-data-processing-data-analysis-beautiful-futuristic-background_36402-1420.jpg',
      pInfo:
        'The Data Processing and Analysis project involves creating programs and algorithms to handle and interpret data from diverse sources like payloads, observatories, telescopes, radars, and receivers. This includes developing efficient methods for data integration, cleaning, and transformation to ensure accuracy and consistency. The goal is to extract meaningful insights and generate actionable information from complex datasets. The project also focuses on optimizing processing speeds and ensuring scalability to handle large volumes of data effectively.',
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
