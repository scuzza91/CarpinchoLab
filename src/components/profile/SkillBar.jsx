import { useEffect, useRef, useState } from 'react';
import './SkillBar.css';

export default function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__value">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className={`skill-bar__fill${visible ? ' skill-bar__fill--animated' : ''}`}
          style={{ '--skill-level': `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={name}
        />
      </div>
    </div>
  );
}
