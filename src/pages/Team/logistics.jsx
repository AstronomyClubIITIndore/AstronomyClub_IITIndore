import React , { useState }  from 'react'
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import {
  Aman,
  Apoorvsingh,
  ArnavDeshpande,
  Kaveri,
  DodiyaYashKumar,
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
          email: "",
          name: "Arnav Deshpande",
          img: ArnavDeshpande,
          designation: "Logistics Lead",
          ig: "https://www.instagram.com/arnav_iamadp?igsh=OG1zbnF3ZTN3djY2",
          lin: "https://www.linkedin.com/in/arnav-deshpande-26a792290/",
          git: "https://github.com/Arnavdsp"
        },
        {
          email: "che230008001@iiti.ac.in",
          name: "Aarav Gupta",
          img: Aaravgupta,
          designation: "Member",
          ig: "https://www.instagram.com/aaravgupta025?igsh=MWVxeGFxdmF2YmJhZQ==",
          lin: "https://www.linkedin.com/in/aarav-gupta-0574192a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          git: "https://github.com/aaravgupta026"
        },
        {
          email: "sse230021001@iiti.ac.in",
          name: "Aman Choudhary",
          img:   Aman,
          designation: "Member",
          ig: "https://www.instagram.com/aman_choudhary2385?igsh=dDlpMzE2bHJwZWd0",
          lin: "",
          git: ""
        },
        {
          email: "sse230021004@iiti.ac.in",
          name: "Apoorv Singh",
          img: Apoorvsingh,
          designation: "Member",
          ig: "https://www.instagram.com/_apoorv.s__07?igsh=MTc5enk1c2s4dTk4aw==",
          lin: "https://www.linkedin.com/in/apoorv-singh-18758b287",
          git: "https://github.com/Ap00rv-1"
        },
       
        {
          email: "sse230021010@iiti.ac.in",
          name: "N Kaveri",
          img: Kaveri,
          designation: "Member",
          ig: "https://www.instagram.com/itz_kaveriiii?igsh=MWFuM2Q0OXJ6bWJvbA==",
          lin: "",
          git: ""
        },
        {
          email: "sse230021008@iiti.ac.in",
          name: "Dodiya Yash Kumar",
          img: DodiyaYashKumar,
          designation: "Member",
          ig: "https://www.instagram.com/yashh__.7?igsh=MWJhZ3lvaWxjMjBlOQ==",
          lin: "https://www.linkedin.com/in/yash-dodiya-416407290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          git: "https://github.com/yashdodiya9"
        },
        {
          email: "sse230021016@iiti.ac.in",
          name: "Siddharth Vezzu",
          img: Siddharthvezzu,
          designation: "Member",
          ig: " https://www.instagram.com/sidvez_6?igsh=MW1pOG1laTd2M2tpZQ==",
          lin: "www.linkedin.com/in/siddharth-vezzu-38652030b",
          git: "https://github.com/SidVez"
        },
        // {
        //   email: "sse230021017@iiti.ac.in",
        //   name: "Gopi Charan",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "https://www.instagram.com/chandunelavalli?igsh=aGxwZzZuOGNlOXF3",
        //   lin: "https://www.linkedin.com/in/gopi-charan-nelavalli-62278728a",
        //   git: "https://github.com/Chandu-08"
        // },
        {
          email: "ee230002019@iiti.ac.in",
          name: "Daksh Chandel",
          img: Dakshchandel,
          designation: "Member",
          ig: "https://www.instagram.com/dc05_buriburi?igsh=MTRmdTZuZjBuYTFhZg==",
          lin: "https://www.linkedin.com/in/daksh-chandel-6a0812298/",
          git: "https://github.com/DC-005"
        },
        {
          email: "msc2303121015@iiti.ac.in",
          name: "Vishrut Pandya",
          img: Vishrutpandya,
          designation: "Member",
          ig: "https://www.instagram.com/following_light_30?igsh=cW1iZGx3azRldjll",
          lin: "",
          git: ""
        },
        // {
        //   email: "atharv.mirashi@iiti.ac.in",
        //   name: "Atharv Mirashi",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },
        // {
        //   email: "harshal.raut@iiti.ac.in",
        //   name: "Harshal Raut",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },
        // {
        //   email: "keerthi@iiti.ac.in",
        //   name: "Keerthi",
        //   img: unknowngirls,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },
        // {
        //   email: "amardeep@iiti.ac.in",
        //   name: "Amar Deep",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },
        // {
        //   email: "katta@iiti.ac.in",
        //   name: "katta Rajat",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },
        // {
        //   email: "souradeep@iiti.ac.in",
        //   name: "souradeep Hazra",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },
       
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
