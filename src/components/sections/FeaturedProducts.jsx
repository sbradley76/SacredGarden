import { featuredProducts } from '../../data/siteData';
import ProductCard from '../shop/ProductCard';

function FeaturedProducts() {
  return (
    <section className="section dense-top" id="shop-grid">
      <div className="container">
        <div className="section-heading split align-start">
          <div>
            <p className="eyebrow">Signature picks</p>
            <h2>Product cards that actually do something now.</h2>
          </div>
          <p className="section-copy">Each card has quick view, add-to-cart behavior, sharper hover response, and imagery with a more realistic mood placeholder style.</p>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
