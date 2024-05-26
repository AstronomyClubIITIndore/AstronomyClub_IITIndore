import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import '../../styles/home.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Home() {
  return (
    <>
    
      <div className="Home-encloser1">
      <Navbar/>
      <div className="Home-encloser2"> <div className="Home-heading">Welcome to The Astronomy Club</div></div>
       
      </div>
    </>
  );
}

export default Home;
