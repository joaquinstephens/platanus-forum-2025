import { Hero } from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Agenda from "@/components/home/agenda";
import Sponsors from "@/components/home/sponsors";
import TerminalNavbar from "@/components/layout/terminal-navbar";
import RotatingBanana from "@/components/RotatingBanana";
import PixelGridBottom from "@/components/home/pixel-grid-bottom";
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <main className="relative text-center min-h-screen">
      <div className="-z-20 fixed inset-0 flex items-center justify-center pointer-events-none" style={{ animation: 'fade-in-delayed 0.8s ease-in-out 0.6s forwards' }}>
        <RotatingBanana modelPath="/assets/models/banana3d.glb" />
      </div>

      <Hero />

      <Intro />

      <Agenda />

      <Sponsors />

      <div className="w-full flex flex-col items-center gap-6 justify-center pb-12 pt-32 mx-auto">
        <h2 className="z-10 font-mono text-3xl md:text-4xl max-w-5xl text-balance leading-tight uppercase">
          No te lo pierdas
        </h2>
      </div>

      <TerminalNavbar />

      <div className="relative -mt-[576px]">
        <PixelGridBottom gapMultiplier={4} />

        <div className="md:max-w-sm text-muted-foreground absolute px-8 bottom-12 left-1/2 -translate-x-1/2 z-20 flex justify-between w-full font-mono uppercase [&_a]:underline [&_a]:decoration-muted-foreground/15 [&_a]:px-2 [&_a]:py-1 [&_a]:bg-black">
          <img
            src="/platanus.svg"
            alt="Platanus logo"
            width={164}
            height={40}
            className="px-4 absolute mx-auto bottom-14 left-1/2 -translate-x-1/2 bg-black h-9 z-20"
          />

          <Link to="https://www.linkedin.com/school/platanus/" target="_blank">
            LinkedIn
          </Link>

          <Link to="https://github.com/platanus" target="_blank">
            GitHub
          </Link>

          <Link to="https://www.instagram.com/platanusventures" target="_blank">
            Instagram
          </Link>
        </div>
        <div className="absolute -z-10 bottom-0 w-screen left-1/2 -translate-x-1/2 bg-gradient-to-t from-black from-25% to-transparent h-[150svh]" />
      </div>
    </main>
  );
};
export default Index;
