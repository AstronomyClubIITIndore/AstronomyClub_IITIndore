import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/team.css';
import '../../styles/peoplecard.css';
import Footer from '../../components/Footer/Footer';
import Webdev from './webdev';
import Logistics from './logistics';
import Magazine from './magazine';
import Merch from './merch';
import Outreach from './outreach';
import Alumni from './alumni';
import Clubhead from './clubhead';

function Team() {

  return (
    <>
      <div className="Team-encloser1">
        <Navbar />
      </div>
			<center className='TeamName'>Club Head</center>
			<Clubhead />
			<center className='TeamName'>Logistics + KV + Stargazing</center>
			<Logistics />
			 <center className='TeamName'>Web Development Team</center>
			<Webdev />
			<center className='TeamName'>Magazine</center>
			<Magazine />
			<center className='TeamName'>Merch</center>
			<Merch />
			<center className='TeamName'>Outreach & social media</center>
			<Outreach />
			<center className='TeamName'>Alumni</center>
			<Alumni />
      <Footer />
    </>
  );
}

export default Team;
