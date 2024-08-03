import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import '../../styles/news.css'
import Footer from "../../components/Footer/Footer";

function News() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
      <div className="News-encloser1">
      <Navbar/>
      <div className="News-encloser2"> <div className="News-heading">Latest News from the club...</div></div>

      
       
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{width:"90vw"}}>
  <div className="col">
    <div className="card">
      <img src="https://cdn.mos.cms.futurecdn.net/h5SYb8f7HwaY8boAgYy43H-1200-80.png.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Meteorite Impacts and the Moon's Atmosphere</h5>
        <p className="card-text">Recent studies reveal that meteorite impacts significantly affect the Moon's thin atmosphere. These impacts release water and other molecules from the lunar surface, temporarily boosting the atmosphere's density. This discovery helps scientists understand lunar processes and the potential for future lunar exploration.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://scitechdaily.com/images/Galactic-Merger-Art-Concept.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">James Webb Space Telescope Captures Quasar-Galaxy Merger</h5>
        <p className="card-text">The James Webb Space Telescope has provided detailed images of a quasar-galaxy merger in the distant universe. This discovery allows astronomers to study the chemical evolution of galaxies and the enrichment of metals in these early structures.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202407/MIT-Eccentric-Jupiter-01-press_0.jpg?itok=Onn-qCS7" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Discovery of a Highly Eccentric Planet</h5>
        <p className="card-text">MIT astronomers have identified a highly eccentric Jupiter-sized planet that is on its way to becoming a hot Jupiter. The planet's dramatic changes in starlight and extreme seasonal variations offer valuable insights into planetary orbital dynamics and high eccentricity migration.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://i.guim.co.uk/img/media/6d934faea51ca7ac987310462b9d76653749d5b9/0_126_3500_2099/master/3500.jpg?width=1300&dpr=2&s=none" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Most Distant Galaxy Found Using JWST</h5>
        <p className="card-text">Researchers using the James Webb Space Telescope have discovered the most distant galaxy ever observed, dating back to when the universe was just 300 million years old. This finding provides a unique opportunity to study early galaxy formation and the rapid, intense processes involved.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202405/MIT-Ancient-Quasar-01-press_0.jpg?itok=xYb2Zv4Y" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Light from Ancient Quasars</h5>
        <p className="card-text">MIT astronomers have successfully separated the light from the central black hole of ancient quasars from that of their host galaxies using the JWST. This achievement allows for a better understanding of the mass ratio between black holes and their host galaxies in the early universe.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://scitechdaily.com/images/Pulsar-Artists-Concept.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Gamma Ray Breakthrough</h5>
        <p className="card-text">Recent advancements in gamma-ray astronomy have propelled the study of pulsars into a new era. These discoveries are enhancing our understanding of high-energy astrophysical processes and the extreme environments around neutron stars.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.nasa.gov/wp-content/uploads/2023/03/wasp-18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">First-Ever Water Detected on a Rocky Exoplanet</h5>
        <p className="card-text">Using the JWST, astronomers have detected water vapor in the atmosphere of a rocky exoplanet 'WASP 18b' for the first time. This discovery is a significant step in the search for potentially habitable planets outside our solar system and understanding atmospheric compositions.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/03/planck_cmb/12583930-4-eng-GB/Planck_CMB_pillars.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Unveiling the Secrets of Cosmic Inflation</h5>
        <p className="card-text">New experiments with the cosmic microwave background are probing the connections between cosmic inflation and particle physics. These studies aim to reveal the fundamental mechanisms that shaped the early universe and led to its rapid expansion.</p>
      </div>
    </div>
  </div>
</div>
</div>
      <Footer/>
    </>
  );
}

export default News;

