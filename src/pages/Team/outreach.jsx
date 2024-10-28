import React, { useState } from 'react';
import '../../styles/peoplecard.css';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
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
} from '../../assets/team';

function Outreach() {
  const [committee] = useState({
    members: [
      [
        {
          email: 'me230003086@iiti.ac.in',
          name: 'Vedansh Shrivastava',
          img: Vedansh,
          designation: 'Outreach Lead',
          ig: 'https://www.instagram.com/velvet_vibzz?igsh=MTFyeW9mc2ZoZXVkag==',
          lin: 'https://www.linkedin.com/in/explorerr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: '',
        },
        {
          email: 'pranjal@iiti.ac.in',
          name: 'Pranjal chaturvedi',
          img: pranjal,
          designation: 'member',
          ig: '',
          lin: 'https://www.linkedin.com/in/pranjal-chaturvedi-564630149',
          git: '',
        },
        {
          email: 'ep230051001@iiti.ac.in',
          name: 'Aarushi Singh',
          img: Aarushisingh,
          designation: 'Member',
          ig: 'https://www.instagram.com/aarushis_06/?next=%2F',
          lin: 'https://www.linkedin.com/in/aarushi-singh-67246b294/',
          git: 'https://github.com/Amberss-Log',
        },
        {
          email: 'ep230051013@iiti.ac.in',
          name: 'Prince Kumar',
          img: Princekumar,
          designation: 'Member',
          ig: 'https://www.instagram.com/prince.__.kumar',
          lin: 'https://www.linkedin.com/in/k07prince?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/Princekumarofficial',
        },
        {
          email: 'me230003007@iiti.ac.in',
          name: 'Anshul Gaharwal',
          img: Anshulgaharwal,
          designation: 'Member',
          ig: '',
          lin: 'https://www.linkedin.com/in/anshul-gaharwal-73ba62288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: '',
        },
        {
          email: 'cse230001078@iiti.ac.in',
          name: 'Tripti Anand',
          img: Triptianand,
          designation: 'Member',
          ig: '',
          lin: ' https://www.linkedin.com/in/tripti-anand-a01a5a299/',
          git: '',
        },

        {
          email: 'msc2303121004@iiti.ac.in',
          name: 'Anushka Agarwal',
          img: Anushka,
          designation: 'Member',
          ig: 'https://www.instagram.com/anushkaagarwal2104?igsh=MWw2YzBtNjh0cGZ3cw==',
          lin: 'https://www.linkedin.com/in/anushka-agarwal-967223289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/anushkaagarwal21',
        },
        // {
        //   email: "msc2303121003@iiti.ac.in",
        //   name: "Annie Chandrika",
        //   img: unknowngirls,
        //   designation: "Member",
        //   ig: "https://www.instagram.com/annie.chandrika?igsh=ZDBsdmY0b3czZjBt",
        //   lin: "",
        //   git: ""
        // },
        // {
        //   email: "msc2303121007@iiti.ac.in",
        //   name: "Daisy Boro",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "https://www.instagram.com/daisy.boro.50?igsh=MWNlejMwNnpmb2ViaA==",
        //   lin: "https://www.linkedin.com/in/daisy-boro-0a772328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        //   git: ""
        // },
      ],
    ],
  });

  const renderPersonCard = (person, idx) => (
    <div key={idx} className="personCard">
      <img src={person.img} alt={person.name} className="pdp" />
      <div className="personCardBody font-ubuntu">
        <h4 className="font-acme" style={{ color: '#34639D' }}>
          {person.name}
        </h4>
        <h5 className="font-acme" style={{ color: 'rgb(54, 54, 54)' }}>
          {person.designation}
        </h5>
        <p>
          <a href={'mailto:' + person.email} className="mailId">
            {person.email}
          </a>
        </p>
        {/* {person.land && <p>{person.land + " (" + person.extn + ")"}</p>}
       {person.phno && (
         <p>
           <a href={"tel:" + person.phno}>{person.phno}</a>
         </p>
       )} */}
        <p className="icons">
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
  );

  return (
    <>
      <div className="container-fluid">
        {committee.members.flat().map(renderPersonCard)}
      </div>
    </>
  );
}

export default Outreach;
