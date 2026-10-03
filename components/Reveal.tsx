import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface RevealGroupProps {
  children: React.ReactNode[];
  className?: string;
  /** ms between each child's reveal — keeps large grids from all popping at once */
  stagger?: number;
  /** cap on the total stagger so a 30-item grid doesn't take 3s to finish */
  maxDelay?: number;
}

/** Wraps each child in its own Reveal with an incrementing delay, for a choreographed grid entrance. */
export const RevealGroup: React.FC<RevealGroupProps> = ({ children, className = '', stagger = 45, maxDelay = 400 }) => (
  <>
    {React.Children.map(children, (child, i) => (
      <Reveal key={i} className={className} delay={Math.min(i * stagger, maxDelay)}>
        {child}
      </Reveal>
    ))}
  </>
);
