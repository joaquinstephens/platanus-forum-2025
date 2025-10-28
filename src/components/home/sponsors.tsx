import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const shimmerWidth = 150;

export default function Sponsors() {
  const shimmerStyle = {
    "--shiny-width": `${shimmerWidth}%`,
  } as CSSProperties;

  return (
    <section className="mt-32 mb-24 max-w-screen-lg w-full px-8 mx-auto flex flex-col justify-start items-start gap-8">
      <div className="-mb-4 h-0.5 w-full bg-yellow-300" />

      <span className="uppercase mr-auto font-mono px-4 py-2 text-3xl bg-yellow-300 text-black">
        Main sponsor
      </span>

      <Link
        to="https://www.buk.cl/"
        style={shimmerStyle}
        className="bg-foreground/[3%] backdrop-blur-lg group ease-out transition-transform w-full p-8 flex items-center justify-center border-2 border-border font-mono uppercase h-auto text-left *:px-4 *:py-4 animate-shiny-text bg-no-repeat [background-size:var(--shiny-width)_100%] bg-gradient-to-r from-transparent via-foreground/ via-50% to-transparent"
      >
        <div className="sr-only">Buk</div>
        <img src="/logos/logo-buk.svg" className="scale-100 group-hover:scale-105 ease-out" />
      </Link>

      <div className="mt-16 -mb-4 h-0.5 w-full bg-muted brightness-[300%]" />

      <span className="uppercase mr-auto font-mono px-4 py-2 text-3xl brightness-[300%] bg-muted text-black">
        Sponsors
      </span>

      <div className="w-full flex gap-8">
        <Link
          to="https://www.buk.cl/"
          style={shimmerStyle}
          className="bg-foreground/[3%] backdrop-blur-lg group ease-out transition-transform w-full p-4 flex items-center justify-center border-2 border-neutral-800 font-mono uppercase h-auto text-left *:px-4 *:py-4 animate-shiny-text bg-no-repeat [background-size:var(--shiny-width)_100%] bg-gradient-to-r from-transparent via-foreground/ via-50% to-transparent"
        >
          <div className="sr-only">Buk</div>
          <img src="/logos/logo-buk.svg" className="scale-100 group-hover:scale-105 ease-out" />
        </Link>

        <Link
          to="https://www.buk.cl/"
          style={shimmerStyle}
          className="bg-foreground/[3%] backdrop-blur-lg group ease-out transition-transform w-full p-4 flex items-center justify-center border-2 border-neutral-800 font-mono uppercase h-auto text-left *:px-4 *:py-4 animate-shiny-text bg-no-repeat [background-size:var(--shiny-width)_100%] bg-gradient-to-r from-transparent via-foreground/ via-50% to-transparent"
        >
          <div className="sr-only">Buk</div>
          <img src="/logos/logo-buk.svg" className="scale-100 group-hover:scale-105 ease-out" />
        </Link>
      </div>
    </section>
  );
}
