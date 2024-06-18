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
  Hrishikesh,
  Prempratik,
} from "../../assets/team";  





function Merch() {
  const [committee] = useState({

    members: [
      [
        {
          email: "me220003038@iiti.ac.in",
          name: "Hrishikesh Jawale",
          img: Hrishikesh,
          designation: "Merch Lead",
          ig: "https://www.instagram.com/hrjz02?igsh=ZTM0bjZuZXRsZW96",
          lin: "",
          git: ""
        }, 

        {
          email: "sse230021012@iiti.ac.in",
          name: "Prem Pratik",
          img: Prempratik,
          designation: "Merch",
          ig: "https://www.instagram.com/pratik_x077?igsh=MThncDRydG5jOWsyZA==",
          lin: "https://www.linkedin.com/in/prem-pratik-240872283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          git: ""
        },
        {
          email: "sameer.kumar@iiti.ac.in",
          name: "Sameer Kumar",
          img: unknownboys,
          designation: "Merch",
          ig: "",
          lin: "",
          git: ""
        },
        {
          email: "sai.pranav@iiti.ac.in",
          name: "Sai Pranav",
          img: unknownboys,
          designation: "Merch",
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

export default Merch
