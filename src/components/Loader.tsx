import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING_SYSTEM...");

  useEffect(() => {
    const texts = [
      "LOADING_MODULES...", 
      "DECRYPTING_DATA...", 
      "ESTABLISHING_CONNECTION...", 
      "BYPASSING_FIREWALL...",
      "ACCESS_GRANTED"
    ];
    let step = 0;
    
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Wait a bit after 100%
          return 100;
        }
        return p + Math.floor(Math.random() * 12) + 2;
      });
      
      if (step < texts.length && Math.random() > 0.6) {
        setText(texts[step]);
        step++;
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-mono overflow-hidden"
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background grid for techie feel */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        {/* Glitchy Initials */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-600 mb-12 tracking-tighter relative"
        >
          AVB
          <motion.span 
            animate={{ x: [-3, 3, -3], y: [2, -2, 2], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.15 }}
            className="absolute inset-0 text-[#00f0ff] mix-blend-screen opacity-50"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)' }}
          >
            AVB
          </motion.span>
          <motion.span 
            animate={{ x: [3, -3, 3], y: [-2, 2, -2], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.25 }}
            className="absolute inset-0 text-blue-600 mix-blend-screen opacity-50"
            style={{ clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)' }}
          >
            AVB
          </motion.span>
        </motion.div>

        {/* Terminal Text */}
        <div className="w-full flex justify-between text-[#00f0ff] text-xs md:text-sm mb-2 font-mono h-5">
          <span>&gt; {text}</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#222222] overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="w-full flex justify-between mt-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#00f0ff] animate-pulse"></div>
            <div className="w-2 h-2 bg-[#00f0ff] animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-[#00f0ff] animate-pulse delay-150"></div>
          </div>
          <div className="text-[#444444] text-xs">SYS.V.2.0.4</div>
        </div>
      </div>
    </motion.div>
  );
}
