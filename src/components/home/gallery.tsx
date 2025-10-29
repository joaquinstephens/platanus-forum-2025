import { GallerySlider } from '../ui/gallery-slider';

export default function Gallery() {
  return (
    <section className="my-12 md:my-24 pb-32 w-full mx-auto flex flex-col justify-start items-start gap-10">
      <span className="max-w-4xl mx-auto w-full text-left px-8 md:px-12 font-mono uppercase text-foreground">
        {'< Un poco del año pasado />'}
      </span>
      <div className="w-full">
        <GallerySlider direction="left" />
      </div>
    </section>
  );
}
