import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';
import { useShop } from '../../context/ShopContext';

function Header() {
  const [open, setOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useShop();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-icon">☾</span>
          <span>
            <strong>The Sacred Garden</strong>
            <small>Premium botanical smoke shop</small>
          </span>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="browse-link" to="/shop">Browse catalog</Link>
          <button className="cart-pill" onClick={() => setIsCartOpen(true)} aria-label="Open mock cart">
            <ShoppingBag size={16} />
            <span>Cart</span>
            <strong>{cartCount}</strong>
          </button>
          <button className="mobile-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        <div className="container mobile-nav-links">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
