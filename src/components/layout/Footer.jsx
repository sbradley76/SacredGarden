import { brandMoments } from '../../data/siteData';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">The Sacred Garden</p>
          <h3>Moody, premium, and built to feel like a real brand from the first scroll.</h3>
        </div>
        <div className="footer-moments">
          {brandMoments.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div>
          <ul className="footer-list">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>21+ Disclaimer</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 The Sacred Garden</span>
        <span>Prototype storefront for visual direction. Replace legal copy before launch.</span>
      </div>
    </footer>
  );
}

export default Footer;
