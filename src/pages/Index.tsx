import { Hero } from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Agenda from "@/components/home/agenda";
import Sponsors from "@/components/home/sponsors";
import TerminalNavbar from "@/components/layout/terminal-navbar";
import RotatingBanana from "@/components/RotatingBanana";
import PixelGridBottom from "@/components/home/pixel-grid-bottom";
import { Link } from "react-router-dom";
import { TerminalOutput } from "@/components/ui/terminal-output";
import Gallery from "@/components/home/gallery";
import { useState, useEffect } from "react";

const Index = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.7;
      setBgOpacity(scrolled > threshold ? 1 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-center min-h-screen">
      <div className="fixed size-screen bg-background/1 backdrop-blur-sm inset-0 -z-10" style={{ opacity: bgOpacity }} />
      <div className="w-full overflow-hidden -z-20 fixed inset-0 flex items-center justify-center pointer-events-none" style={{ animation: 'fade-in-delayed 0.8s ease-in-out 0.6s forwards' }}>
        <RotatingBanana modelPath="/assets/models/banana3d.glb" />
      </div>

      <Hero />

      <Intro />

      <Agenda />

      <Gallery />

      <Sponsors />

      <div className="w-full flex flex-col items-center justify-center pb-8 pt-32 mx-auto">
        <h2 className="z-20 font-mono text-3xl md:text-4xl max-w-5xl text-balance leading-tight uppercase">
          No te lo pierdas
        </h2>

        <div className="flex bg-black mt-2">
          <TerminalOutput output={`Jueves 20.nov 08:30 a 22:00\n(Oficinas de Buk)[https://www.google.com/maps?sca_esv=3c78addd28f7a980&output=search&q=buk+oficinas&source=lnms&fbs=AIIjpHxMtlcgsqy-nC7XLLllhOr5bo8SRTrnCih88EF-Nzo8K1HwbfQfx36vp1zBe6bZjsU6jhL8zp_XUxREDT1-UWICCuBBIjFffj9e2fIBDe7rXDxJ3WRzg3cfA6YVsB33I7cUuChs-F8ykQAl3F0or0G2OkPSfPt-3NOOuAI3UP6EEWBgR0cq7f0d7nkk6m5HoyAbWvzcBLCJX34DsEK1vpJgMgU4pg&entry=mc&ved=1t:200715&ictx=111]. Santiago`} />
        </div>
      </div>

      {/* <TerminalNavbar /> */}

      <div className="relative -mt-[576px]">
        <PixelGridBottom gapMultiplier={4} />

        <div className="z-20 md:max-w-sm text-muted-foreground absolute px-8 bottom-8 left-1/2 -translate-x-1/2 flex justify-between w-full font-mono uppercase [&_a]:underline [&_a]:decoration-muted-foreground/15 [&_a]:px-2 [&_a]:py-1 [&_a]:bg-black">
          <img
            src="/platanus.svg"
            alt="Platanus logo"
            width={164}
            height={40}
            className="px-4 absolute mx-auto bottom-16 left-1/2 -translate-x-1/2 bg-black h-9 z-20"
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
