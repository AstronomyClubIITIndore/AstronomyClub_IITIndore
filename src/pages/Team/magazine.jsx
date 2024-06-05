import React , { useState }  from 'react'
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import {
  Parulpahurkar,
  Anjanayae,
  Anuvab,
  Dhritijha,
  Sidhwatanuj,
  Sibasishbarik,
  unknownboys,
  Deveshsharma,
  Aryanbhake,
  Parthkothari,
} from "../../assets/team";  





function Magazine() {
  const [committee] = useState({

    members: [
      [
        {
          email: "devesh.sharma@iiti.ac.in",
          name: "Devesh Sharma",
          img: Deveshsharma,
          designation: "Magazine Lead",
          ig: "https://www.instagram.com/ezdev",
          lin: "https://www.linkedin.com/in/devesh",
          git: "https://github.com/ezdevesh"
        },

        {
          email: "parul.pahurkar@iiti.ac.in",
          name: "Parul Pahurkar",
          img: Parulpahurkar,
          designation: "Club Co-head",
          ig: "https://www.instagram.com/ppahu",
          lin: "https://www.linkedin.com/in/parul-p",
          git: ""
        },
        {
          email: "anjanayae.chaurasia@iiti.ac.in",
          name: "Anjanayae Chaurasia",
          img: Anjanayae,
          designation: "Member",
          ig: "https://www.instagram.com/anjan",
          lin: "https://www.linkedin.com/in/anjana",
          git: "https://github.com/Anjanayae"
        },
        {
          email: "anuvab.mandal@iiti.ac.in",
          name: "Anuvab Mandal",
          img: Anuvab,
          designation: "Member + Merch Treasurer",
          ig: "https://www.instagram.com/itzz.m",
          lin: "https://in.linkedin.com/in/anuvab-m",
          git: "https://github.com/mandal0204"
        },
        {
          email: "dhriti.jha@iiti.ac.in",
          name: "Dhriti Jha",
          img: Dhritijha,
          designation: "Member",
          ig: "",
          lin: "https://www.linkedin.com/in/dhriti-jh",
          git: ""
        },
        {
          email: "tanuj.sidhwa@iiti.ac.in",
          name: "Tanuj Sidhwa",
          img: Sidhwatanuj,
          designation: "Member",
          ig: "https://www.instagram.com/tanuj_",
          lin: "https://www.linkedin.com/in/tanuj-s",
          git: "https://github.com/tanuj-sidhwa"
        },
        {
          email: "sibasish.barik@iiti.ac.in",
          name: "Sibasish Barik",
          img: Sibasishbarik,
          designation: "Member",
          ig: "https://www.instagram.com/sibasi",
          lin: "www.linkedin.com/in/sibasish-barik",
          git: "https://github.com/sibasish-b22git"
        },
        {
          email: "tejas.rajuskar@iiti.ac.in",
          name: "Tejas Rajuskar",
          img: unknownboys,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
      
        {
          email: "aryan.bhake@iiti.ac.in",
          name: "Aryan Bhake",
          img: Aryanbhake,
          designation: "Member",
          ig: "https://www.instagram.com/aryan",
          lin: "https://www.linkedin.com/in/aryan-",
          git: ""
        },
        {
          email: "parth.kothari@iiti.ac.in",
          name: "Parth Kothari",
          img: Parthkothari,
          designation: "Member",
          ig: "https://www.instagram.com/pathla",
          lin: "https://www.linkedin.com/in/parth-k",
          git: ""
        },
      ],
    ],
  });


  const renderPersonCard = (person, idx) => (
  
    <div key={idx} className="personCard">
     <img src={person.img} alt={person.name} className="pdp" />
     <div className="personCardBody font-ubuntu">
       <h4 className="font-acme" style={{ color: "#34639D" }}>
         {person.name}
       </h4>
       <h5 className="font-acme" style={{ color: "rgb(54, 54, 54)" }}>
         {person.designation}
       </h5>
       <p>
         <a href={"mailto:" + person.email} className='mailId'>{person.email}</a>
       </p>
       {/* {person.land && <p>{person.land + " (" + person.extn + ")"}</p>}
       {person.phno && (
         <p>
           <a href={"tel:" + person.phno}>{person.phno}</a>
         </p>
       )} */}
       <p className='icons'>
         {/* {person.fb && (
           <a href={person.fb}>
             <FaFacebookSquare className="socIcon" />
           </a>
         )} */}
         {person.ig && (
           <a href={person.ig}>
             <FaInstagram className="socIcon" />
           </a>
         )}
         {person.lin && (
           <a href={person.lin}>
             <FaLinkedin className="socIcon" />
           </a>
         )}
         {person.git && (
           <a href={person.git}>
             <FaGithub className="socIcon" />
           </a>
         )}
       </p>
     </div>
   </div>
  )

  return (
   <>
     
      <div className="container-fluid">
        {committee.members.flat().map(renderPersonCard)}
      </div>
   </>
  )
}

export default Magazine
