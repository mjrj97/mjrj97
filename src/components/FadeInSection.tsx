import { useState, useRef, useEffect, PropsWithChildren } from 'react';

export default function FadeInSection(props: PropsWithChildren) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (domRef.current) observer.unobserve(domRef.current);
      };
    }
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
