import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Astronomylogo from "../../assets/Astronomylogo.png";
import iitilogo from "../../assets/iitilogo.png";
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
                width: "65px",
                height: "50px",
                backgroundColor: "transparent",
              }}
            />
          </a>
        </div>
        <div style={{ margin: "1vh 2vw" }}>
          <a
            href="/"
            style={{
              fontSize: "6vh",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          >
            Astronomy Club - IIT Indore
          </a>
        </div>
        <div>
          <a href="https://www.iiti.ac.in/" target="_blank">
            <img
              src={iitilogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                width: "65px",
                height: "50px",
                backgroundColor: "transparent",
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
            Home
          </Link>
          <Link to="/aboutus">
            <i
              className="fa-solid fa-circle-info"
              style={{ marginRight: "0.5rem" }}
            ></i>
            About us
          </Link>
          <Link to="/projects">
            <i
              className="fa-solid fa-hammer"
              style={{ marginRight: "0.5rem" }}
            ></i>
            Projects
          </Link>
          <Link to="/news">
            <i
              className="fa-solid fa-newspaper"
              style={{ marginRight: "0.5rem" }}
            ></i>
            News
          </Link>
          <Link to="/activities">
            <i
              className="fa-solid fa-globe"
              style={{ marginRight: "0.5rem" }}
            ></i>
            Activities
          </Link>
          <Link to="/team">
            {" "}
            <i
              className="fa-solid fa-people-group"
              style={{ marginRight: "0.5rem" }}
            ></i>
            Team
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
