import React, { useState } from 'react';
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Parulpahurkar } from '../../assets/team';
import { Anuvab } from '../../assets/team';

function Clubhead() {
  const [committee] = useState({
    members: [
      [
        {
          email: 'sse230021011@iiti.ac.in',
          name: 'Parul Pahurkar',
          img: Parulpahurkar,
          designation: 'Club Head',
          ig: 'https://www.instagram.com/ppahurkar21/',
          lin: 'https://www.linkedin.com/in/parul-pahurkar-9b2b2a2b9/',
          git: '',
        },
        {
          email: 'sse230021003@iiti.ac.in',
          name: 'Anuvab Mandal',
          img: Anuvab,
          designation: 'Club Co-Head + Merch Treasurer',
          ig: 'https://www.instagram.com/itzz.mandal?igsh=dml3YzBrcGN0NnRn',
          lin: 'https://in.linkedin.com/in/anuvab-mandal-366a83307',
          git: 'https://github.com/mandal0204',
        },
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

export default Clubhead;
