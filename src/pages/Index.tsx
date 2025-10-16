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
          {/* Header */}
          <ContentSection id="platanus">
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 flex items-center gap-3">
                <img src="/lovable-uploads/e9ec9899-0f84-4b12-9ac6-b81c4d9b51ca.png" alt="Platanus Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                Platanus Forum '25
              </h1>
            </div>
          </ContentSection>

          {/* Intro / Invitación principal */}
          <ContentSection id="intro" className="mb-8">
            <div className="space-y-4">
              <p className="text-inherit font-normal text-white">Un día para juntar a nuestros <span className="text-primary">fundadores</span>, <span className="text-primary">inversionistas</span> y <span className="text-primary">amigos</span> de Platanus.</p>
              <div className="flex justify-end">
                <img src="/assets/unsummit.svg" alt="Un summit" className="max-h-24 w-auto" />
              </div>
              <img src="/lovable-uploads/Portada.jpg" alt="Platanus Forum presentation with speakers on stage" className="w-full object-cover rounded-lg" />
              <div className="flex justify-center">
                <div className="bg-primary/20 rounded-lg px-8 py-6 border border-primary/40 inline-block">
                  <p className="text-lg sm:text-xl font-semibold text-white text-center">Jueves 20 de noviembre</p>
                  <p className="text-lg sm:text-xl font-semibold text-white text-center">08:30 a 19:00</p>
                  <p className="text-lg sm:text-xl font-semibold text-white text-center">Santiago</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a href="https://luma.com/7arkbzzf" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-md bg-primary text-background hover:opacity-90 transition">Confirmar asistencia</a>
         </div>
            </div>
          </ContentSection>

          {/* Detalles */}
          <ContentSection id="detalles">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Dame más detalles de lo que es</h2>
            <p className="font-normal text-inherit">A lo largo de la historia han existido núcleos espacio-temporales donde hay una concentración de genialidad. Piensen en Atenas siglo IV aC, Florencia siglo XV, Londres en el XVI o actualmente Silicon Valley.</p>
            <p className="font-normal text-inherit">Esta concentración es multifactorial, pero en Platanus creemos que la reunión de personas talentosas explorando ideas y construyendo cosas nuevas juega un papel importante.</p>
            <p className="font-normal text-inherit">Este espíritu de creación es contagioso. Las ideas se comparten y mejoran, el talento atrae más talento y se va generando un círculo virtuoso.</p>
            <p className="font-normal text-inherit">Platanus tiene en su red a +300 fundadores, 110 inversionistas y una extensa red de amigos.</p>
            <p className="font-normal text-primary">Hay un exceso de genialidad que debe aprovecharse y para eso esta Platanus Forum. Para que la gente en nuestra comunidad se tope, converse, fluyan las ideas y salgan nuevas oportunidades.</p>
          </ContentSection>

          {/* Ya ok, ¿qué gano? */}
          <ContentSection id="gano">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Ya ok, ¿qué gano?</h2>
            <p className="font-normal text-inherit">Queremos que cada asistente logre tres cosas con esta concentración de personas interesantes:</p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li className="font-normal text-inherit">Salir con <span className="text-primary">ají en el c#|°</span> para construir/empujar/invertir/investigar sobre startups.</li>
              <li className="font-normal text-inherit">Llevarse al menos una <span className="text-primary">idea, mensaje o aprendizaje</span> que pueda aplicar en su vida laboral o personal.</li>
              <li className="font-normal text-inherit"><span className="text-primary">Nuevos contactos</span> que agreguen valor.</li>
            </ul>
          </ContentSection>

          {/* Formato */}
          <ContentSection id="formato">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Cuéntame sobre el formato porfa</h2>
            <p className="font-normal text-inherit">Para lograr los objetivos debe haber un equilibrio entre:</p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li className="font-normal text-inherit"><span className="text-primary">Speakers:</span> nos gusta traer a fundadores haciendo cosas distintas a lo que vemos en el día a día en Latam.</li>
              <li className="font-normal text-inherit"><span className="text-primary">Momentos para conocer lo que hacen los demás:</span>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li className="font-normal text-inherit"><span className="text-primary">De forma estructurada:</span> mini presentaciones de desafíos que tienen las startups del portafolio o nuestros inversionistas además de un ejemplo en vivo de nuestro famoso "Coliseo".</li>
                  <li className="font-normal text-inherit"><span className="text-primary">De forma desestructurada:</span> desayuno, almuerzo, "recreos". <img src="/assets/akanetworking.svg" alt="a.k.a networking" className="inline-block max-h-14 w-auto ml-2 align-middle" /></li>
                </ul>
              </li>
              <li className="font-normal text-inherit"><span className="text-primary">Conversaciones de la vida:</span> las mejores conexiones salen cuando se hablan trivialidades con un mocktail o una cerveza.</li>
            </ul>
          </ContentSection>

          {/* Comunidad */}
          <ContentSection id="comunidad">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Soy de los que necesitan saber quiénes van para convencerme</h2>
            <p className="font-normal text-inherit">Nuestra comunidad:</p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li className="font-normal text-inherit">Fundadores del portafolio</li>
              <li className="font-normal text-inherit">Mentores</li>
              <li className="font-normal text-inherit">Inversionistas (LPs)</li>
              <li className="font-normal text-inherit">Amigos (fundadores, VC, gente interesada en startups)</li>
            </ul>
          </ContentSection>

          {/* Caras (texto simple) */}
          <ContentSection id="caras">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">No, pero en serio, necesito ver caras</h2>
            <p className="font-normal text-inherit">Les mandaremos la agenda una vez confirmemos a los últimos speakers y presentadores.</p>
            
            {/* Carrousel de mentores: Prontamente (movido aquí) */}
            <div className="w-full overflow-hidden relative mt-6 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
              <div className="flex gap-4 sm:gap-6 lg:gap-8" style={{ animation: 'scroll-mentors 40s linear infinite', width: 'fit-content' }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-40 flex flex-col items-center p-2">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-2 border border-primary/40 bg-muted/30 flex items-center justify-center">
                      <span className="text-xs sm:text-sm text-primary">Prontamente</span>
                    </div>
                  </div>
                ))}
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
              <li className="font-normal text-inherit">VC fund: <span className="text-primary">28%</span></li>
               </ul>
            <p className="font-normal text-inherit mb-2">En cuanto a los speakers, trajimos a los fundadores de:</p>
            <ul className="space-y-2 mb-6 list-disc ml-6">
              <li className="font-normal text-inherit"><a href="https://platan-dot-yamm-track.appspot.com/2knOWeIKG8tgZvQLga0F1xT31MTTvGW1mRBbuEXRalan4qc5GlAEItVS7ykkdaQLb3pwnReW47cGXocMrVggivsKF4mCpGhkkDSf0K8_---fp6bu_16qogE2KO4csBjWNMRl8PB3wxKmPl7dmnNCYcAtgOmCvJEx7WM-nWFdpmELnOpMu" className="text-primary underline">AstroForge</a>: minería de asteroides</li>
              <li className="font-normal text-inherit"><a href="https://platan-dot-yamm-track.appspot.com/2f_z8Ivpnzt0o4B7Ivc2HijGTnLJha9bi2yf5FTzzQaEBqs5GlAGVnvbvICwUEoAF47AcsqI-5l3H-0kva_dsl_VJ4QaKsVhVfkvwZMUBgA9As3yKMpYO-u87dFJ6A85_B04ILBwAzWuv3rO2j6mQz1Vy71YefIksuX2wMmwHspo" className="text-primary underline">EarthAI</a>: AI para la exploración y perforación minera.</li>
              <li className="font-normal text-inherit"><a href="https://platan-dot-yamm-track.appspot.com/2VR8TYLuAA7D4dJSzsrbC_DugvG99wrLX7y0zHYh1izQDqs5GlAFjB3jPIpfaL91juTy4Z2ysJJ-mL7UN3vAqps45gUGTmgPGDCWpq-xjfHJhg2BjR1L3cDXP3xAuJ9oD_6G9hJ9wjOxzzZIpnQfDzcTCDpnqWv47FH3ET4SgmRin_eR6H71K5A" className="text-primary underline">Maverick Biometals</a>: extracción y procesamiento de metales con biotecnología.</li>
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

          {/* Chile Tech Week */}
          <ContentSection id="tech-week">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Chile Tech Week</h2>
            <p className="font-normal text-inherit">Platanus Forum se realiza la misma semana que la <a href="https://techweek.cl/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Chile Tech Week</a>, que va del lunes 17 al domingo 23 de noviembre.</p>
            <p className="font-normal text-inherit mt-4">En esta semana se congregan VC y fundadores de todo Latam, destacando:</p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li className="font-normal text-inherit">Nuestra <a href="https://hack.platan.us/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Platanus Hack</a></li>
              <li className="font-normal text-inherit"><a href="https://cumbreacvc.cl/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Cumbre ACVC</a></li>
              <li className="font-normal text-inherit"><a href="https://www.emprendetumente.org/programa-2024" target="_blank" rel="noopener noreferrer" className="text-primary underline">ETM Day</a></li>
              <li className="font-normal text-inherit">Side events de VCs y startups.</li>
            </ul>
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