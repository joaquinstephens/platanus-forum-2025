import { GallerySlider } from './gallery-slider';

export const Component = () => {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="w-full bg-black relative overflow-hidden space-y-12 py-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

        {/* Gallery Slider 1 - Scrolling left */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <GallerySlider direction="left" speed={20} />
        </div>

        {/* Spacer */}
        <div className="relative z-10 h-20" />

        {/* Gallery Slider 2 - Scrolling right */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <GallerySlider direction="right" speed={20} />
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
      </div>
    </>
  );
};
