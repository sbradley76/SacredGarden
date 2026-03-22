import Hero from '../components/sections/Hero';
import CategoryShowcase from '../components/sections/CategoryShowcase';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Pillars from '../components/sections/Pillars';

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <Pillars />
    </>
  );
}

export default HomePage;
