import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface AgendaItem {
  time: {
    start: string
    end: string
  }
  title: string
  speakers?: string[]
  isBreak?: boolean
  backgroundImg?: string
  tagline?: string
  description?: string
  logo?: string
  link?: string
  profileImage?: string
  logoHeight?: string
  taglines?: string[]
  logos?: string[]
  links?: string[]
  profileImages?: string[]
  logoHeights?: string[]
}

const AGENDA_ITEMS: AgendaItem[] = [
  {
    time: { start: '08:30', end: '10:00' },
    title: 'Desayuno + contexto del evento',
    isBreak: true
  },
  {
    time: { start: '10:00', end: '11:00' },
    title: 'Fireside chat con Roman Teslyuk',
    speakers: ["Roman Teslyuk"],
    tagline: "Usa IA para encontrar los mejores yacimientos mineros.",
    logo: "/logos/earth-ai.png",
    logoHeight: "h-4",
    link: "https://www.linkedin.com/in/roman-teslyuk-a344881a/",
    profileImage: "/lovable-uploads/3add01c8-aff6-4ac5-b726-588ba0a5cd4a.webp"
  },
  {
    time: { start: '11:00', end: '12:00' },
    title: 'Coliseo en vivo',
    description: 'Dos de nuestros mentores hacen una sesión de mentoría en vivo a dos de nuestras startups.',
    speakers: ["Jaime Arrieta", "Pedro Pineda"],
    profileImages: ["/lovable-uploads/f16b08ff-2ca9-438d-a1b5-68c3a3b166d9.webp", "/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.webp"],
    taglines: ["Mentor, CEO Buk", "Mentor, CEO Fintual"],
    logos: ["/logos/buk.png", "/logos/fintual.png"],
    logoHeights: ["h-5", "h-5"],
    links: ["https://cl.linkedin.com/in/jaime-arrieta-boetsch-ab214150", "https://cl.linkedin.com/in/pedro-pineda-fintual"]
  },
  {
    time: { start: '12:00', end: '13:00' },
    title: 'Fireside chat con Roger Rea',
    speakers: ["Roger Rea"],
    tagline: "Créditos grupales para microempresas en México.",
    logo: "/logos/grupalia.png",
    logoHeight: "h-5",
    link: "https://www.linkedin.com/in/rogeliorea/",
    profileImage: "/lovable-uploads/roger.jpeg"
  },
  {
    time: { start: '13:00', end: '14:00' },
    title: 'Almuerzo: en las terrazas del MUT por cuenta de Platanus.',
    isBreak: true
  },
  {
    time: { start: '14:00', end: '14:30' },
    title: 'Eleven Labs',
  },
  {
    time: { start: '14:30', end: '15:30' },
    title: 'Fireside chat con Francesco Crivelli',
    speakers: ["Francesco Crivelli"],
    tagline: "1era infraestructura para crear robots confiables irl.",
    logo: "/logos/intuition.png",
    logoHeight: "h-3.5",
    link: "https://www.linkedin.com/in/francesco-crivelli/",
    profileImage: "/lovable-uploads/Francesco.jpeg"
  },
  {
    time: { start: '15:30', end: '16:30' },
    title: 'Conoce a startups de Platanus',
    description: 'Cinco startups cuentan en qué están metidas. No es un pitch, es lo que realmente están construyendo.',
  },
  {
    time: { start: '16:30', end: '17:30' },
    title: 'Fireside chat con Ignacio Beliers',
    speakers: ["Ignacio Beliers"],
    tagline: "Vehículos espaciales para transportar carga en órbita.",
    logo: "/mentors/epic-aerospace.png",
    logoHeight: "h-3",
    link: "https://www.linkedin.com/in/ignacio-belieres-montero-14b457b6/",
    profileImage: "/lovable-uploads/4ca3c16b-eb9a-4fb0-a1a9-f6b1174d0aec.webp"
  },
  {
    time: { start: '18:30', end: '22:00' },
    title: 'Cocktail de Cierre',
    isBreak: true
  },
]

export default function Agenda() {
  const getRowType = (item: AgendaItem) => {
    if (item.title.includes("Fireside chat")) return "fireside"
    if (item.title.includes("Coliseo")) return "coliseo"
    return "default"
  }

  const getFirstTwoWords = (text: string) => {
    return text.split(' ').slice(0, 2).join(' ')
  }

  return (
    <section className="text-sm w-full p-8 mx-auto max-w-screen-lg space-y-8 py-32">
      <div className="md:px-4 flex font-mono uppercase w-full">
        <span className="font-mono uppercase text-foreground">
          {'< Agenda />'}
        </span>

        <p className="text-muted-foreground/70 ml-2">
          (20.nov)
        </p>
      </div>

      <div className="-mx-8 md:mx-0 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sr-only">
            <tr className="h-12 text-muted-foreground/70 !font-normal *:!font-normal *:!tracking-wide font-mono text-left uppercase *:px-4 border-b border-border">
              <th>Hora</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {AGENDA_ITEMS.map((item, index) => {
              const rowType = getRowType(item)

              if (rowType === "fireside") {
                return (
                  <tr key={index} className="flex flex-col md:table-row md:flex-none border-b border-border align-top font-mono uppercase h-auto text-left px-8 py-4 md:*:px-4 md:*:py-4 relative">
                    <td className="text-foreground relative z-10">
                      {item.time.start} - {item.time.end}
                    </td>
                    <td className="text-white relative z-10">
                      {getFirstTwoWords(item.title)}
                      <Link
                        to={item.link}
                        target="_blank"
                        key={item.speakers[0]}
                        className="my-2 bg-primary-foreground/[7%] text-primary-foreground group relative flex border border-primary-foreground overflow-clip backdrop-blur-lg"
                      >
                        <div className="w-auto h-24 flex-shrink-0 overflow-hidden">
                          <img
                            src={item.profileImage}
                            alt={item.speakers[0]}
                            className="grayscale md:group-hover:grayscale-0 md:group-hover:scale-[105%] duration-200 w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left flex flex-col gap-0.5 items-start justify-center px-4 py-2 w-full h-full">
                          <span className="font-mono uppercase text-sm">{item.speakers[0]}</span>
                          <p className="text-sm font-light opacity-70">{item.tagline}</p>
                          <img src={item.logo} alt={item.speakers[0]} width={108} height={24} className={cn("hidden md:block w-fit object-left object-contain mt-4 ml-right", item.logoHeight || "h-4")} />
                        </div>
                      </Link>
                    </td>
                  </tr>
                )
              }

              if (rowType === "coliseo") {
                return (
                  <tr key={index} className="flex flex-col md:table-row md:flex-none align-top font-mono uppercase border-b border-border h-auto text-left px-8 py-4 md:*:px-4 md:*:py-4">
                    <td className="text-foreground">
                      {item.time.start} - {item.time.end}
                    </td>

                    <td>
                      <div className="space-y-3">
                        <div>
                          {item.title}
                          {item.description && <p className="max-w-lg text-balance text-muted-foreground/70 mt-0.5">{item.description}</p>}
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 pb-3">
                          {item.speakers?.map((speaker, idx) => (
                            <Link
                              key={idx}
                              to={item.links?.[idx] || "#"}
                              target="_blank"
                              className="bg-white/[7%] group relative flex border border-neutral-800 backdrop-blur-lg overflow-hidden flex-1"
                            >
                              <div className="w-auto h-24 flex-shrink-0 overflow-hidden">
                                <img
                                  src={item.profileImages?.[idx]}
                                  alt={speaker}
                                  className="grayscale md:group-hover:grayscale-0 md:group-hover:scale-[105%] duration-200 w-full h-full object-cover"
                                />
                              </div>
                              <div className="text-left flex flex-col gap-0.5 items-start justify-center px-4 py-2 w-full h-full">
                                <span className="font-mono uppercase text-white text-sm">{speaker}</span>
                                <p className="text-sm font-light text-muted-foreground/70">{item.taglines?.[idx]}</p>
                                <img src={item.logos?.[idx]} alt={speaker} width={108} height={20} className={cn("w-fit object-left object-contain mt-3 ml-right", item.logoHeights?.[idx] || "h-5")} />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              }

              return (
                <tr key={index} className={cn("flex flex-col md:table-row md:flex-none align-top font-mono uppercase border-b border-border h-auto text-left px-8 py-4 md:*:px-4 md:*:py-4", item.isBreak && "bg-white/[7%] backdrop-blur-sm")}>
                  <td className="text-foreground">
                    {item.time.start} - {item.time.end}
                  </td>
                  <td>
                    <div>
                      {item.title}
                      {item.description && <p className="max-w-lg text-balance text-muted-foreground/70 mt-0.5">{item.description}</p>}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
