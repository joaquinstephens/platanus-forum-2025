import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const shimmerWidth = 150;

export default function Sponsors() {
  const shimmerStyle = {
    "--shiny-width": `${shimmerWidth}%`,
  } as CSSProperties;

  return (
    <section className="z-20 my-12 md:my-24 max-w-4xl w-full md:px-4 mx-auto flex flex-col justify-start items-start gap-14">
      <span className="px-8 font-mono uppercase text-foreground">
        {'< Sponsors />'}
      </span>
      <div className="[&_img]:select-none max-w-lg mx-auto grid place-items-center grid-cols-2 gap-24">
        <Link
          to="https://www.gomaxxa.com/registro-paso-1?gad_campaignid=22877723910&gbraid=0AAAAABSmpvEAlw2lW1qFuDnz2v0wUxoPD"
          className="px-8 col-span-full flex-1 group flex items-center justify-center"
        >
          <div className="sr-only">Maxxa</div>
          <img src="https://hack.platan.us/_next/image?url=%2Fassets%2Flogos%2Fmaxxa.png&w=3840&q=75" className="scale-100 md:group-hover:scale-105 duration-300 transition-transform ease-out" alt="MAXXA" />
        </Link>

        <Link
          to="https://www.buk.cl/"
          className="px-8 col-span-full w-1/2 flex-1 group flex items-center justify-center"
        >
          <div className="sr-only">Buk</div>
          <img src="/logos/buk.png" className="scale-100 md:group-hover:scale-105 duration-300 transition-transform ease-out" alt="Buk" />
        </Link>
      </div>
      {/* <div
        className="bg-foreground/5 group relative flex flex-col w-full border-2 border-primary-foreground overflow-clip backdrop-blur-sm"
        style={shimmerStyle}
      >
        <span className="uppercase mr-auto font-mono px-3 w-full text-center md:text-left py-1 text-base bg-yellow-300 text-black">
          Main sponsor
        </span>

        <Link
          to="https://www.buk.cl/"
          className="w-full p-16 flex items-center justify-center"
        >
          <div className="sr-only">Buk</div>
          <img src="/logos/buk.png" className="scale-100 md:group-hover:scale-105 duration-300 transition-transform ease-out" />
        </Link>
      </div>

      <div className="bg-foreground/5 relative flex flex-col w-full border-2 border-white/10 overflow-clip backdrop-blur-sm">
        <span className="uppercase mr-auto font-mono px-3 w-full text-center md:text-left py-1 text-base bg-white/10 text-foreground/35">
          Sponsors
        </span>

        <div className="w-full divide-x-2 divide-white/10 flex">
          <Link
            to="https://www.buk.cl/"
            className="flex-1 group p-8 md:p-16 flex items-center justify-center"
          >
            <div className="sr-only">Buk</div>
            <img src="/logos/buk.png" className="scale-100 md:group-hover:scale-105 duration-300 transition-transform ease-out" />
          </Link>

          <Link
            to="https://www.buk.cl/"
            className="flex-1 group p-8 md:p-16 flex items-center justify-center"
          >
            <div className="sr-only">Buk</div>
            <img src="/logos/buk.png" className="scale-100 md:group-hover:scale-105 duration-300 transition-transform ease-out" />
          </Link>
        </div>
      </div> */}
    </section>
  );
}
