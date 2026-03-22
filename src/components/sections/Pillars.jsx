import { pillars, stats } from '../../data/siteData';

function Pillars() {
  return (
    <section className="section">
      <div className="container two-col-layout">
        <div className="glass-panel content-stack">
          <p className="eyebrow">Why this direction works</p>
          <h2>Luxury-apothecary energy without losing storefront usability.</h2>
          <div className="pillar-list">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-item">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="stats-card">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-block">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
