import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/news.css';
import Footer from '../../components/Footer/Footer';

function News() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <div className="News-encloser1">
        <Navbar />
        <div className="News-encloser2">
          {' '}
          <div className="News-heading">Latest News about Astronomy...</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="row row-cols-1 row-cols-md-4 g-4"
          style={{ width: '90vw' }}
        >
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.esahubble.org/archives/images/newsfeature/heic2415a.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://esahubble.org/news/heic2415/">
                  <h5 className="card-title">
                  Hubble sees aftermath of galaxy’s scrape with Milky Way
                  </h5>
                </a>

                <p className="card-text">
                The Large Magellanic Cloud (LMC), a dwarf galaxy, endured a major collision with the Milky Way. This collision caused the LMC to lose a significant portion of its gas halo. Despite this, the galaxy retained enough gas to continue its star formation process. Hubble Space Telescope observations revealed an intriguing detail about the LMC’s halo – it is about 10 times smaller than the halos of similar galaxies, which indicates its remarkable resilience. This discovery challenges previous expectations and adds to the understanding of galaxy interactions and survivability.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.esahubble.org/archives/images/newsfeature/heic2411a.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://esahubble.org/news/heic2411/">
                  <h5 className="card-title">
                  Hubble finds that a black hole beam promotes stellar eruptions
                  </h5>
                </a>

                <p className="card-text">
                Astronomers using the Hubble Space Telescope have uncovered an unexpected phenomenon involving a supermassive black hole. This black hole has been observed emitting a jet that appears to trigger star eruptions, specifically novae, in nearby star systems. While the exact cause remains a mystery, the observed data is undeniable. In fact, scientists have detected twice as many novae in the regions near the jet compared to other areas within the same galaxy. This finding is a significant challenge to current astronomical models and underscores the need for further research into the intricate relationship between black holes and the galaxies they reside in.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:0,ch:0,q:80,w:1200/7iprtehXQW4fHYuypUguDo.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://www.space.com/the-universe/mars/ancient-volcanic-ash-on-mars-could-offer-new-clues-in-search-for-extraterrestrial-life">
                  {' '}
                  <h5 className="card-title">
                  Ancient volcanic ash on Mars could offer new clues in search for extraterrestrial life
                  </h5>
                </a>

                <p className="card-text">
                Scientists have recently made an intriguing discovery on Mars – dark, volcanic rocks that may provide valuable insights into the planet’s ancient past. These rocks, likely volcanic ash from eruptions that occurred long ago, were found in impact craters scattered across the Martian surface. What makes these findings even more significant is the potential role these rocks played in preserving life forms. These layers of volcanic ash could have shielded mineral-rich rocks beneath them, which might hold evidence of ancient microbial life that once thrived on the Red Planet.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.mos.cms.futurecdn.net/tBWWp6neU46De5uYEsLx4E.gif"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://www.space.com/the-universe/sun/sun-erupts-with-powerful-x1-2-solar-flare-causes-radio-blackouts-photo">
                  <h5 className="card-title">
                  Sun erupts with powerful X1.2 solar flare, causes radio blackouts
                  </h5>
                </a>

                <p className="card-text">
                A significant solar event occurred recently when an X-class solar flare, categorized as X.12, erupted from sunspot region AR 3947. This flare caused a radio blackout across a wide area, including parts of the Southern Atlantic, Africa, and eastern South America. The flare’s intensity was rated as “Strong” on the NOAA Space Weather Scale, although no coronal mass ejections (CMEs) were produced. The absence of CMEs means that Earth was not directly impacted, but this event serves as a reminder of the Sun’s immense power and its potential effects on our planet’s space weather.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.nasa.gov/wp-content/uploads/2023/11/uhz1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://www.nasa.gov/universe/nasa-telescopes-discover-record-breaking-black-hole/">
                  <h5 className="card-title">NASA Telescopes Discover Record-Breaking Black Hole</h5>
                </a>

                <p className="card-text">
                A groundbreaking discovery has been made with the help of NASA’s Chandra and James Webb space telescopes. Astronomers have observed the most distant black hole ever detected in X-rays, located in a galaxy known as UHZ1. This black hole is believed to be between 10 and 100 million solar masses, which is similar in mass to its host galaxy. Such a large mass suggests that the black hole might have formed directly from a massive cloud of gas, offering significant evidence for the existence of “Outsize Black Holes.” 
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://img.jagranjosh.com/images/2025/January/312025/meteor-shower.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://www.jagranjosh.com/general-knowledge/when-and-where-to-watch-quadrantids-meteor-shower-1735877689-1">
                  <h5 className="card-title">Quadrantid Meteor Shower 2025</h5>
                </a>

                <p className="card-text">
                The Quadrantids Meteor Shower, one of the most spectacular celestial events of the year, is set to reach its peak on January 4, 2025. The meteor shower will provide stargazers with an incredible opportunity to witness up to 120 meteors per hour. For the best viewing experience, experts recommend finding a location that is far from city lights. It’s also important to allow your eyes to adjust to the darkness, and for optimal viewing, lying flat on your back with your feet pointing northeast will provide the best vantage point for observing this stunning display of cosmic activity.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://astrobiology.nasa.gov/uploads/filer_public_thumbnails/filer_public/f7/4e/f74e242e-9d8e-413e-8322-13264d88e077/spherex.jpg__1240x510_q85_crop_subject_location-620%2C254_subsampling-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://www.jpl.nasa.gov/missions/spherex/">
                  <h5 className="card-title">
                  SPHEREx
                  </h5>
                </a>

                <p className="card-text">
                The SPHEREx mission, which stands for Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer, will soon embark on an ambitious mission to map the universe. This mission will conduct the first all-sky spectral survey, gathering valuable data on more than 450 million galaxies and over 100 million stars within the Milky Way. The planned two-year mission aims to explore the origins of the universe, providing insights into cosmic evolution, the conditions that led to the formation of galaxies, and the mysteries of the early universe’s reionization era.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/03/planck_cmb/12583930-4-eng-GB/Planck_CMB_pillars.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="https://www.space.com/28423-cosmic-inflation-signal-space-dust.html#:~:text=In%20the%20cosmic%20inflation%20announcement,about%2013.8%20billion%20years%20ago.">
                  <h5 className="card-title">
                    Unveiling the Secrets of Cosmic Inflation
                  </h5>
                </a>

                <p className="card-text">
                In the field of cosmic research, new experiments are being conducted to investigate the connections between cosmic inflation and particle physics. These experiments aim to uncover the fundamental mechanisms that led to the rapid expansion of the universe in its early stages. By probing the cosmic microwave background, scientists hope to better understand how the universe grew from its tiny, dense beginnings into the vast expanse we observe today. This research is crucial to refining theories of the early universe and could yield groundbreaking revelations about the forces that shaped its evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
