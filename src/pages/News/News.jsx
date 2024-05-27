import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import '../../styles/news.css'
import Footer from "../../components/Footer/Footer";

function News() {
  return (
    <>
    
      <div className="News-encloser1">
      <Navbar/>
      <div className="News-encloser2"> <div className="News-heading">News from The Astronomy Club</div></div>
       
      </div>
      <Footer/>
    </>
  );
}

export default News;

