import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/projects.css";
import PCard from "./ProjectsCard";
import Footer from "../../components/Footer/Footer";

function Projects() {
  const projectsInfo = [
    {
      pName: "Stargazing",
      img: "https://drive.google.com/file/d/1emcWsJEkMUQOdcHJN6uHYL3uYNoYSNEN/view?usp=share_link",
      pInfo:
        "Stargazing is a primary event organized monthly by the Astronomy Club at IIT Indore. Supported by the Department of Astronomy, Astrophysics, and Space Engineering (DAASE), the club uses various telescopes to observe celestial objects visible in the night sky. These events offer participants an opportunity to explore planets, stars, and galaxies, often guided by experts. The sessions foster curiosity and a deeper understanding of the cosmos, attracting enthusiasts from across the IIT Indore community.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Guest Lectures",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "Guest Lectures are a significant feature of the Astronomy Club at IIT Indore. The club regularly invites speakers from around the world, including renowned researchers, industry experts, and innovative thinkers. These guest lectures provide a platform for speakers to share their latest research findings, offer insights into industry trends, discuss future prospects in the field, and present their innovative ideas. Additionally, speakers often share their personal experiences and career journeys, providing valuable inspiration and guidance to students. These sessions not only enhance the knowledge of club members but also foster a deeper understanding of the vast and dynamic field of astronomy and space science.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Kendriya Vidyalaya activities",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "As part of its outreach initiatives, the Astronomy Club at IIT Indore organizes several educational activities at Kendriya Vidyalaya, IIT Indore. These activities include Sun-Spot viewing sessions, where students get to observe solar phenomena using special equipment. Additionally, the club conducts creative sessions such as glass painting and 3D model making, which help students visualize and understand astronomical concepts. The outreach also features talk sessions delivered by club members in collaboration with DAASE faculties, providing students with insights into astronomy and space science. These activities aim to ignite a passion for science and astronomy among young students.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "100 hours of Astronomy",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "The '100 Hours of Astronomy' is an annual outreach event organized globally by the International Astronomical Union (IAU). This event aims to engage as many people as possible in celebrating the wonders of astronomy and the cosmos. The AsSET club at IIT Indore actively participates in this event every year, organizing various outreach and educational activities within the IITI community. These activities include public stargazing sessions, interactive workshops, lectures by renowned astronomers, and hands-on demonstrations. Through these events, the club strives to foster a deeper appreciation for astronomy and inspire a sense of wonder about the universe among participants.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "World Space Week",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "World Space Week is an annual global event celebrated in 95 countries, recognizing the contributions of science and technology to improving the human condition. The AsSET club at IIT Indore actively participates in this event, contributing to its activities and initiatives. The club organizes various events and educational programs, such as public lectures, interactive workshops, and stargazing sessions, to engage the community and raise awareness about the importance of space science and technology. Through these efforts, the AsSET club aims to inspire and educate participants about the wonders and potential of space exploration.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Nakshatra",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "The annual flagship event of the AsSET club.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
  ];

  return (
    <>
      <div className="Projects-encloser1">
        <Navbar />
        <div className="Projects-encloser2">
          {" "}
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
