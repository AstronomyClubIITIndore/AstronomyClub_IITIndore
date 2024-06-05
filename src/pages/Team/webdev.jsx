import React , { useState }  from 'react'
import '../../styles/peoplecard.css';
import {FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import {
  Dikshitsuthar,
  Ayushkhadkekar,
  Atharvaporwal,
  Abhishekap,
} from "../../assets/team";  





function Webdev() {
  const [committee] = useState({

    members: [
      [
        {
          email: "mems220005019@iiti.ac.in",
          name: "Dikshit Suthar",
          img: Dikshitsuthar,
          designation: "WebDev team Lead",
          ig: "https://www.instagram.com/dikshit_suthar_57/",
          lin: "https://www.linkedin.com/in/dikshit-suthar-289459250/?originalSubdomain=in",
          git : "https://github.com/Dikshitsuthar"
        },
      
        {
          email: "ee220002022@iiti.ac.in",
          name: "Ayush Khadkekar",
          img: Ayushkhadkekar,
          designation: "Member",
        },
        {
          email: "mems220005015@iiti.ac.in",
          name: "Atharva Porwal",
          img: Atharvaporwal,
          designation: "Member",
        },
      
        {
          email: "mems220005001@iiti.ac.in",
          name: "Abhishek AP",
          img: Abhishekap,
          designation: "Member",
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

export default Webdev
