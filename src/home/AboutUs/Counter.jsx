import { useEffect, useRef, useState } from "react";
import "./Counter.css";

const stats = [
  { label: "Employees", value: 150 },
  { label: "Countries", value: 4 },
  { label: "Partners", value: 55 },
  { label: "Projects", value: 91 },
];

export default function Counter() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // start only once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="counter-section" ref={sectionRef}>
      {stats.map((item, index) => (
        <CounterItem
          key={index}
          label={item.label}
          value={item.value}
          start={start}
        />
      ))}
    </div>
  );
}

function CounterItem({ label, value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(value / 50);

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <div className="counter-card">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}
