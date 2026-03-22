import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

function CartDrawer() {
  const { cartItems, subtotal, isCartOpen, setIsCartOpen, updateQuantity } = useShop();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.button
            className="overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          />
          <motion.aside
            className="cart-drawer"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="drawer-header">
              <div>
                <p className="eyebrow">Mock cart</p>
                <h3>Your selection</h3>
              </div>
              <button className="icon-button" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
                <X size={18} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="drawer-empty">
                <ShoppingBag size={24} />
                <p>No products added yet. Tap any product card to test the interactions.</p>
              </div>
            ) : (
              <div className="drawer-items">
                {cartItems.map((item) => (
                  <article className="drawer-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.price}</span>
                      <div className="qty-row">
                        <button onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name}`}>
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="drawer-footer">
              <div className="subtotal-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary btn-block">Checkout comes in v3</button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
