import React, { useState } from 'react';
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
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
  unknowngirls,
  Kartikkambhampati,
  Shreyaggarwal,
} from '../../assets/team';

function Logistics() {
  const [committee] = useState({
    members: [
      [
        {
          email: 'sse230021005@iiti.ac.in',
          name: 'Arnav Deshpande',
          img: ArnavDeshpande,
          designation: 'Logistics Lead',
          ig: 'https://www.instagram.com/arnav_iamadp?igsh=OG1zbnF3ZTN3djY2',
          lin: 'https://www.linkedin.com/in/arnav-deshpande-26a792290/',
          git: 'https://github.com/Arnavdsp',
        },
        {
          email: 'che230008001@iiti.ac.in',
          name: 'Aarav Gupta',
          img: Aaravgupta,
          designation: 'Member',
          ig: 'https://www.instagram.com/aaravgupta025?igsh=MWVxeGFxdmF2YmJhZQ==',
          lin: 'https://www.linkedin.com/in/aarav-gupta-0574192a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/aaravgupta026',
        },
        {
          email: 'sse230021001@iiti.ac.in',
          name: 'Aman Choudhary',
          img: Aman,
          designation: 'Member',
          ig: 'https://www.instagram.com/aman_choudhary2385?igsh=dDlpMzE2bHJwZWd0',
          lin: 'https://www.linkedin.com/in/aman-undefined-b55239293/',
          git: 'https://github.com/Aman-hub15',
        },
        {
          email: 'sse230021004@iiti.ac.in',
          name: 'Apoorv Singh',
          img: Apoorvsingh,
          designation: 'Member',
          ig: 'https://www.instagram.com/_apoorv.s__07?igsh=MTc5enk1c2s4dTk4aw==',
          lin: 'https://www.linkedin.com/in/apoorv-singh-18758b287',
          git: 'https://github.com/Ap00rv-1',
        },

        {
          email: 'sse230021010@iiti.ac.in',
          name: 'N Kaveri',
          img: Kaveri,
          designation: 'Member',
          ig: 'https://www.instagram.com/itz_kaveriiii?igsh=MWFuM2Q0OXJ6bWJvbA==',
          lin: 'https://www.linkedin.com/in/kaveri-neeli-a97373289/',
          git: 'https://github.com/Kaveri1950',
        },
        {
          email: 'sse230021008@iiti.ac.in',
          name: 'Dodiya Yash Kumar',
          img: DodiyaYashKumar,
          designation: 'Member',
          ig: 'https://www.instagram.com/yashh__.7?igsh=MWJhZ3lvaWxjMjBlOQ==',
          lin: 'https://www.linkedin.com/in/yash-dodiya-416407290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/yashdodiya9',
        },
        {
          email: 'sse230021016@iiti.ac.in',
          name: 'Siddharth Vezzu',
          img: Siddharthvezzu,
          designation: 'Member',
          ig: ' https://www.instagram.com/sidvez_6?igsh=MW1pOG1laTd2M2tpZQ==',
          lin: 'www.linkedin.com/in/siddharth-vezzu-38652030b',
          git: 'https://github.com/SidVez',
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
        // {
        //   email: 'ee230002019@iiti.ac.in',
        //   name: 'Daksh Chandel',
        //   img: Dakshchandel,
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/dc05_buriburi?igsh=MTRmdTZuZjBuYTFhZg==',
        //   lin: 'https://www.linkedin.com/in/daksh-chandel-6a0812298/',
        //   git: 'https://github.com/DC-005',
        // },
        // {
        //   email: 'msc2303121015@iiti.ac.in',
        //   name: 'Vishrut Pandya',
        //   img: Vishrutpandya,
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/following_light_30?igsh=cW1iZGx3azRldjll',
        //   lin: '',
        //   git: '',
        // },
        // {
        //   email: 'ms2404121004@iiti.ac.in',
        //   name: 'Ankur Sinha',
        //   img: 'https://drive.google.com/open?id=1QYqI7GGCkqya8_cYslb__ZEPVW5L2aQw',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/ankuranium/',
        //   lin: 'www.linkedin.com/in/ankur-sinha-096a85149',
        //   git: ''
        // },
        // {
        //   email: 'sse240021010@iiti.ac.in',
        //   name: 'Manish kumawat',
        //   img: 'https://drive.google.com/file/d/1W4NaQJKqOboDurf9vA9dwLSx2fABzl2M/view?usp=drivesdk',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/manishkumawat0412?igsh=aDE0OGplamZ0MmRj',
        //   lin: 'https://www.linkedin.com/in/manish-kumawat-b7139631a',
        //   git: 'https://github.com/manishkumawat14128'
        // },
        // {
        //     email: 'ms2404121003@iiti.ac.in',
        //     name: 'RIYA',
        //     img: 'https://drive.google.com/open?id=1nCjGka6fBKNHidSzvUMVfE_mCQX6EH3Q',
        //     designation: 'Member',
        //     ig: '',
        //     lin: '',
        //     git: ''
        // },
        // {
        //   email: 'ms2404121002@iiti.ac.in',
        //   name: 'Riddhi Srivastava ',
        //   img: 'https://drive.google.com/open?id=1blpVSM-uU9G4CZkT-ikDRIyCyVGzHoUU',
        //   designation: 'Member',
        //   ig: '@riddhi.srivastava._',
        //   lin: 'https://www.linkedin.com/in/riddhi-srivastava-0a9130218/',
        //   git: 'https://github.com/Riddhisri2704'
        // },
        // {
        //   email: 'ms2404121001@iiti.ac.in',
        //   name: 'Yash Raj',
        //   img: 'https://drive.google.com/open?id=1DDtBjXh-GgTgUo9Y5rpegxWBKTX90xDa',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/curious_explorer_/',
        //   lin: 'https://www.linkedin.com/in/yash-raj-0a4a321b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: ''
        // },
        {
          email: 'msc2403121006@iiti.ac.in',
          name: 'Kartik Kambhampati ',
          img: Kartikkambhampati,
          designation: 'Member',
          ig: '',
          lin: 'https://www.linkedin.com/in/kartik-kambhampati?trk=contact-info',
          git: ''
        },
        {
          email: 'sse240021017@iiti.ac.in',
          name: 'Shrey Aggarwal ',
          img: Shreyaggarwal,
          designation: 'Member',
          ig: 'https://www.instagram.com/shrey_aggarwal021?igsh=M2QwNTQxcmdmdG44',
          lin: 'https://www.linkedin.com/in/shrey-aggarwal-92154732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/Shrey-codin',
        },
        //  {
        //   email: 'msc2403121009@iiti.ac.in',
        //   name: 'Nityananda Padhi',
        //   img: 'https://drive.google.com/open?id=1F9Ge8MMWe7-q_NFZ-pS1jmncR7dV0jBE',
        //   designation: 'Member',
        //   ig: '',
        //   lin: '',
        //   git: ''
        // },
        //  {
        //   email: 'msc2403121012@iiti.ac.in',
        //   name: 'Sangeetha A',
        //   img: 'https://drive.google.com/open?id=1KGwTDw1sRhaCiC5tA-bSZKYy-KhMZq8l',
        //   designation: 'Member',
        //   ig: '',
        //   lin: '',
        //   git: ''
        // },
        // {
        //   email: 'sse240021003@iiti.ac.in',
        //   name: 'Apurva Dinesh Chipte ',
        //   img: 'https://drive.google.com/open?id=12II6QLcrAzxTYQ5ZS3_MTu9nQuG6wlAS',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/a_purva.1011?igsh=MWZiMGtjNml1cGg0dw==',
        //   lin: 'https://www.linkedin.com/in/apurva-chipte-a1645531b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: 'https://github.com/ApurvaChipte'
        // },
        // {
        //   email: 'sse240021001@iiti.ac.in',
        //   name: 'A.sathvik',
        //   img: 'https://drive.google.com/open?id=1CD1oe11Br64bXpMqGIBP0ToXzZ0wzNpB',
        //   designation: 'Member',
        //   ig: '',
        //   lin: '',
        //   git: ''
        // },
        // {
        //   email: 'sse240021002@iiti.ac.in',
        //   name: 'Ananya Shubhangi Sinha ',
        //   img: 'https://drive.google.com/open?id=1M2dhZl2bYeRZF1sKRufwbQqp_ndcu4JP',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/ananyassinha?igsh=c2FyNnZwYWF6cnl1',
        //   lin: 'linkedin.com/in/ananya-sinha-1721ba327',
        //   git: 'https://github.com/ananya04052006'
        // },
          
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

export default Logistics;
