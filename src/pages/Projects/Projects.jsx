import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/projects.css";
import PCard from "./ProjectsCard";
import Footer from "../../components/Footer/Footer";

function Projects() {
  const projectsInfo = [
    {
      pName: "Project Name",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo odio, sit sapiente maiores earum placeat ex tempora natus Molestiae iusto consectetur voluptatibus ex modi facere corporis accusantium voluptas dicta, id vel suscipit hic qui omnis officia. Est nihil libero accusantium consectetur temporibus vel porro saepe neque! Optio voluptatum ut inventore vero obcaecati, dolorem laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic delectus explicabo et labore! Quibusdam quod voluptate optio tenetur expedita modi, in ipsum dolor odit, et temporibus facilis maxime dolores quas deleniti dolore dolorum reiciendis accusamus, ex sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo quibusdam, temporibus cupiditate facere obcaecati corrupti amet expedita numquam accusamus repellat.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Project Name",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo odio, sit sapiente maiores earum placeat ex tempora natus Molestiae iusto consectetur voluptatibus ex modi facere corporis accusantium voluptas dicta, id vel suscipit hic qui omnis officia. Est nihil libero accusantium consectetur temporibus vel porro saepe neque! Optio voluptatum ut inventore vero obcaecati, dolorem laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic delectus explicabo et labore! Quibusdam quod voluptate optio tenetur expedita modi, in ipsum dolor odit, et temporibus facilis maxime dolores quas deleniti dolore dolorum reiciendis accusamus, ex sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo quibusdam, temporibus cupiditate facere obcaecati corrupti amet expedita numquam accusamus repellat.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Project Name",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo odio, sit sapiente maiores earum placeat ex tempora natus Molestiae iusto consectetur voluptatibus ex modi facere corporis accusantium voluptas dicta, id vel suscipit hic qui omnis officia. Est nihil libero accusantium consectetur temporibus vel porro saepe neque! Optio voluptatum ut inventore vero obcaecati, dolorem laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic delectus explicabo et labore! Quibusdam quod voluptate optio tenetur expedita modi, in ipsum dolor odit, et temporibus facilis maxime dolores quas deleniti dolore dolorum reiciendis accusamus, ex sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo quibusdam, temporibus cupiditate facere obcaecati corrupti amet expedita numquam accusamus repellat.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Project Name",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo odio, sit sapiente maiores earum placeat ex tempora natus Molestiae iusto consectetur voluptatibus ex modi facere corporis accusantium voluptas dicta, id vel suscipit hic qui omnis officia. Est nihil libero accusantium consectetur temporibus vel porro saepe neque! Optio voluptatum ut inventore vero obcaecati, dolorem laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic delectus explicabo et labore! Quibusdam quod voluptate optio tenetur expedita modi, in ipsum dolor odit, et temporibus facilis maxime dolores quas deleniti dolore dolorum reiciendis accusamus, ex sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo quibusdam, temporibus cupiditate facere obcaecati corrupti amet expedita numquam accusamus repellat.",
      pLink:
        "https://github.com/AstronomyClubIITIndore/AstronomyClub_IITIndore/tree/main",
    },
    {
      pName: "Project Name",
      img: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
      pInfo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo odio, sit sapiente maiores earum placeat ex tempora natus Molestiae iusto consectetur voluptatibus ex modi facere corporis accusantium voluptas dicta, id vel suscipit hic qui omnis officia. Est nihil libero accusantium consectetur temporibus vel porro saepe neque! Optio voluptatum ut inventore vero obcaecati, dolorem laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic delectus explicabo et labore! Quibusdam quod voluptate optio tenetur expedita modi, in ipsum dolor odit, et temporibus facilis maxime dolores quas deleniti dolore dolorum reiciendis accusamus, ex sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo quibusdam, temporibus cupiditate facere obcaecati corrupti amet expedita numquam accusamus repellat.",
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
