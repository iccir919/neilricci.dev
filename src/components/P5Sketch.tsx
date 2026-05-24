import { useEffect, useRef } from 'react';
import type p5 from 'p5';

interface Props {
  sketchName: string;
  width?: number;
  height?: number;
}

// Map of sketch name -> dynamic loader
const sketches: Record<string, () => Promise<{ default: (p: p5) => void }>> = {
  'bouncing-ball': () => import('../sketches/bouncing-ball.js'),
};

export default function P5Sketch({ sketchName, width = 600, height = 400 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let instance: p5 | undefined;
    let cancelled = false;

    Promise.all([import('p5'), sketches[sketchName]()]).then(([p5Module, sketchModule]) => {
      if (cancelled) return;
      const P5 = p5Module.default;
      const sketch = sketchModule.default;
      console.log('Mounting sketch:', sketchName, typeof sketch);
      instance = new P5(sketch, container);
    });

    return () => {
      cancelled = true;
      instance?.remove();
    };
  }, [sketchName]);

  return <div ref={containerRef} style={{ width, height }} />;
}