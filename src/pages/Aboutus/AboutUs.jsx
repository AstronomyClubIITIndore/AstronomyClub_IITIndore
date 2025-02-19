import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/about.css';
import Footer from '../../components/Footer/Footer';
import { keshav } from '../../assets/team';

function AboutUs() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <div className="encloser1">
        <Navbar />
        <div className="encloser2">
          {' '}
          <div className="heading"> About The Astronomy Club...</div>
        </div>
      </div>
      <div className="vision">
        <div
          className="card"
          style={{
            border: 'none',
            borderRadius: '0px',
          }}
        >
          <h5 className="card-header" id="header1">
            Our Vision
          </h5>
          <div className="card-body" id="body1">
            {/* <h5 className="card-title">Special title treatment</h5> */}
            <p className="card-text">
              Welcome to the Astronomy Club, a hub for curiosity, discovery, and
              a shared love for the cosmos! Our goal is to connect students,
              faculty, and space enthusiasts in a journey to uncover the
              mysteries of the universe. Whether you’re a seasoned observer or
              just starting to gaze at the stars, this is the place for you. We
              offer interesting activities and engage the visitors about the
              wonders of space. Such activities range from stargazing nights
              with amazing views to dynamic discussions of space exploration and
              cosmic phenomena- there's something exciting always on the horizon
              here. Curious about the big questions—like the nature of black
              holes, the chances of life beyond Earth, or how the universe
              began? This club is your platform to explore, share insights, and
              grow alongside a community of like-minded enthusiasts. Every idea
              sparks a new perspective, and every perspective fuels our
              collective curiosity. Let's journey through the stars together,
              new wonders, and each other to think beyond the horizons. Your
              passion and imagination make this club so extraordinary. Keep
              looking up and dreaming big!
            </p>
          </div>
        </div>
      </div>
      <div
        className="messagetitle"
        style={{
          border: 'none',
        }}
      >
        <div
          className="card"
          style={{
            borderRadius: '0px',

            border: 'none',
          }}
        >
          <h5
            className="card-header"
            id="header1"
            style={{
              marginTop: '0px',
              paddingTop: '10px',
              paddingBottom: '10px',
              border: 'none',
            }}
          >
            Message from the Club Head
          </h5>
        </div>
      </div>
      <div className="message">
        <div className="photo">
          <img className="image1" src={keshav} alt="..." />
        </div>
        <div className="content">
          Welcome to the Astronomy Club of IIT Indore! <br />
          At the Astronomy Club, we are driven by an unending curiosity about
          the universe and a passion for exploring the cosmos. Our mission is to
          provide a platform for students, faculty, and astronomy enthusiasts to
          come together and share their love for the night sky, unravel the
          mysteries of space, and delve into the wonders of the universe.
          Whether you are a seasoned stargazer or a novice eager to learn, our
          club offers a wide range of activities to suit your interests. From
          regular stargazing sessions and astrophotography workshops to guest
          lectures by eminent astronomers and exciting field trips to
          observatories, there is always something happening at our club. We are
          committed to fostering a community where members can exchange ideas,
          learn new skills, and inspire each other. Our events are designed to
          not only educate but also ignite a sense of wonder and curiosity about
          the vast expanse that lies beyond our planet. Join us as we embark on
          this cosmic journey. Together, let’s explore the stars, galaxies, and
          beyond. Your fascination with astronomy will find a home here, where
          every question leads to new discoveries and every observation brings
          us closer to understanding the universe we inhabit.
          <br />
          Clear skies and happy stargazing!
          <br />
          <br />
          Warm regards,
          <br />
          Keshav Agrawal
          <br />
          Club Head
          <br />
          Astronomy Club, IIT Indore
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
