import { useState, useRef, useEffect, FC } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
}

export const RevealOnScroll: FC<RevealOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    observer.observe(ref.current);

    // Initial check
    const { top } = ref.current.getBoundingClientRect();
    if (top < window.innerHeight) {
      setIsVisible(true);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const classes = `transition-opacity duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  return <div ref={ref} className={classes}>{children}</div>;
};
