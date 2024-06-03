import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import '../../styles/home.css'
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/hero/hero";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Home() {
  return (
    <>
    
      <div className="Home-encloser1">
      <Navbar/>
      </div>
      <Hero/>
      <Footer/>
    </>
  );
}

export default Home;
