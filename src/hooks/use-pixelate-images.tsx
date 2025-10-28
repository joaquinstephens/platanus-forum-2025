import { useEffect, useRef, useState } from "react";
import PixelateSvgFilter from "@/fancy/filter/pixelate-svg-filter";

export function usePixelateImages(initialPixelSize: number = 8, animationDuration: number = 600) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterIdRef = useRef(`pixelate-filter-${Math.random()}`);
  const [currentPixelSize, setCurrentPixelSize] = useState(initialPixelSize);
  const imageAnimationsRef = useRef<Map<HTMLImageElement, number>>(new Map());

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const images = container.querySelectorAll("img:not(.no-pixelate)");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const img = entry.target as HTMLImageElement;

        if (entry.isIntersecting && !imageAnimationsRef.current.has(img)) {
          img.style.filter = `url(#${filterIdRef.current})`;
          const startTime = Date.now();
          imageAnimationsRef.current.set(img, startTime);

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            const newPixelSize = initialPixelSize * (1 - progress);

            setCurrentPixelSize(newPixelSize);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              img.style.filter = "none";
              imageAnimationsRef.current.delete(img);
            }
          };

          animate();
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.1 });

    images.forEach((img) => {
      img.style.filter = `url(#${filterIdRef.current})`;
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, [initialPixelSize, animationDuration]);

  return {
    containerRef,
    filterId: filterIdRef.current,
    pixelSize: currentPixelSize,
  };
}
