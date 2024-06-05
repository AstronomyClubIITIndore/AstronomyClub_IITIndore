import React , { useState }  from 'react'
import '../../styles/peoplecard.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import {
  Aarushisingh,
  Anshulgaharwal,
  Anushka,
  Princekumar,
  Triptianand,
  Vedansh,
  pranjal,
  unknownboys,
  unknowngirls,

} from "../../assets/team";  





function Outreach() {
  const [committee] = useState({

    members: [
      [
        {
          email: "vedansh.shrivastava@iiti.ac.in",
          name: "Vedansh Shrivastava",
          img: Vedansh,
          designation: "Outreach Lead",
          ig: "https://www.instagram.com/velvet",
          lin: "https://www.linkedin.com/in/explore",
          git: ""
        },
        {
          email: "pranjal@iiti.ac.in",
          name: "Pranjal chaturvedi",
          img: pranjal,
          designation: "member",
          ig: "",
          lin: "https://www.linkedin.com/in/pranjal-chaturvedi-564630149",
          git: ""
        },
        {
          email: "aarushi.singh@iiti.ac.in",
          name: "Aarushi Singh",
          img: Aarushisingh,
          designation: "Member",
          ig: "",
          lin: "https://www.linkedin.com/in/aarush",
          git: ""
        },
        {
          email: "prince.kumar@iiti.ac.in",
          name: "Prince Kumar",
          img: Princekumar,
          designation: "Member",
          ig: "https://www.instagram.com/prince",
          lin: "https://www.linkedin.com/in/k07prin",
          git: "https://github.com/Princekumaroff"
        },
        {
          email: "anshul.gaharwal@iiti.ac.in",
          name: "Anshul Gaharwal",
          img: Anshulgaharwal,
          designation: "Member",
          ig: "",
          lin: "https://www.linkedin.com/in/anshul",
          git: ""
        },
        {
          email: "tripti.anand@iiti.ac.in",
          name: "Tripti Anand",
          img: Triptianand,
          designation: "Member",
          ig: "",
          lin: "https://www.linkedin.com/in/tripti-a",
          git: ""
        },
        
        {
          email: "anushka.agarwal@iiti.ac.in",
          name: "Anushka Agarwal",
          img: Anushka,
          designation: "Member",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "annie.chandrika@iiti.ac.in",
          name: "Annie Chandrika",
          img: unknowngirls,
          designation: "Member",
          ig: "https://www.instagram.com/annie",
          lin: "",
          git: ""
        },
        {
          email: "daisy.boro@iiti.ac.in",
          name: "Daisy Boro",
          img: unknownboys,
          designation: "Member",
          ig: "https://www.instagram.com/daisy.",
          lin: "https://www.linkedin.com/in/daisy-b",
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

export default Outreach
