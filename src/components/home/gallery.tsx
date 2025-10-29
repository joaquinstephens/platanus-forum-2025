import { GallerySlider } from '../ui/gallery-slider';
import { NumberTicker } from '../ui/number-ticker';

export default function Gallery() {
  return (
    <section className="my-12 md:my-24 pb-32 w-full mx-auto flex flex-col justify-start items-start gap-10">
      <span className="max-w-4xl mx-auto w-full text-left px-8 md:px-12 font-mono uppercase text-foreground">
        {'< Un poco del año pasado />'}
      </span>

      <div className="max-w-4xl mx-auto w-full px-12 space-y-4">
        <p className="w-full font-mono uppercase text-left max-w-sm -mt-4 mb-10 text-muted-foreground">
          El año pasado fueron 150 personas de nuestra comunidad, repartidos entre:
        </p>
        <div className="w-full flex h-1">
          <div className="bg-primary-foreground" style={{ width: '52%' }}></div>
          <div className="bg-orange-500" style={{ width: '20%' }}></div>
          <div className="bg-blue-500" style={{ width: '28%' }}></div>
        </div>

        <ol className="w-full flex">
          <div className="text-left font-mono font-normal space-y-0.5" style={{ width: '52%' }}>
            <p className='text-muted-foreground font-mono uppercase text-sm'>Fundadores</p>
            <p className="text-6xl text-primary-foreground *:!text-primary-foreground">
              <NumberTicker value={52} />
              <span>%</span>
            </p>
          </div>

          <div className="text-left font-mono font-normal space-y-0.5" style={{ width: '20%' }}>
            <p className='text-muted-foreground font-mono uppercase text-sm'>LPs</p>
            <p className="text-6xl text-orange-500 *:!text-orange-500">
              <NumberTicker value={20} />
              <span>%</span>
            </p>
          </div>

          <div className="text-left font-mono font-normal space-y-0.5" style={{ width: '28%' }}>
            <p className='text-muted-foreground font-mono uppercase text-sm'>VCs</p>
            <p className="text-6xl text-blue-500 *:!text-blue-500">
              <NumberTicker value={28} />
              <span>%</span>
            </p>
          </div>
        </ol>
      </div>

      <GallerySlider direction="right" />
    </section>
  );
}
