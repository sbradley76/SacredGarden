import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

function ProductQuickView() {
  const { activeProduct, setActiveProduct, addToCart } = useShop();

  return (
    <AnimatePresence>
      {activeProduct && (
        <>
          <motion.button
            className="overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProduct(null)}
            aria-label="Close product view"
          />
          <motion.section
            className="quick-view"
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 26, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <button className="icon-button quick-close" onClick={() => setActiveProduct(null)} aria-label="Close product view">
              <X size={18} />
            </button>
            <div className="quick-grid">
              <div className="quick-media-wrap">
                <img src={activeProduct.image} alt={activeProduct.name} className="quick-media" />
              </div>
              <div className="quick-copy">
                <p className="eyebrow">{activeProduct.category}</p>
                <h3>{activeProduct.name}</h3>
                <p className="quick-price">{activeProduct.price}</p>
                <p>{activeProduct.description}</p>
                <ul className="detail-list">
                  {activeProduct.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
                <div className="quick-actions">
                  <button className="btn btn-primary" onClick={() => addToCart(activeProduct)}>Add to cart</button>
                  <button className="btn btn-secondary" onClick={() => setActiveProduct(null)}>
                    <span>Keep browsing</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProductQuickView;
