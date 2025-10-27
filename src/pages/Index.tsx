import { useState, useEffect } from "react";
import { ContentSection } from "@/components/ContentSection";
import { StatCard } from "@/components/StatCard";
import { LinkList } from "@/components/LinkList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RotatingBanana from "@/components/RotatingBanana";
const Index = () => {
  const [activeSection, setActiveSection] = useState("platanus");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.3
    });
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-background relative">
      {/* Fixed rotating banana background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-80">
        <RotatingBanana modelPath="/assets/models/banana3d.glb" rotationSpeed={0.0025} pixelSize={1} gapRatio={1.5} customResolution={320} initialRotationAngle={0} solid={false} />
      </div>
      
      <main className="p-4 sm:p-8 lg:p-12 relative z-10 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Landing Page Header */}
          <ContentSection id="platanus" className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-8">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img src="/lovable-uploads/e9ec9899-0f84-4b12-9ac6-b81c4d9b51ca.png" alt="Platanus Logo" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
                PLATANUS FORUM 25
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Un día para juntar a nuestros <span className="text-primary font-semibold">fundadores</span>, <span className="text-primary font-semibold">inversionistas</span> y <span className="text-primary font-semibold">amigos</span> de Platanus.
              </p>
              
              {/* Date and Location Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                <div className="bg-white text-black px-4 py-2 rounded text-sm font-mono font-bold">
                  Jueves 20 de noviembre
                </div>
                <div className="border border-white text-white px-4 py-2 rounded text-sm font-mono font-bold">
                  SANTIAGO, CHILE
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-12">
                <a href="https://luma.com/7arkbzzf" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-md bg-primary text-black font-bold text-lg hover:opacity-90 transition uppercase tracking-wide">
                  Confirmar asistencia
                </a>
              </div>
            </div>
          </ContentSection>


          {/* Detalles */}
          <ContentSection id="detalles">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">El evento</h2>
            <p className="font-normal text-inherit">A lo largo de la historia han existido espacios donde hay una concentración de genialidad. Piensen en Atenas siglo IV aC, Florencia siglo XV, Londres en el XVI o actualmente Silicon Valley.</p>
            <p className="font-normal text-inherit">Esta concentración es multifactorial, pero en Platanus creemos que la reunión de personas talentosas explorando cosas nuevas juega un papel importante.</p>
            <p className="font-normal text-inherit">Este espíritu de creación es contagioso. Las ideas se comparten y mejoran, el talento atrae más talento y se va generando un círculo virtuoso.</p>
            <p className="font-normal text-inherit">Platanus tiene en su red a +300 fundadores, 120 inversionistas y una extensa red de amigos.</p>
            <p className="font-normal text-primary">Hay un exceso de genialidad que debe aprovecharse y para eso esta Platanus Forum. Que la gente en nuestra comunidad se tope, converse, fluyan las ideas y salgan nuevas oportunidades.</p>
          </ContentSection>


          {/* Formato */}
          <ContentSection id="formato">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">El formato</h2>
            <p className="font-normal text-inherit">Para lograr este objetivo el evento debe tener un equilibrio entre:</p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li className="font-normal text-inherit"><span className="text-primary">Fireside chats:</span> nos gusta traer a fundadores haciendo cosas distintas a lo que vemos en el día a día en Latam. Para esta versión contamos con:</li>
            </ul>
            
            {/* Speakers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Ignacio Beliers */}
              <div className="flex flex-col items-center text-center space-y-1">
                <a href="https://www.linkedin.com/in/ignacio-belieres-montero-14b457b6/" target="_blank" rel="noopener noreferrer" className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40 hover:border-primary transition-colors">
                  <img src="/lovable-uploads/4ca3c16b-eb9a-4fb0-a1a9-f6b1174d0aec.png" alt="Ignacio Beliers" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-primary">Ignacio Beliers</h3>
                  <a href="https://epic-aerospace.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-primary transition-colors">Epic Aerospace</a>
                </div>
                <p className="text-sm text-white">Epic Aerospace está construyendo una línea de Orbit Transfer Vehicles (OTVs), vehículos espaciales que permite transportar carga a cualquier órbita desde lanzamientos espaciales.</p>
                  </div>

              {/* Roger Rea */}
              <div className="flex flex-col items-center text-center space-y-1">
                <a href="https://www.linkedin.com/in/rogeliorea/" target="_blank" rel="noopener noreferrer" className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40 hover:border-primary transition-colors">
                  <img src="/lovable-uploads/roger.jpeg" alt="Roger Rea" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-primary">Roger Rea</h3>
                  <a href="https://grupalia.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-primary transition-colors">Grupalia</a>
                </div>
                <p className="text-sm text-white">Grupalia otorga créditos grupales a comunidades de micro empresarios en México.</p>
                  </div>

              {/* Roman Teslyuk */}
              <div className="flex flex-col items-center text-center space-y-1">
                <a href="https://www.linkedin.com/in/roman-teslyuk-a344881a/" target="_blank" rel="noopener noreferrer" className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40 hover:border-primary transition-colors">
                  <img src="/lovable-uploads/3add01c8-aff6-4ac5-b726-588ba0a5cd4a.png" alt="Roman Teslyuk" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-primary">Roman Teslyuk</h3>
                  <a href="https://earth-ai.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-primary transition-colors">Earth AI</a>
                </div>
                <p className="text-sm text-white">Earth AI es una startup australiana de exploración y perforación minera con un fuerte componente de AI para encontrar los mejores yacimientos.</p>
                  </div>

              {/* Francesco Crivelli */}
              <div className="flex flex-col items-center text-center space-y-1">
                <a href="https://www.linkedin.com/in/francesco-crivelli/" target="_blank" rel="noopener noreferrer" className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40 hover:border-primary transition-colors">
                  <img src="/lovable-uploads/Francesco.jpeg" alt="Francesco Crivelli" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-primary">Francesco Crivelli</h3>
                  <a href="https://intuition.dev/" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-primary transition-colors">Intuition Core</a>
                </div>
                <p className="text-sm text-white">Intuition está armando la primera infraestructura para que la robótica puede implementarse en situaciones realeas de forma confiable y rápida.</p>
                    </div>
                  </div>
            
            {/* Additional format details */}
            <div className="mt-8 space-y-4">
              <ul className="list-disc ml-6 space-y-4">
                <li className="font-normal text-inherit">
                  <span className="text-primary">Momentos para conocer lo que hacen los demás de forma estructurada:</span>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li className="font-normal text-inherit">Ejemplo en vivo de nuestro "Coliseo": 2 de nuestras startups hacen preguntas sobre sus negocios a 2 de nuestros mentores.</li>
                    
                    {/* Coliseo speakers */}
                    <div className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center text-center space-y-1">
                          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40">
                            <img src="/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.png" alt="Pedro Pineda" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                          <h4 className="text-lg font-bold text-primary">Pedro Pineda</h4>
                          <p className="text-lg text-white font-medium">Fintual</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center space-y-1">
                          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40">
                            <img src="/lovable-uploads/f16b08ff-2ca9-438d-a1b5-68c3a3b166d9.png" alt="Jaime Arrieta" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                          <h4 className="text-lg font-bold text-primary">Jaime Arrieta</h4>
                          <p className="text-lg text-white font-medium">Buk</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-primary mt-3 text-center">Mentores del Coliseo</p>
                    </div>
                    <li className="font-normal text-inherit">Conoce lo que hacen cinco startups del portafolio: nos son pitches. Cada una presentará un reto tecnológico o algo único que están haciendo.</li>
                  </ul>
                </li>
                <li className="font-normal text-inherit">
                  <span className="text-primary">Momentos para conocer lo que hacen los demás de forma desestructurada:</span> desayuno, almuerzo, tiempos libres y un cierre en un bar.
                </li>
              </ul>
            </div>
          </ContentSection>

          {/* Agenda */}
          <ContentSection id="agenda">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Agenda</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Desayuno</span>
                <span className="text-white font-medium">08:30 - 09:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Apertura de Platanus</span>
                <span className="text-white font-medium">09:30 - 09:50</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Palabras de Maxxa</span>
                <span className="text-white font-medium">09:50 - 10:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Fireside chat with Roman Teslyuk</span>
                <span className="text-white font-medium">10:00 - 11:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Coliseo en vivo (Pedro y Jaime)</span>
                <span className="text-white font-medium">11:00 - 12:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Fireside chat with Rogelio Rea</span>
                <span className="text-white font-medium">12:00 - 13:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Almuerzo</span>
                <span className="text-white font-medium">13:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Eleven Labs</span>
                <span className="text-white font-medium">14:00 - 14:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Fireside chat with Francesco Crivelli</span>
                <span className="text-white font-medium">14:30 - 15:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Conoce a startups de Platanus</span>
                <span className="text-white font-medium">15:30 - 16:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Fireside chat with Ignacio Beliers</span>
                <span className="text-white font-medium">16:30 - 17:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/20">
                <span className="text-white">Cocktail de cierre</span>
                <span className="text-white font-medium">18:30 - 22:00</span>
              </div>
            </div>
          </ContentSection>

          {/* Evento del año pasado */}
          <ContentSection id="evento-pasado">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Evento del año pasado</h2>
            <p className="font-normal text-inherit">El año pasado juntamos a <span className="text-primary">150</span> personas de nuestra comunidad repartidos entre:</p>
            <ul className="space-y-2 mb-6 list-disc ml-6 mt-4">
              <li className="font-normal text-inherit">Fundadores: <span className="text-primary">52%</span></li>
              <li className="font-normal text-inherit">LPs: <span className="text-primary">20%</span></li>
              <li className="font-normal text-inherit">VC funds: <span className="text-primary">28%</span></li>
               </ul>
            {/* Carrusel vertical (se mantiene) */}
              <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden my-8 rounded-lg">
                {/* Top fade effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
                {/* Bottom fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
                
                <div style={{
                animation: 'verticalScroll 30s linear infinite',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem'
              }} className="sm:grid-cols-3 sm:gap-4">
                  {/* First complete set */}
                  <img src="/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png" alt="Platanus Forum presentation with mining displays" className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png",
                  alt: "Platanus Forum presentation with mining displays"
                })} />
                  <img src="/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png" alt="Earth AI presentation at forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png",
                  alt: "Earth AI presentation at forum"
                })} />
                  <img src="/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png" alt="Gizmodo asteroid mining presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png",
                  alt: "Gizmodo asteroid mining presentation"
                })} />
                  <img src="/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png" alt="AstroForge speaker presenting" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png",
                  alt: "AstroForge speaker presenting"
                })} />
                  <img src="/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png" alt="Platanus Forum presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png",
                  alt: "Platanus Forum presentation"
                })} />
                  <img src="/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png" alt="Forum attendees listening" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png",
                  alt: "Forum attendees listening"
                })} />
                  <img src="/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png" alt="Speaker at Platanus Forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png",
                  alt: "Speaker at Platanus Forum"
                })} />
                  <img src="/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png" alt="Audience at the forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png",
                  alt: "Audience at the forum"
                })} />
                  <img src="/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png" alt="Person working during event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png",
                  alt: "Person working during event"
                })} />
                  <img src="/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png" alt="Networking on terrace" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png",
                  alt: "Networking on terrace"
                })} />
                  <img src="/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png" alt="Outdoor networking event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png",
                  alt: "Outdoor networking event"
                })} />
                  <img src="/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png" alt="Attendees networking" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png",
                  alt: "Attendees networking"
                })} />
                  
                  {/* Second complete set for seamless infinite loop */}
                  <img src="/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png" alt="Platanus Forum presentation with mining displays" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png",
                  alt: "Platanus Forum presentation with mining displays"
                })} />
                  <img src="/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png" alt="Earth AI presentation at forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png",
                  alt: "Earth AI presentation at forum"
                })} />
                  <img src="/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png" alt="Gizmodo asteroid mining presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png",
                  alt: "Gizmodo asteroid mining presentation"
                })} />
                  <img src="/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png" alt="AstroForge speaker presenting" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png",
                  alt: "AstroForge speaker presenting"
                })} />
                  <img src="/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png" alt="Platanus Forum presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png",
                  alt: "Platanus Forum presentation"
                })} />
                  <img src="/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png" alt="Forum attendees listening" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png",
                  alt: "Forum attendees listening"
                })} />
                  <img src="/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png" alt="Speaker at Platanus Forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png",
                  alt: "Speaker at Platanus Forum"
                })} />
                  <img src="/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png" alt="Audience at the forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png",
                  alt: "Audience at the forum"
                })} />
                  <img src="/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png" alt="Person working during event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png",
                  alt: "Person working during event"
                })} />
                  <img src="/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png" alt="Networking on terrace" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png",
                  alt: "Networking on terrace"
                })} />
                  <img src="/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png" alt="Outdoor networking event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png",
                  alt: "Outdoor networking event"
                })} />
                  <img src="/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png" alt="Attendees networking" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png",
                  alt: "Attendees networking"
                })} />
                </div>
              </div>

              {/* Image Modal */}
              <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                  <div className="relative">
                    {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />}
                  </div>
                </DialogContent>
              </Dialog>
          </ContentSection>


          {/* Fecha y hora */}
          <ContentSection id="fecha">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">No retuve la fecha y hora</h2>
            <div className="flex justify-center">
              <div className="bg-primary/20 rounded-lg px-8 py-6 border border-primary/40 inline-block">
                <p className="text-lg sm:text-xl font-semibold text-white text-center">Platanus Forum será el jueves 20 de noviembre 2025</p>
                <p className="text-lg sm:text-xl font-semibold text-white text-center">de 08:30 a 19:00</p>
                <p className="text-lg sm:text-xl font-semibold text-white text-center">Santiago (lugar por confirmar)</p>
                </div>
            </div>
            <div className="mt-12 flex justify-center">
              <a href="https://luma.com/7arkbzzf" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-md bg-primary text-background hover:opacity-90 transition">Confirmar asistencia</a>
            </div>
          </ContentSection>

            {/* Logo below pictures */}
            <div className="flex justify-center mt-2 mb-8">
            <div className="w-64 h-64 lg:w-96 lg:h-96">
              <img src="/lovable-uploads/0f3371ba-2aa4-4033-85b0-6985b333647d.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>
      </main>
    </div>;
};
export default Index;