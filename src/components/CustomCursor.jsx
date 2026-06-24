import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor follow effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Direct DOM update for performance (avoiding React re-renders)
      const coordDisplay = document.getElementById('coord-display');
      const cursorCoord = document.getElementById('cursor-coord');
      if (coordDisplay) {
        const xPercent = (e.clientX / window.innerWidth).toFixed(3);
        const yPercent = (e.clientY / window.innerHeight).toFixed(3);
        coordDisplay.innerText = `SYNC_COORD: [${xPercent}, ${yPercent}]`;
      }
      if (cursorCoord) {
        cursorCoord.innerText = `[${e.clientX.toFixed(0)}, ${e.clientY.toFixed(0)}]`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Cursor Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-safety-orange rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 4 : 1,
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="absolute w-8 h-8 border border-pure-white/20 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />

      {/* Coordinate Display */}
      <motion.div
        id="cursor-coord"
        className="absolute font-mono text-[8px] text-pure-white/40 tracking-widest whitespace-nowrap"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "20px",
          translateY: "20px",
        }}
      >
        [0, 0]
      </motion.div>
    </div>
  );
};

export default CustomCursor;
