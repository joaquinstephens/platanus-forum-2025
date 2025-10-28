import { ImgHTMLAttributes } from "react";
import PixelateSvgFilter from "@/fancy/filter/pixelate-svg-filter";

interface PixelatedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  pixelSize?: number;
}

export function PixelatedImage({ pixelSize = 8, ...props }: PixelatedImageProps) {
  const filterId = "pixelate-global";

  return (
    <>
      <PixelateSvgFilter id={filterId} size={pixelSize} crossLayers />
      <img style={{ filter: `url(#${filterId})` }} {...props} />
    </>
  );
}
