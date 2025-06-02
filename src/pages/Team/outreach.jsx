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
  Anushka,
  Princekumar,
  Srujanapatil,
  Subhanshukumar,
  Triptianand,
  Vedansh,
  pranjal,
  unknownboys,
  unknowngirls,
  PaawniGulati,
  Reethika,
  SasidharChintala,
  SakshyaSinghKasera,
  BhumikaKumari
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
        //new members...
        {
          email: 'sse240021018@iiti.ac.in',
          name: 'Srujana Patil',
          img: Srujanapatil,
          designation: 'Member',
          ig: 'https://www.instagram.com/srujanapatil8/',
          lin: 'https://www.linkedin.com/in/srujana-patil-620677324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: '',
        },
        {
          email: 'sse240021019@iiti.ac.in',
          name: 'Subhanshu Kumar ',
          img: Subhanshukumar,
          designation: 'Member',
          ig: 'https://www.instagram.com/subhansh_1u493?igsh=YmlwNXlibnhkdWVu',
          lin: 'https://www.linkedin.com/in/subhanshu-kumar-82a28432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/Subhansh-1-u',
        },
        {
          email: 'me240003052@iiti.ac.in',
          name: 'Paawni Gulati ',
          img: PaawniGulati,
          designation: 'Member',
          ig: 'https://www.instagram.com/paawnigulati',
          lin: 'https://www.linkedin.com/in/paawni-gulati-65200331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/paani137',
        },
        {
          email: 'me230003085@iiti.ac.in',
          name: 'Reethika',
          img: Reethika,
          designation: 'Member',
          ig: '',
          lin: '',
          git: '',
        },
        {
          email: 'me240003023@iiti.ac.in',
          name: 'Sasidhar Chintala',
          img: SasidharChintala,
          designation: 'Member',
          ig: 'https://www.instagram.com/sayit._sd_?igsh=dmZ4bHRraWs4MTZ6',
          lin: 'https://www.linkedin.com/in/sasidhar-chintala-2bb3b5321/',
          git: 'https://github.com/sasidhar-chintala',
        },
        {
          email: 'sse240021015@iiti.ac.in',
          name: 'Sakshya Singh Kasera',
          img: SakshyaSinghKasera,
          designation: 'Member',
          ig: 'https://www.instagram.com/sakshya_ssk?igsh=ZXpsNzNxd3l0ZzVl',
          lin: 'https://www.linkedin.com/in/sakshya-singh-kasera-33a21531a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          git: 'https://github.com/Sakshya2504',
        },
        {
          email: 'ep240051006@iiti.ac.in',
          name: 'Bhumika Kumari',
          img: BhumikaKumari,
          designation: 'Member',
          ig: 'https://www.instagram.com/bhumi_675_ka?igsh=dHNlMms5dWczOWx6',
          lin: 'https://www.linkedin.com/in/bhumika-kumari957b832a',
          git: 'https://github.com/bhumi21005',
        },
        // {
        //   email: 'sse240021015@iiti.ac.in',
        //   name: 'Sakshya Singh Kasera ',
        //   img: 'https://drive.google.com/open?id=1kYhkxzwG-LaJDAyzwault1sj99a9xEGc',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/sakshya_ssk?igsh=ZXpsNzNxd3l0ZzVl',
        //   lin: 'https://www.linkedin.com/in/sakshya-singh-kasera-33a21531a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        //   git: 'https://github.com/Sakshya2504'
        // },
        // {
        //   email: 'sse240021012@iiti.ac.in',
        //   name: 'Pritish Dutta',
        //   img: 'https://drive.google.com/open?id=1oyNQ2phbz_FPOk51vAHbBnxFXH53D9FT',
        //   designation: 'Member',
        //   ig: 'https://www.instagram.com/pritisshhhhh_?igsh=OGQ5ZDc2ODk2ZA==',
        //   lin: 'https://www.linkedin.com/in/pritish-dutta-854a082b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        //   git: 'https://github.com/iprtdh'
        // },

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
