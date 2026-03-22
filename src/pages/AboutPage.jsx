import AboutStory from '../components/sections/AboutStory';

function AboutPage() {
  return (
    <div className="page-top-spaced">
      <section className="section short-hero">
        <div className="container">
          <div className="glass-panel content-stack page-hero-copy compact-hero-copy">
            <p className="eyebrow">About the brand</p>
            <h1>A more premium, proportional, and believable visual direction.</h1>
            <p>
              Use this page for final brand story, quality standards, lab testing, store location, and your compliance language once the live content is ready.
            </p>
          </div>
        </div>
      </section>
      <AboutStory />
    </div>
  );
}

export default AboutPage;
