import { faqs } from '../../data/siteData';

function AboutStory() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div className="glass-panel content-stack">
          <p className="eyebrow">The experience</p>
          <h2>The Sacred Garden should feel layered, tactile, and intentional.</h2>
          <p>
            The updated pass keeps the dark green luxury mood but refines the proportions so copy, cards, and graphics all feel cleaner on screen.
          </p>
          <p>
            It is still a front-end concept build, but now it behaves more like a real premium storefront with better interactions, stronger product states, and a more believable visual system.
          </p>
        </div>

        <div className="faq-stack">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
