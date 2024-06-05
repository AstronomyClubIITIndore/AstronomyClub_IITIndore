import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Astronomylogo from "../../assets/hero/newlogo.png";
import iitilogo from "../../assets/hero/iitindorelogo-removebg-preview.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.clubname}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src={Astronomylogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                
                height: "14vh",
                backgroundColor: "transparent",
              }}
            />
          </a>
        </div>
        <div style={{ margin: "1vh 2vw",textAlign:"center" }}>
          <a
            href="/"
            style={{
              fontSize: "min(8vw,60px)",
              // fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              fontFamily:"Trebuchet MS",
             
              
            }}
          >
            The Astronomy Club IIT Indore
          </a>
        </div>
        <div>
          <a href="https://www.iiti.ac.in/" target="_blank">
            <img
              src={iitilogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                // width: "65px",
                height: "12vh",
                backgroundColor: "transparent",
                // borderRadius:"50%",
                
              
              }}
            />
          </a>
        </div>
      </div>

      <div className={styles.navbar}>
        <div
          className={`${styles.topnav} ${
            isResponsive ? styles.responsive : styles.nonresponsive
          }`}
          id="myTopnav"
        >
          <Link to="/">
            <i
              className="fa-solid fa-house"
              style={{ marginRight: "0.5rem" }}
            ></i>
            HOME
          </Link>
          <Link to="/aboutus">
            <i
              className="fa-solid fa-circle-info"
              style={{ marginRight: "0.5rem" }}
            ></i>
            ABOUT US
          </Link>
          <Link to="/projects">
            <i
              className="fa-solid fa-hammer"
              style={{ marginRight: "0.5rem" }}
            ></i>
            PROJECTS
          </Link>
          <Link to="/news">
            <i
              className="fa-solid fa-newspaper"
              style={{ marginRight: "0.5rem" }}
            ></i>
            NEWS
          </Link>
          <Link to="/activities">
            <i
              className="fa-solid fa-globe"
              style={{ marginRight: "0.5rem" }}
            ></i>
            ACTIVITIES
          </Link>
          <Link to="/team">
            {" "}
            <i
              className="fa-solid fa-people-group"
              style={{ marginRight: "0.5rem" }}
            ></i>
            TEAM
          </Link>

          <a
            href="javascript:void(0);"
            className={styles.icon}
            onClick={handleToggle}
          >
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
