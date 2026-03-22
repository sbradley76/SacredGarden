import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { featuredProducts, shopFilters } from '../data/siteData';
import ProductCard from '../components/shop/ProductCard';

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryCategory = searchParams.get('category') || 'All';
  const [activeFilter, setActiveFilter] = useState(queryCategory);

  useEffect(() => {
    setActiveFilter(queryCategory);
  }, [queryCategory]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return featuredProducts;
    return featuredProducts.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const updateFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setSearchParams({});
      return;
    }
    setSearchParams({ category: filter });
  };

  return (
    <div className="page-top-spaced">
      <section className="section short-hero">
        <div className="container">
          <div className="glass-panel content-stack page-hero-copy compact-hero-copy">
            <p className="eyebrow">Shop the garden</p>
            <h1>Premium browsing flow first, Shopify wiring next.</h1>
            <p>
              This pass focuses on cleaner merchandising and interactions: useful filters, quick-view behavior, and a mock cart experience that makes the storefront feel alive.
            </p>
          </div>
        </div>
      </section>

      <section className="section dense-top">
        <div className="container">
          <div className="chip-row">
            {shopFilters.map((filter) => (
              <button
                key={filter}
                className={`category-chip ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => updateFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
