import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/siteData';

function CategoryShowcase() {
  const navigate = useNavigate();

  return (
    <section className="section section-taper">
      <div className="container">
        <div className="section-heading split align-start">
          <div>
            <p className="eyebrow">Featured collections</p>
            <h2>Richer category graphics with cleaner proportions and stronger depth.</h2>
          </div>
          <p className="section-copy">These cards are now styled more like believable merchandising blocks, with less cartoon energy and more premium atmosphere.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              key={category.slug}
              className="category-card"
              onClick={() => navigate(`/shop?category=${encodeURIComponent(category.name)}`)}
            >
              <div className="category-image-wrap">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <div className="category-card-body">
                <div className="category-card-topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>Browse</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
