import React , { useState }  from 'react'
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import {
  Aman,
  Apoorvsingh,
  // ArnavDeshpande,
  Kaveri,
  // DodiyaYashKumar,
  Siddharthvezzu,
  // GopiCharan,
  Dakshchandel,
  Vishrutpandya,
  // AtharvMirashi,
  // HarshalRaut,
  // Keerthi,
  Aaravgupta,
  unknownboys,
  unknowngirls
} from "../../assets/team";  





function Logistics() {
  const [committee] = useState({

    members: [
      [
        {
          email: "arnav.deshpande@iiti.ac.in",
          name: "Arnav Deshpande",
          img: unknownboys,
          designation: "Logistics Lead",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "aarav.gupta@iiti.ac.in",
          name: "Aarav Gupta",
          img: Aaravgupta,
          designation: "Member",
          ig: "https://www.instagram.com/aarav",
          lin: "https://www.linkedin.com/in/aarav-",
          git: "https://github.com/aaravgupta026"
        },
        {
          email: "aman.choudhary@iiti.ac.in",
          name: "Aman Choudhary",
          img:   Aman,
          designation: "Member",
          ig: "https://www.instagram.com/aman",
          lin: "https://drive.google.com/open",
          git: ""
        },
        {
          email: "apoorv.singh@iiti.ac.in",
          name: "Apoorv Singh",
          img: Apoorvsingh,
          designation: "Member",
          ig: "https://www.instagram.com/apoor",
          lin: "https://www.linkedin.com/in/apoorv",
          git: ""
        },
       
        {
          email: "kaveri@iiti.ac.in",
          name: "N Kaveri",
          img: Kaveri,
          designation: "Member",
          ig: "https://www.instagram.com/itz_ka",
          lin: "https://drive.google.com/open",
          git: ""
        },
        {
          email: "dodiya.yash@iiti.ac.in",
          name: "Dodiya Yash Kumar",
          img: unknownboys,
          designation: "Member",
          ig: "https://www.instagram.com/yash",
          lin: "https://www.linkedin.com/in/yash-d",
          git: ""
        },
        {
          email: "siddharth.vezzu@iiti.ac.in",
          name: "Siddharth Vezzu",
          img: Siddharthvezzu,
          designation: "Member",
          ig: "https://www.instagram.com/sidve",
          lin: "www.linkedin.com/in/siddharth-vez",
          git: ""
        },
        {
          email: "gopi.charan@iiti.ac.in",
          name: "Gopi Charan",
          img: unknownboys,
          designation: "Member",
          ig: "https://www.instagram.com/chand",
          lin: "https://www.linkedin.com/in/gopi-ch",
          git: ""
        },
        {
          email: "daksh.chandel@iiti.ac.in",
          name: "Daksh Chandel",
          img: Dakshchandel,
          designation: "Member",
          ig: "https://www.instagram.com/dc05_",
          lin: "https://www.linkedin.com/in/daksh-",
          git: ""
        },
        {
          email: "vishrut.pandya@iiti.ac.in",
          name: "Vishrut Pandya",
          img: Vishrutpandya,
          designation: "Member",
          ig: "https://www.instagram.com/follow",
          lin: "",
          git: ""
        },
        {
          email: "atharv.mirashi@iiti.ac.in",
          name: "Atharv Mirashi",
          img: unknownboys,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "harshal.raut@iiti.ac.in",
          name: "Harshal Raut",
          img: unknownboys,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "keerthi@iiti.ac.in",
          name: "Keerthi",
          img: unknowngirls,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "amardeep@iiti.ac.in",
          name: "Amar Deep",
          img: unknownboys,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "katta@iiti.ac.in",
          name: "katta Rajat",
          img: unknownboys,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "souradeep@iiti.ac.in",
          name: "souradeep Hazra",
          img: unknownboys,
          designation: "Member",
          ig: "",
          lin: "",
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

export default Logistics
