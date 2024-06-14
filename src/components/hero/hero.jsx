import React, { useEffect, useState } from "react";
import { useRef } from "react";
import li from "../../assets/hero/li.png";
import insta from "../../assets/hero/insta.png";
import 'react-toastify/dist/ReactToastify.css';
import './hero.css'; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import Carousel from 'react-bootstrap/Carousel';
import astrotalk from '../../assets/hero/astrotalk.jpg';
import astrotalk1 from '../../assets/hero/astrotalk1.jpg';
import hundredhrs from '../../assets/hero/hundredhrs.jpg'; 

function Hero() {

  const linkRef = useRef(null);
 

  const left ={
    hidden :{x:-500,opacity:0, },
    visible :{x:0 ,opacity:1 ,transition :{duration:0.6,delay:0.2},}
  }
  const top ={
    hidden :{y:-500,opacity:0, },
    visible :{y:0 ,opacity:1 ,transition :{duration:0.6}}
  }
  const right ={
    hidden :{x:500,opacity:0, },
    visible :{x:0 ,opacity:1 ,transition :{duration:0.6,delay:0.8},}
  }
  const smaller_top ={
    hidden :{y:-90,opacity:0, },
    visible :{y:0 ,opacity:1 ,transition :{duration:0.6}}
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
 

  //script for herotext container
  const hoverontext = () => {
  const textContainer = document.querySelector('.herotext');
  const gradientSize = 450 / 2; 

  textContainer.addEventListener('mousemove', (e) => {
      const rect = textContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - gradientSize;
      const y = e.clientY - rect.top - gradientSize;

      textContainer.style.backgroundPosition = `${x}px ${y}px`;

  });
//   textContainer.addEventListener('mouseleave', () => {
//     textContainer.style.backgroundPosition = 'default';    
// }
// );
}
  return (
    <>
      <div className="text-white border-red-700 border-0 font-serif flex  overflow-x-hidden " style={{background:"radial-gradient(rgb(2, 21, 48) 1%, rgb(0, 0, 0))"}} >
        {/* outermost flex-item-1 */}
        <div className={`border-0 border-green-600 sm:w-[50%] w-[100%]`}>
          <motion.div id="heading" className="text-7xl my-[5vh] mx-[5vh] mb-[3vh]" 
          variants={smaller_top} animate={control} initial="hidden" whileInView="visible" style={{fontFamily:"Trebuchet MS"}}>
            Welcome to The<span style={{color:"rgb(164, 253, 0)"}}> Astronomy Club</span>
            <div className="lg:block my-2 py-2 hidden font-bold text-5xl bg-gradient-to-r from-slate-600 via-black-500 to-indigo-400 text-transparent bg-clip-text"
            >
              <Typewriter
                words={['Astronomy ...', 'Aerospace ...',]}
                loop={0}
                cursor
                cursorStyle='|'
                cursorColor="rgb(37,99,235)"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </div>
           
          </motion.div>
          <motion.div className=" w-[70%] text-xl mx-[5vh] herotext"
          variants={smaller_top} animate={control} initial="hidden" whileInView="visible" style={{
            fontFamily:"Trebuchet MS"
          }}  onMouseMove={hoverontext}>
            The Astronomy Club at IIT Indore fosters a passion for the cosmos through stargazing sessions, workshops, and educational talks. We provide a platform for students to explore celestial phenomena, engage in astrophotography, and collaborate on research projects, promoting a deeper understanding of the universe and its wonders.
          </motion.div>
          
          
          <motion.div className=" text-xl font-bold mx-[5vh] my-[5vh]" 
           variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible" style={{
            fontFamily:"Trebuchet MS"
          }}>
            FOLLOW US
            <div className="flex gap-3 my-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/the-astronomy-club-iit-indore/mycompany/"
                className="active:scale-105 transition-all"
              >
                <img src={li} className="w-8" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/astronomyclub_iiti/"
                className="active:scale-105 transition-all"
              >
                <img src={insta} className="w-8" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* outermost flex-item-2 */}
        {<div className="sm:w-[50%] w-[100%] md:w-[50%] m-5 h-100 rounded-md  shadow-slate-50 border-2">
          {/* <img width={"90%"} src={heroImg} className=""  style={{height : '60vh' , margin : '5vh'}}/> */}
        
         <Carousel fade className="borderglow">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={astrotalk}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Astronomy talk</h3>
        <p>wonderfull experience for having such a great session</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={astrotalk1}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Astronomy talk</h3>
        <p>wonderfull experience for having such a great session</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={hundredhrs}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>100 hours of Astronomy</h3>
        <p>wonderfull session</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        
        </div>}
      </div>

    </>
  );
}

export default Hero;
