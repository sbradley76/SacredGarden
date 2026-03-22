import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import AgeGate from './components/AgeGate';
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <AgeGate />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </ShopProvider>
  );
}

export default App;
