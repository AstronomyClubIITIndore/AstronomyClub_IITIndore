import React, { useState } from 'react';
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  Dikshitsuthar,
  Ayushkhadkekar,
  Atharvaporwal,
  Abhishekap,
  Vandannagori,
  Sarangthakare,
} from '../../assets/team';

function Webdev() {
  const [committee] = useState({
    members: [
      [
        {
          email: 'mems220005019@iiti.ac.in',
          name: 'Dikshit Suthar',
          img: Dikshitsuthar,
          designation: 'Member',
          ig: 'https://www.instagram.com/dikshit_suthar_57/',
          lin: 'https://www.linkedin.com/in/dikshit-suthar-289459250/?originalSubdomain=in',
          git: 'https://github.com/Dikshitsuthar',
        },

        {
          email: 'ee220002022@iiti.ac.in',
          name: 'Ayush Khadkekar',
          img: Ayushkhadkekar,
          designation: 'Member',
          ig: 'https://www.instagram.com/ayush_khadkekar',
          lin: 'https://www.linkedin.com/in/ayush-khadkekar-b20809279/?originalSubdomain=in',
          git: 'https://github.com/ayushkhadkekar3462',
        },
        {
          email: 'mems220005015@iiti.ac.in',
          name: 'Atharva Porwal',
          img: Atharvaporwal,
          designation: 'Member',
          ig: 'https://www.instagram.com/atharv_porwal_?igsh=MXJtczdlbTQ0dDl4aw==',
          lin: 'https://www.linkedin.com/in/atharva-porwal-285412258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/AtharvaPorwal',
        },

        {
          email: 'Mems220005001@iiti.ac.in',
          name: 'Abhishek AP',
          img: Abhishekap,
          designation: 'Member',
          ig: 'https://www.instagram.com/abhiap2004/?hl=en',
          lin: 'https://www.linkedin.com/in/abhishek-a-p-66104425b/',
          git: 'https://github.com/Abhiap2004',
        },
        {
          email: 'sse230021020@iiti.ac.in',
          name: 'Vandan Nagori',
          img: Vandannagori,
          designation: 'Web Development Lead',
          ig: 'https://www.instagram.com/vandan__nagori1423?igsh=bXo4MndwNDByc2c%3D&utm_source=qr',
          lin: 'https://www.linkedin.com/in/vandan-nagori-140a132b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          git: 'https://github.com/Vandan1423',
        },
        // {
        //   email: 'sse240021008@iiti.ac.in',
        //   name: 'Kartikey Raghav ',
        //   img: 'https://drive.google.com/open?id=1jLvPhKPmdOz93NdMHRuGKKgLI7cfEiAS',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/normallysmoooth?igsh=MXI1NGU4a3k2aGFzZw==',
        //   lin: 'https://in.linkedin.com/in/kartikey-raghav-ab852a260',
        //   git: 'https://github.com/KartikeyRaghav'
        // },
        // {
        //   email: 'msc2403121001@iiti.ac.in',
        //   name: 'Aditya Prakash Sharma ',
        //   img: 'https://drive.google.com/open?id=1RQjk6PSsZYkJfhNmdPHy8hUxH-IJhRRs',
        //   designation: 'Member',
        //   ig: '',
        //   lin: 'https://www.linkedin.com/in/aditya-prakash-sharma-055a522b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: ''
        // },
        // {
        //   email: 'msc2403121007@iiti.ac.in',
        //   name: 'Manpreet Singh',
        //   img: 'https://drive.google.com/open?id=16w8PnDvPgkwBk7iDEyPjwIZ9cvSwwK32',
        //   designation: 'Member',
        //   ig: '',
        //   lin: 'https://www.linkedin.com/in/manpreet-singh-57395722a/',
        //   git: ''
        // },
        // {
        //   email: 'sse240021005@iiti.ac.in',
        //   name: 'chakrapani',
        //   img: 'https://drive.google.com/open?id=1efgFmgkUQIqvkKFztCBQyhpiCXcrCOHM',
        //   designation: 'Member',
        //   ig: '',
        //   lin: '',
        //   git: ''
        // },
        // {
        //   email: 'mt2402121005@iiti.ac.in',
        //   name: 'Ritvik Genugula',
        //   img: 'https://drive.google.com/open?id=1Mrstpq9SrAQYAvLJeaYX-f5C17-CdioW',
        //   designation: 'Member',
        //   ig: '',
        //   lin: '',
        //   git: ''
        // },
        {
          email: 'cse240001065@iiti.ac.in',
          name: 'Sarang Thakare',
          img: Sarangthakare,
          designation: 'Member',
          ig: '-',
          lin: 'https://in.linkedin.com/in/sarang-thakare-101866229',
          git: 'https://github.com/SarangVT'
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

export default Webdev;
