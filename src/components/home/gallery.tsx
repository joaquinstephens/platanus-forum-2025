import { GallerySlider } from '../ui/gallery-slider';
import { NumberTicker } from '../ui/number-ticker';
import { cn } from '@/lib/utils';

const COMMUNITY_BREAKDOWN = [
  { label: 'Fundadores', percentage: 52, bgColor: 'bg-primary-foreground', textColor: 'text-primary-foreground' },
  { label: 'VCs', percentage: 28, bgColor: 'bg-blue-500', textColor: 'text-blue-500' },
  { label: 'LPs', percentage: 20, bgColor: 'bg-orange-500', textColor: 'text-orange-500' },
];

export default function Gallery() {
  return (
    <section className="text-sm my-12 md:my-24 pb-32 w-full mx-auto flex flex-col justify-start items-start gap-10">
      <span className="max-w-4xl mx-auto w-full text-left px-8 md:px-12 font-mono uppercase text-foreground">
        {'< Un poco del año pasado />'}
      </span>

      <div className="max-w-4xl mx-auto w-full px-8 md:px-12 space-y-4">
        <p className="w-full font-mono uppercase text-left max-w-sm -mt-5 mb-8 text-muted-foreground">
          El año pasado fueron 150 personas de nuestra comunidad, repartidos entre:
        </p>
        <div className="w-full flex h-1">
          {COMMUNITY_BREAKDOWN.map((item) => (
            <div key={item.label} className={item.bgColor} style={{ width: `${item.percentage}%` }} />
          ))}
        </div>

        <ol className="w-full flex">
          {COMMUNITY_BREAKDOWN.map((item) => (
            <div key={item.label} className="text-left font-mono font-normal space-y-0.5" style={{ width: `${item.percentage}%` }}>
              <p className='text-muted-foreground font-mono uppercase text-sm'>{item.label}</p>
              <p className={cn('text-2xl md:text-5xl', item.textColor, `*:!${item.textColor}`)}>
                <NumberTicker value={item.percentage} className={item.textColor} />
                <span>%</span>
              </p>
            </div>
          ))}
        </ol>
      </div>

      <GallerySlider direction="right" />
    </section>
  );
}
