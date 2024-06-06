import React from 'react'
import '../../styles/footer.css'

export default function Footer() {
  return (
    <>
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    <footer className="footer-distributed">

        <div className="footer-left">
            <h3>The Astronomy Club</h3>

            {/* <p className="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                |
                <a href="#">Blog</a>
            </p> */}

            <p className="footer-company-name">"Exploring the Infinite: Your Journey to the Stars Begins Here"</p>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span ><a href="https://www.iiti.ac.in/" target='_blank'>Indian Institute of Technology Indore</a></span>
                    Simrol , Madhya Pradesh [453552]</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+91 9458666775</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:astronomyclub@iiti.ac.in">astronomyclub@iiti.ac.in</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About The Club</span>
                <strong>The Astronomy Club</strong> at IIT Indore is a dynamic community passionate about exploring the cosmos. Established to nurture interest in astronomy and space science, the club offers a platform for both beginners and enthusiasts to engage with celestial phenomena
            </p>
            <div className="footer-icons">
                <a href="https://github.com/AstronomyClubIITIndore" target='_blank'><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/astronomyclub_iiti/" target='_blank'><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/the-astronomy-club-iit-indore/mycompany/" target='_blank'> <i className="fab fa-linkedin-in"></i></a>
               
            </div>
        </div>
    </footer>
    <center className='text-white bg-slate-800 font-semibold text-lg p-3'>&copy; Astronomy Club - IIT Indore @2024 . All Rights Reserved</center>
    </>
  )
}
