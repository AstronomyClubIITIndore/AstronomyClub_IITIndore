import React, { useState } from 'react';
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  Parulpahurkar,
  Anjanayae,
  Anuvab,
  //   Dhritijha,
  Sidhwatanuj,
  Sibasishbarik,
  unknownboys,
  Deveshsharma,
  Aryanbhake,
  Parthkothari,
  NisargRathod,
  Eknoorkaur,
} from '../../assets/team';

function Magazine() {
  const [committee] = useState({
    members: [
      [
        {
          email: 'msc2303121008@iiti.ac.in',
          name: 'Devesh Sharma',
          img: Deveshsharma,
          designation: 'Magazine Lead',
          ig: 'https://www.instagram.com/ezdevesh?igsh=MW54enJkOWh6aWg2YQ==',
          lin: 'https://www.linkedin.com/in/devesh-sharma-539a03207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/ezdevesh',
        },
        {
          email: 'sse230021014@iiti.ac.in',
          name: 'Rathod Nisarg Bipinbhai',
          img: NisargRathod,
          designation: 'Member',
          ig: 'https://www.instagram.com/nisarg._.21/',
          lin: 'https://in.linkedin.com/in/nisarg-rathod-257265293',
          git: 'https://github.com/Nisarg2106',
        },
        {
          email: 'sse230021002@iiti.ac.in',
          name: 'Anjanayae Chaurasia',
          img: Anjanayae,
          designation: 'Member',
          ig: 'https://www.instagram.com/anjanayae_chaurasia?igsh=MTAzeW03eTBlbDdn',
          lin: 'https://www.linkedin.com/in/anjanayae-chaurasia-054615280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/Anjanayae',
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
        // {
        //   email: "sse230021007@iiti.ac.in",
        //   name: "Dhriti Jha",
        //   img: Dhritijha,
        //   designation: "Member",
        //   ig: "",
        //   lin: "https://www.linkedin.com/in/dhriti-jha-75bbb9285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        //   git: ""
        // },
        {
          email: 'me230003073@iiti.ac.in',
          name: 'Tanuj Sidhwa',
          img: Sidhwatanuj,
          designation: 'Member',
          ig: 'https://www.instagram.com/tanuj_sidhwa/',
          lin: 'https://www.linkedin.com/in/tanuj-sidhwa/',
          git: 'https://github.com/tanuj-sidhwa',
        },
        {
          email: 'ce230004044@iiti.ac.in',
          name: 'Sibasish Barik',
          img: Sibasishbarik,
          designation: 'Member',
          ig: 'https://www.instagram.com/sibasish_barik22/',
          lin: 'www.linkedin.com/in/sibasish-barik-9b7b37259',
          git: 'https://github.com/sibasish-b22git',
        },
        // {
        //   email: "tejas.rajuskar@iiti.ac.in",
        //   name: "Tejas Rajuskar",
        //   img: unknownboys,
        //   designation: "Member",
        //   ig: "",
        //   lin: "",
        //   git: ""
        // },

        // {
        //   email: 'msc2303121005@iiti.ac.in',
        //   name: 'Aryan Bhake',
        //   img: Aryanbhake,
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/aryan.bhake01?igsh=a3hjM3o3NmxoNnQx',
        //   lin: 'https://www.linkedin.com/in/aryan-bhake-234a912bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: '',
        // },
        // {
        //   email: 'msc2303121012@iiti.ac.in',
        //   name: 'Parth Kothari',
        //   img: Parthkothari,
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/pathlab_963?igsh=dGFiY2w5cDdkb211',
        //   lin: 'https://www.linkedin.com/in/parth-kothari-694b9a26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: '',
        // },
        // {
        //   email: 'sse240021006@iiti.ac.in',
        //   name: 'Gujjala Mohit Sasi Chandra',
        //   img: 'https://drive.google.com/open?id=1Myq3E0SbwLhbCpwqOmxHerp0Ctsvw0-t',
        //   designation: 'Member',
        //   ig: '',
        //   lin: '',
        //   git: ''
        // },
        // {
        //   email: 'sse240021011@iiti.ac.in',
        //   name: 'Patel Devki ',
        //   img: 'https://drive.google.com/open?id=19jVgnA0aG5ASmMmbxlhMi849i83T_xRS',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/devki.164?igsh=MWM1bXZsd2hibXlvYQ==',
        //   lin: 'https://www.linkedin.com/in/devki-patel-777b54323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: 'https://github.com/Devki164'
        // },
        {
          email: 'mt2402121003@iiti.ac.in',
          name: 'Eknoor Kaur ',
          img: Eknoorkaur,
          designation: 'Member',
          ig: 'https://www.instagram.com/photography_martian.ek?igsh=cHpzdjg5YnVpcmll&utm_source=qr',
          lin: 'https://www.linkedin.com/in/eknoor-kaur-aa79631bb',
          git: ''
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

export default Magazine;
