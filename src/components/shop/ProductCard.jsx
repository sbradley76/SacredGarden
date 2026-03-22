import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

function ProductCard({ product }) {
  const { addToCart, setActiveProduct } = useShop();

  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <button className="product-media" onClick={() => setActiveProduct(product)} aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} />
        <span className="product-badge">{product.badge}</span>
      </button>
      <div className="product-body">
        <div className="product-meta">
          <span>{product.category}</span>
          <strong>{product.price}</strong>
        </div>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="product-button" onClick={() => setActiveProduct(product)}>
            <span>Quick view</span>
            <ArrowUpRight size={16} />
          </button>
          <button className="product-icon-action" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}>
            <Plus size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
