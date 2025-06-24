import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../../styles/news.css';

const newsItems = [
  {
    title: 'Hubble sees aftermath of galaxy’s scrape with Milky Way',
    url: 'https://esahubble.org/news/heic2415/',
    img: 'https://cdn.esahubble.org/archives/images/newsfeature/heic2415a.jpg',
    description:
      'The Large Magellanic Cloud (LMC), a dwarf galaxy, endured a major collision with the Milky Way. Despite losing gas, it continued forming stars. Hubble revealed its halo is about 10x smaller than similar galaxies, challenging our understanding of galactic interactions.',
  },
  {
    title: 'Hubble finds that a black hole beam promotes stellar eruptions',
    url: 'https://esahubble.org/news/heic2411/',
    img: 'https://cdn.esahubble.org/archives/images/newsfeature/heic2411a.jpg',
    description:
      'Hubble discovered a black hole jet triggering stellar novae in nearby systems. Regions near the jet see double the novae, suggesting a strong link between black hole activity and star formation.',
  },
  {
    title:
      'Ancient volcanic ash on Mars could offer new clues in search for extraterrestrial life',
    url: 'https://www.space.com/the-universe/mars/ancient-volcanic-ash-on-mars-could-offer-new-clues-in-search-for-extraterrestrial-life',
    img: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:0,ch:0,q:80,w:1200/7iprtehXQW4fHYuypUguDo.webp',
    description:
      'Volcanic ash found in Martian craters could preserve mineral-rich rocks that once supported microbial life, offering new paths in the search for extraterrestrial organisms.',
  },
  {
    title: 'Sun erupts with powerful X1.2 solar flare, causes radio blackouts',
    url: 'https://www.space.com/the-universe/sun/sun-erupts-with-powerful-x1-2-solar-flare-causes-radio-blackouts-photo',
    img: 'https://cdn.mos.cms.futurecdn.net/tBWWp6neU46De5uYEsLx4E.gif',
    description:
      "A powerful solar flare from AR 3947 caused widespread radio blackouts. Although no CMEs followed, the flare highlights the Sun's powerful influence on Earth's space weather.",
  },
  {
    title: 'NASA Telescopes Discover Record-Breaking Black Hole',
    url: 'https://www.nasa.gov/universe/nasa-telescopes-discover-record-breaking-black-hole/',
    img: 'https://www.nasa.gov/wp-content/uploads/2023/11/uhz1.jpg',
    description:
      "NASA's Chandra and JWST observed the most distant black hole ever detected, located in galaxy UHZ1. Estimated to be 10-100 million solar masses, it may have formed directly from a massive gas cloud.",
  },
  {
    title: 'Quadrantid Meteor Shower 2025',
    url: 'https://www.jagranjosh.com/general-knowledge/when-and-where-to-watch-quadrantids-meteor-shower-1735877689-1',
    img: 'https://img.jagranjosh.com/images/2025/January/312025/meteor-shower.webp',
    description:
      'Quadrantids Meteor Shower will peak on January 4, 2025, with up to 120 meteors/hour. For best viewing, find a dark location and lie flat with feet pointing northeast.',
  },
  {
    title: 'SPHEREx',
    url: 'https://www.jpl.nasa.gov/missions/spherex/',
    img: 'https://astrobiology.nasa.gov/uploads/filer_public_thumbnails/filer_public/f7/4e/f74e242e-9d8e-413e-8322-13264d88e077/spherex.jpg__1240x510_q85_crop_subject_location-620%2C254_subsampling-2.jpg',
    description:
      "SPHEREx will map the sky to explore the universe's origin and cosmic evolution, surveying over 450 million galaxies and 100 million stars in the Milky Way.",
  },
  {
    title: 'Unveiling the Secrets of Cosmic Inflation',
    url: 'https://www.space.com/28423-cosmic-inflation-signal-space-dust.html#:~:text=In%20the%20cosmic%20inflation%20announcement,about%2013.8%20billion%20years%20ago.',
    img: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/03/planck_cmb/12583930-4-eng-GB/Planck_CMB_pillars.jpg',
    description:
      "New experiments probe the link between particle physics and cosmic inflation, aiming to refine our understanding of the universe's earliest moments.",
  },
  {
    title: 'Atlas 5 launches second set of Project Kuiper satellites',
    url: 'https://spacenews.com/atlas-5-launches-second-set-of-project-kuiper-satellites/',
    img: 'https://i0.wp.com/spacenews.com/wp-content/uploads/2025/06/54608366101_d091ff4637_k.jpg?w=2048&quality=89&ssl=1',
    description:
      "On June 23, 2025, ULA's Atlas V rocket launched 27 satellites for Amazon's Project Kuiper, marking its second operational mission. The satellites, initially placed in a 450 km orbit, will later move to 630 km. This brings the total Kuiper satellites in orbit to 54. The launch followed a brief delay due to a booster issue earlier in the month.",
  },
];

function NewsCard({ title, url, img, description }) {
  return (
    <div className="news-card">
      <img src={img} alt={title} className="news-image" />
      <div className="news-content">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

function News() {
  return (
    <>
      <Navbar />
      <div className="news-page">
        <div className="news-hero">
          <h1>Latest News about Astronomy</h1>
        </div>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
