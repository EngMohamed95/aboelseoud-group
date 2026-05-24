import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number; // duration in ms
}

export default function AnimatedCounter({ target, suffix = "", duration = 1800 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            const easedProgress = progress * (2 - progress);
            
            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  // Handle large number formatting (e.g., 5000 -> 5,000)
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div ref={elementRef} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gold-500 tracking-tight leading-none">
      <span className="tabular-nums font-semibold">{formatNumber(count)}</span>
      <span className="text-white text-3xl sm:text-4xl ml-1">{suffix}</span>
    </div>
  );
}
