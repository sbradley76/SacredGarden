import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroData } from '../../data/siteData';
import leafFrame from '../../assets/leaf-frame-realistic.png';
import mistOverlay from '../../assets/mist-overlay-realistic.png';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 6, 4, 0.9), rgba(3, 6, 4, 0.34) 55%, rgba(3, 6, 4, 0.8)), url(${heroData.image})` }} />
      <img className="hero-leaf-frame" src={leafFrame} alt="" aria-hidden="true" />
      <img className="hero-mist" src={mistOverlay} alt="" aria-hidden="true" />
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy glass-panel"
        >
          <p className="eyebrow">{heroData.eyebrow}</p>
          <h1>{heroData.title}</h1>
          <p className="hero-text">{heroData.text}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/shop">Enter the shop</Link>
            <Link className="btn btn-secondary" to="/about">Explore the brand</Link>
          </div>
          <div className="hero-stats">
            {heroData.stats.map((item) => (
              <div className="hero-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
