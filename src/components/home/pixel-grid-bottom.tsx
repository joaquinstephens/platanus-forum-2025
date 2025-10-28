import React from 'react';
import { Slider } from '@/components/ui/slider';

interface PixelGridBottomProps {
  gapMultiplier?: number;
  numRows?: number;
  colorScheme?: 'color' | 'grayscale';
  hiddenPercentage?: number;
  completelyHiddenPercentage?: number;
}

const PixelGridBottom: React.FC<PixelGridBottomProps> = ({
  gapMultiplier: initialGapMultiplier = 2.0,
  numRows: initialNumRows = 64,
  colorScheme: initialColorScheme = 'color',
  hiddenPercentage: initialHiddenPercentage = 92,
  completelyHiddenPercentage: initialCompletelyHiddenPercentage = 56,
}) => {
  const [randomSeed, setRandomSeed] = React.useState<number>(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [gapMultiplier, setGapMultiplier] = React.useState(initialGapMultiplier);
  const [numRows, setNumRows] = React.useState(initialNumRows);
  const [colorScheme, setColorScheme] = React.useState<'color' | 'grayscale'>(initialColorScheme);
  const [hiddenPercentage, setHiddenPercentage] = React.useState(initialHiddenPercentage);
  const [completelyHiddenPercentage, setCompletelyHiddenPercentage] = React.useState(initialCompletelyHiddenPercentage);
  const [animationSpeed, setAnimationSpeed] = React.useState(95);
  const [seedIntensity, setSeedIntensity] = React.useState(0.1);
  const animationIntervalRef = React.useRef<number>();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const containerHeight = 750;
  const pixelSize = 3;
  const numCols = Math.max(1, Math.floor(containerWidth / (pixelSize + gapMultiplier * pixelSize)));

  React.useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  React.useEffect(() => {
    animationIntervalRef.current = window.setInterval(() => {
      setRandomSeed(prev => (prev + Math.random() * seedIntensity) % 1);
    }, animationSpeed);

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, [animationSpeed, seedIntensity]);

  const gapSize = pixelSize * gapMultiplier;

  const gridWidth = (numCols * pixelSize) + ((numCols - 1) * gapSize) + (pixelSize * 2);
  const gridHeight = (numRows * pixelSize) + ((numRows - 1) * gapSize) + (pixelSize * 2);

  const offsetX = (containerWidth - gridWidth) / 2;
  const offsetY = (containerHeight - gridHeight) / 2;

  const randomPixels = React.useMemo(() => {

    const seededRandom = (seed: number) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: numRows * numCols }, (_, index) => {
      const row = Math.floor(index / numCols);
      const col = index % numCols;
      const random = seededRandom(index + randomSeed);

      const fadePoint = hiddenPercentage / 100;
      const completePoint = completelyHiddenPercentage / 100;

      const distanceFromEdge = row / numRows;

      if (distanceFromEdge < completePoint) {
        return null;
      }

      const remainingDistance = (distanceFromEdge - completePoint) / (fadePoint - completePoint);
      const hideChance = Math.pow(1 - Math.min(remainingDistance, 1), 2) * 100;

      if (random * 100 < hideChance) {
        return null;
      }

      const colorRand = seededRandom(random * 2000);
      if (colorScheme === 'grayscale') {
        if (colorRand < 0.1) return '#A3A3A3';
        if (colorRand < 0.4) return '#525252';
        return '#171717';
      } else {
        if (colorRand < 0.1) return '#9C6323';
        if (colorRand < 0.4) return '#F9A341';
        return '#FFEC40';
      }
    });
  }, [numRows, numCols, randomSeed, hiddenPercentage, completelyHiddenPercentage, colorScheme]);

  if (containerWidth === 0) {
    return <div ref={containerRef} className="w-full" style={{ height: containerHeight }} />;
  }

  return (
    <div
      ref={containerRef}
      className="z-10 w-full flex justify-center relative"
      style={{
        height: containerHeight,
      }}
    >
      <svg
        className="z-10 w-full h-full"
        viewBox={`0 0 ${containerWidth} ${containerHeight}`}
        preserveAspectRatio="none"
      >
        {randomPixels.map((fillColor, index) => {
          const rowIndex = Math.floor(index / numCols);
          const colIndex = index % numCols;

          if (!fillColor) return null;

          return (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={offsetX + pixelSize + (colIndex * (pixelSize + gapSize))}
              y={offsetY + pixelSize + (rowIndex * (pixelSize + gapSize))}
              width={pixelSize}
              height={pixelSize}
              fill={fillColor}
            />
          );
        })}
      </svg>

      {/* <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-neutral-700 rounded-lg p-4 w-80 space-y-4 z-20">
        <h2 className="text-sm font-bold text-white">Grid Controls</h2>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-neutral-300">Gap Multiplier</label>
            <span className="text-xs text-blue-400 font-mono">{gapMultiplier.toFixed(1)}</span>
          </div>
          <Slider
            value={[gapMultiplier]}
            onValueChange={(value) => setGapMultiplier(value[0])}
            min={0.5}
            max={10}
            step={0.5}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-neutral-300">Rows</label>
            <span className="text-xs text-blue-400 font-mono">{numRows}</span>
          </div>
          <Slider
            value={[numRows]}
            onValueChange={(value) => setNumRows(value[0])}
            min={32}
            max={256}
            step={8}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-neutral-300">Hidden %</label>
            <span className="text-xs text-blue-400 font-mono">{hiddenPercentage}</span>
          </div>
          <Slider
            value={[hiddenPercentage]}
            onValueChange={(value) => setHiddenPercentage(value[0])}
            min={0}
            max={100}
            step={1}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-neutral-300">Completely Hidden %</label>
            <span className="text-xs text-blue-400 font-mono">{completelyHiddenPercentage}</span>
          </div>
          <Slider
            value={[completelyHiddenPercentage]}
            onValueChange={(value) => setCompletelyHiddenPercentage(value[0])}
            min={0}
            max={100}
            step={1}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-neutral-300">Animation Speed</label>
            <span className="text-xs text-blue-400 font-mono">{animationSpeed}ms</span>
          </div>
          <Slider
            value={[animationSpeed]}
            onValueChange={(value) => setAnimationSpeed(value[0])}
            min={10}
            max={200}
            step={10}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-neutral-300">Seed Intensity</label>
            <span className="text-xs text-blue-400 font-mono">{seedIntensity.toFixed(2)}</span>
          </div>
          <Slider
            value={[seedIntensity]}
            onValueChange={(value) => setSeedIntensity(value[0])}
            min={0.01}
            max={1}
            step={0.01}
          />
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-300 block mb-2">Color Scheme</label>
          <div className="flex gap-2">
            <button
              onClick={() => setColorScheme('color')}
              className={`flex-1 py-1 px-2 rounded text-xs font-medium transition-colors ${
                colorScheme === 'color'
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
              }`}
            >
              Color
            </button>
            <button
              onClick={() => setColorScheme('grayscale')}
              className={`flex-1 py-1 px-2 rounded text-xs font-medium transition-colors ${
                colorScheme === 'grayscale'
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
              }`}
            >
              Grayscale
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PixelGridBottom;
