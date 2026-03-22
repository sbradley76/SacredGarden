import { Outlet } from 'react-router-dom';
import SacredHeader from './SacredHeader';
import Footer from './Footer';
import CartDrawer from '../ui/CartDrawer';
import ProductQuickView from '../ui/ProductQuickView';

function Layout() {
  return (
    <div className="site-shell">
      <SacredHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <ProductQuickView />
    </div>
  );
}

export default Layout;
