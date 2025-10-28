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
  logo?: string
  link?: string
  profileImage?: string
  taglines?: string[]
  logos?: string[]
  links?: string[]
  profileImages?: string[]
}

const AGENDA_ITEMS: AgendaItem[] = [
  {
    time: { start: '08:30', end: '09:30' },
    title: 'Desayuno',
    isBreak: true
  },
  {
    time: { start: '09:30', end: '09:50' },
    title: 'Apertura de Platanus',
  },
  {
    time: { start: '09:50', end: '10:00' },
    title: 'Palabras de Maxxa',
  },
  {
    time: { start: '10:00', end: '11:00' },
    title: 'Fireside chat con Roman Teslyuk',
    speakers: ["Roman Teslyuk"],
    tagline: "IA para desenterrar tesoros mineros.",
    logo: "/mentors/epic-aerospace.png",
    link: "https://www.linkedin.com/in/roman-teslyuk-a344881a/",
    profileImage: "/lovable-uploads/3add01c8-aff6-4ac5-b726-588ba0a5cd4a.png"
  },
  {
    time: { start: '11:00', end: '12:00' },
    title: 'Coliseo en vivo',
    speakers: ["Jaime Arrieta", "Pedro Pineda"],
    profileImages: ["/lovable-uploads/f16b08ff-2ca9-438d-a1b5-68c3a3b166d9.png", "/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.png"],
    taglines: ["CEO Buk", "CEO Fintual"],
    logos: ["/public/logos/logo-buk.svg", "/public/logos/fintual.svg"],
    links: ["https://cl.linkedin.com/in/jaime-arrieta-boetsch-ab214150", "https://cl.linkedin.com/in/pedro-pineda-fintual"]
  },
  {
    time: { start: '12:00', end: '13:00' },
    title: 'Fireside chat con Roger Rea',
    speakers: ["Roger Rea"],
    tagline: "Créditos grupales para microempresas en México.",
    logo: "/mentors/epic-aerospace.png",
    link: "https://www.linkedin.com/in/rogeliorea/",
    profileImage: "/lovable-uploads/roger.jpeg"
  },
  {
    time: { start: '13:00', end: '14:00' },
    title: 'Almuerzo',
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
    tagline: "Robótica confiable y rápida para el mundo real.",
    logo: "/mentors/epic-aerospace.png",
    link: "https://www.linkedin.com/in/francesco-crivelli/",
    profileImage: "/lovable-uploads/Francesco.jpeg"
  },
  {
    time: { start: '15:30', end: '16:30' },
    title: 'Conoce a startups de Platanus',
  },
  {
    time: { start: '16:30', end: '17:30' },
    title: 'Fireside chat con Ignacio Beliers',
    speakers: ["Ignacio Beliers"],
    tagline: "Llevando carga a órbita con vehículos espaciales.",
    logo: "/mentors/epic-aerospace.png",
    link: "https://www.linkedin.com/in/ignacio-belieres-montero-14b457b6/",
    profileImage: "/lovable-uploads/4ca3c16b-eb9a-4fb0-a1a9-f6b1174d0aec.png"
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
      <div className="px-4 flex font-mono uppercase w-full">
        <span className="font-mono uppercase text-foreground">
          {'< Agenda />'}
        </span>

        <p className="text-muted-foreground ml-2">
          (21.nov)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-12 text-muted-foreground !font-normal *:!font-normal *:!tracking-wide font-mono text-left uppercase *:px-4 border-b border-border">
              <th>Hora</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {AGENDA_ITEMS.map((item, index) => {
              const rowType = getRowType(item)

              if (rowType === "fireside") {
                return (
                  <tr key={index} className="border-b border-border align-top font-mono uppercase h-auto text-left *:px-4 *:py-4 relative">
                    <td className="text-white relative z-10">
                      {item.time.start} - {item.time.end}
                    </td>
                    <td className="text-white relative z-10">
                      {getFirstTwoWords(item.title)}
                      <Link
                        to={item.link}
                        target="_blank"
                        key={item.speakers[0]}
                        className="mt-4 bg-foreground/5 group relative flex border border-neutral-800 overflow-clip"
                      >
                        <img
                          src={item.profileImage}
                          alt={item.speakers[0]}
                          className="grayscale group-hover:grayscale-0 group-hover:scale-[105%] duration-200 aspect-square h-24 object-cover"
                        />
                        <div className="text-left flex flex-col gap-0.5 items-start justify-center px-4 py-2 grayscale w-full h-full backdrop-blur-[480px]">
                          <h3 className="font-mono uppercase text-white text-sm">{item.speakers[0]}</h3>
                          <p className="text-sm font-light opacity-70">{item.tagline}</p>
                          <img src={item.logo} alt={item.speakers[0]} width={128} height={24} className="h-5 object-contain mt-4" />
                        </div>
                      </Link>
                    </td>
                  </tr>
                )
              }

              if (rowType === "coliseo") {
                return (
                  <tr key={index} className="align-top font-mono uppercase border-b border-border h-auto text-left *:px-4 *:py-4">
                    <td className="text-muted-foreground">
                      {item.time.start} - {item.time.end}
                    </td>
                    <td>
                      <div className="space-y-3">
                        <div>{item.title}</div>
                        <div className="flex gap-3">
                          {item.speakers?.map((speaker, idx) => (
                            <Link
                              key={idx}
                              to={item.links?.[idx] || "#"}
                              target="_blank"
                              className="bg-foreground/5 group relative flex border border-neutral-800 overflow-clip flex-1"
                            >
                              <img
                                src={item.profileImages?.[idx]}
                                alt={speaker}
                                className="grayscale group-hover:grayscale-0 group-hover:scale-[105%] duration-200 aspect-square h-24 object-cover"
                              />
                              <div className="text-left flex flex-col gap-0.5 items-start justify-center px-4 py-2 w-full h-full backdrop-blur-[480px]">
                                <h3 className="font-mono uppercase text-white text-sm">{speaker}</h3>
                                <p className="text-sm font-light opacity-70">{item.taglines?.[idx]}</p>
                                <img src={item.logos?.[idx]} alt={speaker} width={128} height={24} className="w-fit h-5 object-contain mt-4 ml-right" />
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
                <tr key={index} className={cn("align-top font-mono uppercase border-b border-border h-auto text-left *:px-4 *:py-4", item.isBreak && "bg-white/5")}>
                  <td className="text-muted-foreground">
                    {item.time.start} - {item.time.end}
                  </td>
                  <td>
                    {item.title}
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
