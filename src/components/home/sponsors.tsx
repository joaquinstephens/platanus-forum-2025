import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const shimmerWidth = 150;

export default function Sponsors() {
  const shimmerStyle = {
    "--shiny-width": `${shimmerWidth}%`,
  } as CSSProperties;

  return (
    <section className="my-12 md:my-24 max-w-screen-lg w-full px-8 mx-auto flex flex-col justify-start items-start gap-8">
      <div
        className="bg-foreground/5 group relative flex flex-col w-full border-2 border-primary-foreground overflow-clip backdrop-blur-sm"
        style={shimmerStyle}
      >
        <span className="uppercase mr-auto font-mono px-3 w-full text-center md:text-left py-1 text-base bg-yellow-300 text-black">
          Main sponsor
        </span>

        <Link
          to="https://www.buk.cl/"
          className="w-full p-8 flex items-center justify-center"
        >
          <div className="sr-only">Buk</div>
          <img src="/logos/logo-buk.svg" className="scale-100 md:group-hover:scale-105 ease-out" />
        </Link>
      </div>

      <div className="bg-foreground/5 group relative flex flex-col w-full border-2 border-white/10 overflow-clip backdrop-blur-sm">
        <span className="uppercase mr-auto font-mono px-3 w-full text-center md:text-left py-1 text-base bg-white/10 text-foreground/35">
          Sponsors
        </span>

        <div className="w-full divide-x-2 divide-white/10 flex">
          <Link
            to="https://www.buk.cl/"
            className="flex-1 p-8 flex items-center justify-center"
          >
            <div className="sr-only">Buk</div>
            <img src="/logos/logo-buk.svg" className="scale-100 md:group-hover:scale-105 ease-out" />
          </Link>

          <Link
            to="https://www.buk.cl/"
            className="flex-1 p-8 flex items-center justify-center"
          >
            <div className="sr-only">Buk</div>
            <img src="/logos/logo-buk.svg" className="scale-100 md:group-hover:scale-105 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
