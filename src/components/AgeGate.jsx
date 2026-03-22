import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'sacred-garden-age-ok';

function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="age-gate-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="age-gate-card" initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}>
            <p className="eyebrow">Welcome to The Sacred Garden</p>
            <h2>Enter the garden.</h2>
            <p>
              This prototype storefront is positioned for adult customers. Confirm legal age before entering.
            </p>
            <div className="age-gate-actions">
              <button className="btn btn-primary" onClick={accept}>I am 21+</button>
              <a className="btn btn-secondary" href="https://www.google.com">Exit</a>
            </div>
            <small>Update legal language, disclaimers, and jurisdiction-specific policy before launch.</small>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AgeGate;
