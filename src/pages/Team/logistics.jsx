import React, { useState } from 'react';
import '../../styles/peoplecard.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  Aman,
  Apoorvsingh,
  ArnavDeshpande,
  DodiyaYashKumar,
  Siddharthvezzu,
  Aaravgupta,
  unknownboys,
  unknowngirls,
  Kartikkambhampati,
  Shreyaggarwal,
  SaiAdithyaMannepalli,
  ChinmayeeKulkarni,
  TanishkaDoiphode,
  YalavarthiUdayasri,
} from '../../assets/team';

function Logistics() {
  const [committee] = useState({
    members: [
      [
        {
          email: 'sse230021005@iiti.ac.in',
          name: 'Arnav Deshpande',
          img: ArnavDeshpande,
          designation: 'Member',
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
          email: 'sse230021008@iiti.ac.in',
          name: 'Dodiya Yash Kumar',
          img: DodiyaYashKumar,
          designation: 'Logistics Lead',
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

        {
          email: 'msc2403121006@iiti.ac.in',
          name: 'Kartik Kambhampati ',
          img: Kartikkambhampati,
          designation: 'Member',
          ig: '',
          lin: 'https://www.linkedin.com/in/kartik-kambhampati?trk=contact-info',
          git: '',
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
        {
          email: 'cse240001044@iiti.ac.in',
          name: 'Sai Adithya Mannepalli',
          img: SaiAdithyaMannepalli,
          designation: 'Member',
          ig: 'https://www.instagram.com/saiadithya_mannepalli?igsh=MXRnMWZnbXRtMTludA%3D%3D&utm_source=qr',
          lin: 'https://www.linkedin.com/in/sai-adithya-m-77b498315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          git: 'https://github.com/night007-hub',
        },
        {
          email: 'ep240051011@iiti.ac.in',
          name: 'Chinmayee Kulkarni',
          img: ChinmayeeKulkarni,
          designation: 'Member',
          ig: '',
          lin: 'www.linkedin.com/in/chinmayee-kulkarni-5451a8299',
          git: 'https://github.com/Chinmayee-k1729',
        },
        {
          email: 'me240003028@iiti.ac.in',
          name: 'Tanishka Doiphode',
          img: TanishkaDoiphode,
          designation: 'Member',
          ig: 'https://www.instagram.com/yupp_its_pari/',
          lin: 'https://www.linkedin.com/in/tanishka-doiphode-0a72a4251/',
          git: 'https://github.com/unraveled-starling/',
        },
        {
          email: 'ee230002085@iiti.ac.in',
          name: 'Yalavarthi Udayasri ',
          img: YalavarthiUdayasri,
          designation: 'Member',
          ig: '',
          lin: 'https://www.linkedin.com/in/yalavarthi-udayasri-b1aa5a2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: '',
        },
        {
          email: 'ce240004032@iiti.ac.in',
          name: 'Manish Kumar',
          img: null,
          designation: 'Member',
          ig: null,
          lin: 'https://www.linkedin.com/in/manish-kumar-7bb887321/',
          git: 'https://github.com/Manish-git-tech',
        },
        {
          email: 'cse230001039@iiti.ac.in',
          name: 'Keshav Singhal',
          img: null,
          designation: 'Member',
          ig: 'https://www.instagram.com/keshav_singhal04?igsh=dHFwOTE1OGlmcWh3',
          lin: 'https://www.linkedin.com/in/keshav-singhal-5814b42b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/keshav-singhal04',
        },
        {
          email: 'sse240021001@iiti.ac.in',
          name: 'Sathvik',
          img: null,
          designation: 'Member',
          ig: 'https://www.instagram.com/sathvik__0557?igsh=MWs4eHVpMzNmZmFkNA==',
          lin: 'https://www.linkedin.com/in/amadala-sathvik-333b7a323',
          git: 'https://github.com/sathvik557',
        },
        {
          email: 'che240008011@iiti.ac.in',
          name: 'Samarth Dhanuka',
          img: null,
          designation: 'Member',
          ig: 'chat_with_sam_07',
          lin: 'https://www.linkedin.com/in/samarth-dhanuka-3927ab316?utm_source=share&utm_campaign=share_via&utm_content=profile',
          git: 'https://github.com/TheRealSam-21',
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

export default Logistics;
