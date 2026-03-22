import { createContext, useContext, useMemo, useState } from 'react';

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, direction) => {
    setCartItems((current) => current
      .map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + direction) } : item)
      .filter((item) => item.quantity > 0));
  };

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);

  const subtotal = useMemo(() => cartItems.reduce((sum, item) => {
    const numeric = Number(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return sum + numeric * item.quantity;
  }, 0), [cartItems]);

  const value = {
    cartItems,
    cartCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    activeProduct,
    setActiveProduct,
    addToCart,
    updateQuantity,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used inside ShopProvider');
  return context;
}
