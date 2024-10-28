import React, { useState } from 'react';
import Team from './Team'; // Adjust the import path as needed
import {
  Aaravgupta,
  Aarushisingh,
  Abhishekap,
  Aman,
  Anjanayae,
  Anshulgaharwal,
  Anushka,
  Anuvab,
  Apoorvsingh,
  Aryanbhake,
  Atharvaporwal,
  Ayushkhadkekar,
  Dakshchandel,
  Deveshsharma,
  //   Dhritijha,
  Hrishikesh,
  Jaisurya,
  Kaveri,
  Kumaranmol,
  Parthkothari,
  Parulpahurkar,
  Prempratik,
  Princekumar,
  Sibasishbarik,
  Siddharthvezzu,
  Sidhwatanuj,
  //   Srinivasgopi,
  Triptianand,
  Vandannagori,
  Vedansh,
  Vishrutpandya,
} from '../../assets/team'; // Adjust the import path as needed

const People = ({ index }) => {
  const [committee2] = useState({
    title: "Students' International Relations Cell",
    members: [
      [
        {
          email: 'me210003018@iiti.ac.in',
          name: 'Aaravgupta',
          phno: '+91 7263931615',
          img: Aaravgupta,
          designation: 'Head',
        },
      ],
      [
        {
          heading: 'Coordinators',
          email: 'ce220004004@iiti.ac.in',
          name: 'Agrim Jain',
          phno: '+91 9811085456',
          img: Aarushisingh,
          designation: 'Opportunities Team',
        },
        // {
        //   email: "ee220002068@iiti.ac.in",
        //   name: "Rakshit Jangid",
        //   phno: "+91 8849463566",
        //   img: Dhritijha,
        //   designation: "International Relations Team",
        // },
      ],
      [
        {
          email: 'msc2203171012@iiti.ac.in',
          name: 'Mohini',
          phno: '+91 9667033160',
          img: Anshulgaharwal,
          designation: 'Outreach Team',
        },
        {
          email: 'ce210004041@iiti.ac.in',
          name: 'Sai Krishna Akash Ramineni',
          phno: '+91 6301133526',
          img: Kumaranmol,
          designation: 'Web Team',
        },
      ],
    ],
  });

  return (
    <div className="container-fluid">
      {index === 1 &&
        committee2.members
          .flat()
          .map((person, idx) => <Team key={idx} person={person} />)}
    </div>
  );
};

export default People;
