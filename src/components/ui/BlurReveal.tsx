import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurRevealProps {
  children: string;
  className?: string;
  spanClassName?: string;
  align?: 'left' | 'center';
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className,
  spanClassName = "text-muted text-base md:text-lg leading-relaxed font-medium font-sans",
  align = 'center',
}) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    // Split by sentences (handling periods, question marks, etc.)
    const sentences = children
      .split(/(?<=[.!?])\s+/)
      .filter(s => s.trim().length > 0);
    setLines(sentences);
  }, [children]);

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col gap-2">
        {lines.map((line, index) => (
          <LineReveal
            key={index}
            text={line}
            index={index}
            total={lines.length}
            spanClassName={spanClassName}
            align={align}
          />
        ))}
      </div>
    </div>
  );
};

const LineReveal = ({ text, index, spanClassName, align }: { text: string; index: number; total: number; spanClassName: string; align: 'left' | 'center' }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 10 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      <span className={`${spanClassName} block ${align === 'center' ? 'text-center' : 'text-left'}`}>
        {text}
      </span>
    </motion.div>
  );
};
