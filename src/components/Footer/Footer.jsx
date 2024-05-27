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
                <p><span>Indian Institute of Technology Indore</span>
                    Simrol,Madhya Pradesh</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+91 0000000000</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About The Club</span>
                <strong>The Astronomy Club</strong> at IIT Indore is a dynamic community passionate about exploring the cosmos. Established to nurture interest in astronomy and space science, the club offers a platform for both beginners and enthusiasts to engage with celestial phenomena
            </p>
            <div className="footer-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </footer>
    </>
  )
}
