import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const lines = [
      "INITIALIZING_IDENTITY...",
      "LOADING_NEURAL_CORE...",
      "FETCHING_CASE_FILES...",
      "ESTABLISHING_ENCRYPTED_PORTAL...",
      "ACCESS_GRANTED."
    ];

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 1,
          ease: "expo.inOut",
          onComplete: onComplete
        });
      }
    });

    lines.forEach((line, index) => {
      tl.to(textRef.current, {
        duration: 0.4,
        opacity: 1,
        onStart: () => {
          if (textRef.current) textRef.current.innerText = line;
        },
        delay: index === 0 ? 0.5 : 0.2
      });
    });

    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "power4.inOut"
    }, 0);

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-obsidian flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-md space-y-4">
        <div
          ref={textRef}
          className="font-mono text-xs text-pure-white tracking-widest h-4"
        >
          CONNECTING...
        </div>
        <div className="h-[2px] w-full bg-pure-white/10 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-full bg-safety-orange origin-left scale-x-0"
          />
        </div>
        <div className="flex justify-between font-mono text-[10px] text-pure-white/40">
          <span>STBL_V6.1.0</span>
          <span>©2026_HG_SYS</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
