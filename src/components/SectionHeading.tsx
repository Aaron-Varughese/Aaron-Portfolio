import { motion } from 'motion/react';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-end gap-4 mb-12 border-b border-[#222222] pb-4">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-6xl font-bold text-[#222222] leading-none"
      >
        {number}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-4xl font-bold text-white uppercase tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
