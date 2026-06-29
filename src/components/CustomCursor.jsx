import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });
  const dotX = useSpring(0, { stiffness: 400, damping: 30 });
  const dotY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [ringX, ringY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-glow/50 rounded-full pointer-events-none z-[999] hidden md:block"
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-glow rounded-full pointer-events-none z-[999] hidden md:block shadow-[0_0_10px_#22D3EE]"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
};

export default CustomCursor;
