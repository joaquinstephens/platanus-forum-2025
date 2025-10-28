import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import RotatingBanana from "../RotatingBanana";
import Floating, { FloatingElement } from "../ui/parallax-floating";
import { Badge } from "../ui/badge";
import { TerminalOutput } from "../ui/terminal-output";
import { motion, stagger, useAnimate } from "motion/react"
import Component from "@/components/ui/faulty-terminal";


// const GALLERY_IMAGES = [
//   {
//     src: "/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png",
//     alt: "Platanus Forum presentation with mining displays",
//   },
//   {
//     src: "/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png",
//     alt: "Earth AI presentation at forum",
//   },
//   {
//     src: "/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png",
//     alt: "Gizmodo asteroid mining presentation",
//   },
//   {
//     src: "/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png",
//     alt: "AstroForge speaker presenting",
//   },
//   {
//     src: "/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png",
//     alt: "Platanus Forum presentation",
//   },
//   {
//     src: "/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png",
//     alt: "Forum attendees listening",
//   },
//   {
//     src: "/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png",
//     alt: "Speaker at Platanus Forum",
//   },
//   {
//     src: "/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png",
//     alt: "Audience at the forum",
//   },
//   {
//     src: "/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png",
//     alt: "Person working during event",
//   },
//   {
//     src: "/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png",
//     alt: "Networking on terrace",
//   },
//   {
//     src: "/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png",
//     alt: "Outdoor networking event",
//   },
//   {
//     src: "/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png",
//     alt: "Attendees networking",
//   },
// ];

const FADE_END_BLUR = 48;
const FADE_DURATION_PERCENT = 0.5;
const FADE_START_PERCENT = 0.1; // Start fade at 20% of scroll

const linear = (t: number) => t;

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [blurAmount, setBlurAmount] = useState(0);
  const [bananaOpacity, setBananaOpacity] = useState(1);
  const [scope, animate] = useAnimate()


  useEffect(() => {
    const handleScroll = () => {
      const element = heroRef.current;
      if (!element) return;

      const elementHeight = element.clientHeight;
      const scrollStart = elementHeight * FADE_START_PERCENT;
      const scrollRange = elementHeight * FADE_DURATION_PERCENT;
      const rawProgress = Math.max(0, Math.min(1, (window.scrollY - scrollStart) / scrollRange));
      const easedProgress = linear(rawProgress);

      setBlurAmount(Math.min(FADE_END_BLUR, easedProgress * FADE_END_BLUR));
      setBananaOpacity(Math.max(0, 1 - easedProgress));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate]);

  return (
    <section
      ref={scope}
      className="sticky top-0 inset-x-0"
      style={{ filter: `blur(${blurAmount}px)`, opacity: Math.max(0, 1 - blurAmount / FADE_END_BLUR), pointerEvents: blurAmount > FADE_END_BLUR * 0.5 ? 'none' : 'auto' }}
    >
      <div className="z-10 md:hidden absolute inset-x-0 w-screen top-0 bg-gradient-to-b from-black to-transparent h-24" />

      <img src="/mut.jpg" alt="Oficinas de Buk" className="hidden grayscale -z-10 w-full h-full inset-0 absolute object-cover opacity-60" />
      {/* <div className="-z-10 w-full h-full inset-0 absolute" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)' }} />
      <div className="-z-10 w-full h-full inset-0 absolute" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' }} /> */}

      <div className="hidden absolute inset-0 w-full h-full min-h-svh justify-center items-center overflow-hidden">
        <Floating sensitivity={1} easingFactor={0.08}>
          <FloatingElement depth={1} className="top-[8%] left-[11%]">
            <img
              src="/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png"
              alt="Platanus Forum presentation with mining displays"
              className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[19%] left-[56%] md:top-[10%] md:left-[32%]">
            <img src="/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png" alt="Earth AI presentation at forum"             className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform" />
          </FloatingElement>
          <FloatingElement depth={3} className="top-[2%] left-[85%] md:top-[2%] md:left-[53%]">
            <img src="/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png" alt="Gizmodo asteroid mining presentation"             className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
 />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[83%] left-[10%] md:top-[0%] md:left-[83%]">
            <img src="/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png" alt="AstroForge speaker presenting"             className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
 />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[73%] left-[65%] md:top-[40%] md:left-[2%]">
            <img src="/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png" alt="Platanus Forum presentation"             className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
 />
          </FloatingElement>
          <FloatingElement depth={3} className="top-[95%] left-[55%] md:top-[60%] md:left-[77%]">
            <img src="/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png" alt="Forum attendees listening" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement>
          <FloatingElement depth={1} className="sr-only md:top-[73%] md:left-[15%]">
            <img src="/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png" alt="Speaker at Platanus Forum" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement>
          {/* <FloatingElement depth={2} className="top-[80%] left-[50%]">
            <img src="/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png" alt="Audience at the forum" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement>
          <FloatingElement depth={3} className="top-[50%] left-[40%]">
            <img src="/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png" alt="Person working during event" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[50%] left-[55%]">
            <img src="/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png" alt="Networking on terrace" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[50%] left-[70%]">
            <img src="/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png" alt="Outdoor networking event" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement>
          <FloatingElement depth={3} className="top-[50%] left-[85%]">
            <img src="/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png" alt="Attendees networking" className="w-[60px] h-[60px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" />
          </FloatingElement> */}
        </Floating>
      </div>

      <motion.div
        ref={heroRef}
        className="z-10 min-h-svh flex flex-col items-center justify-center gap-8 md:gap-10 w-full mx-auto max-w-screen-xl transition-all duration-75 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 0.3 }}
      >
        <Badge className="hidden gap-2.5">
          Forum 2025
        </Badge>
        <h1 className="-mb-4 font-mono text-3xl md:text-6xl max-w-5xl px-4 text-balance leading-tight uppercase relative z-10">
          Platanus Forum '25
        </h1>

        <p className="font-mono max-w-lg leading-5 md:leading-6 md:text-base w-full px-8 uppercase text-sm text-muted-foreground">
          Un día para nuestros fundadores, inversionistas y amigos
        </p>

        <div className="p-1 w-full max-w-64 space-y-4 items-center">
          <Button className="w-full relative gap-4 z-10 pr-3" asChild>
            <Link to="https://luma.com/7arkbzzf" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <div className="size-1 shrink-0 bg-primary-foreground shadow-[0_0_8px_2px_var(--tw-shadow-color)] shadow-primary-foreground" />
                <div className="size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shrink-0 bg-primary-foreground/50 animate-ping blur-sm" />
              </div>
              Asegura tu cupo
            </Link>
          </Button>
          <TerminalOutput output={`Jueves 20.nov 08:30 a 22:00\n(Oficinas de Buk)[https://www.google.com/maps?sca_esv=3c78addd28f7a980&output=search&q=buk+oficinas&source=lnms&fbs=AIIjpHxMtlcgsqy-nC7XLLllhOr5bo8SRTrnCih88EF-Nzo8K1HwbfQfx36vp1zBe6bZjsU6jhL8zp_XUxREDT1-UWICCuBBIjFffj9e2fIBDe7rXDxJ3WRzg3cfA6YVsB33I7cUuChs-F8ykQAl3F0or0G2OkPSfPt-3NOOuAI3UP6EEWBgR0cq7f0d7nkk6m5HoyAbWvzcBLCJX34DsEK1vpJgMgU4pg&entry=mc&ved=1t:200715&ictx=111]. Santiago`} />
        </div>
      </motion.div>
    </section>
  );
};
