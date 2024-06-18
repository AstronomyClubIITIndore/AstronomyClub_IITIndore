import React , { useState }  from 'react'
import '../../styles/peoplecard.css';
import {FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import {
  Dikshitsuthar,
  Ayushkhadkekar,
  Atharvaporwal,
  Abhishekap,
  Vandannagori,
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
          ig: "https://www.instagram.com/ayush_khadkekar",
          lin: "https://www.linkedin.com/in/ayush-khadkekar-b20809279/?originalSubdomain=in",
          git : "https://github.com/ayushkhadkekar3462"
        },
        {
          email: "mems220005015@iiti.ac.in",
          name: "Atharva Porwal",
          img: Atharvaporwal,
          designation: "Member",
          ig: "https://www.instagram.com/atharv_porwal_?igsh=MXJtczdlbTQ0dDl4aw==",
          lin: "https://www.linkedin.com/in/atharva-porwal-285412258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          git : "https://github.com/AtharvaPorwal"
        },
      
        {
          email: "Mems220005001@iiti.ac.in",
          name: "Abhishek AP",
          img: Abhishekap,
          designation: "Member",
          ig: "https://www.instagram.com/abhiap2004/?hl=en",
          lin: "https://www.linkedin.com/in/abhishek-a-p-66104425b/",
          git : "https://github.com/Abhiap2004"
        },
        {
          email: "sse230021020@iiti.ac.in",
          name: "Vandan Nagori",
          img: Vandannagori,
          designation: "Member",
          ig: "https://www.instagram.com/vandan__nagori1423?igsh=bXo4MndwNDByc2c%3D&utm_source=qr",
          lin: "https://www.linkedin.com/in/vandan-nagori-140a132b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          git : "https://github.com/Vandan1423"
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
