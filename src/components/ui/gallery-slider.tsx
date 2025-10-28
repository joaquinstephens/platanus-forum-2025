import { GALLERY_IMAGES } from "@/constants/gallery-images";

interface GallerySliderProps {
  direction?: "left" | "right";
  speed?: number;
}

export function GallerySlider({ direction = "left", speed = 30 }: GallerySliderProps) {
  const duplicatedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const animationName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .gallery-scroll {
          animation: ${animationName} ${speed}s linear infinite;
        }

        .gallery-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .gallery-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
      `}</style>

      <div className="gallery-container w-full overflow-hidden">
        <div className="gallery-scroll flex gap-2 w-max">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="gallery-ite grayscale hover:grayscale-0 flex-shrink-0 w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
