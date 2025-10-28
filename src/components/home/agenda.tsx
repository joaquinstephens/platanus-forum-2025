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
  logoHeight?: string
  taglines?: string[]
  logos?: string[]
  links?: string[]
  profileImages?: string[]
  logoHeights?: string[]
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
    logo: "/logos/earth-ai.png",
    logoHeight: "h-4",
    link: "https://www.linkedin.com/in/roman-teslyuk-a344881a/",
    profileImage: "/lovable-uploads/3add01c8-aff6-4ac5-b726-588ba0a5cd4a.png"
  },
  {
    time: { start: '11:00', end: '12:00' },
    title: 'Coliseo en vivo',
    speakers: ["Jaime Arrieta", "Pedro Pineda"],
    profileImages: ["/lovable-uploads/f16b08ff-2ca9-438d-a1b5-68c3a3b166d9.png", "/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.png"],
    taglines: ["CEO Buk", "CEO Fintual"],
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
    logo: "/logos/intuition.png",
    logoHeight: "h-3.5",
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
    logoHeight: "h-3.5",
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
      <div className="md:px-4 flex font-mono uppercase w-full">
        <span className="font-mono uppercase text-foreground">
          {'< Agenda />'}
        </span>

        <p className="text-muted-foreground/70 ml-2">
          (21.nov)
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
                    <td className="text-muted-foreground/70 relative z-10">
                      {item.time.start} - {item.time.end}
                    </td>
                    <td className="text-white relative z-10">
                      {getFirstTwoWords(item.title)}
                      <Link
                        to={item.link}
                        target="_blank"
                        key={item.speakers[0]}
                        className="my-2 bg-white/[7%] group relative flex border border-neutral-800 overflow-clip backdrop-blur-lg"
                      >
                        <img
                          src={item.profileImage}
                          alt={item.speakers[0]}
                          className="grayscale md:group-hover:grayscale-0 md:group-hover:scale-[105%] duration-200 aspect-square h-24 object-cover"
                        />
                        <div className="text-left flex flex-col gap-0.5 items-start justify-center px-4 py-2 w-full h-full">
                          <h3 className="font-mono uppercase text-white text-sm">{item.speakers[0]}</h3>
                          <p className="text-sm font-light text-muted-foreground/70">{item.tagline}</p>
                          <img src={item.logo} alt={item.speakers[0]} width={108} height={24} className={cn("sr-only md:not-sr-only w-fit object-left object-contain mt-4 ml-right", item.logoHeight || "h-4")} />
                        </div>
                      </Link>
                    </td>
                  </tr>
                )
              }

              if (rowType === "coliseo") {
                return (
                  <tr key={index} className="flex flex-col md:table-row md:flex-none align-top font-mono uppercase border-b border-border h-auto text-left px-8 py-4 md:*:px-4 md:*:py-4">
                    <td className="text-muted-foreground/70">
                      {item.time.start} - {item.time.end}
                    </td>
                    <td>
                      <div className="space-y-3">
                        <div>{item.title}</div>
                        <div className="flex flex-row gap-3 pb-3">
                          {item.speakers?.map((speaker, idx) => (
                            <Link
                              key={idx}
                              to={item.links?.[idx] || "#"}
                              target="_blank"
                              className="bg-white/[7%] group relative flex flex-col md:flex-row border border-neutral-800 backdrop-blur-lg overflow-clip flex-1"
                            >
                              <img
                                src={item.profileImages?.[idx]}
                                alt={speaker}
                                className="aspect-square grayscale md:group-hover:grayscale-0 md:group-hover:scale-[105%] duration-200 md:h-24 object-cover"
                              />
                              <div className="text-left flex flex-col gap-0.5 items-start justify-start px-4 py-4 md:py-2 w-full h-full">
                                <h3 className="font-mono uppercase text-white text-sm">{speaker}</h3>
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
                  <td className="text-muted-foreground/70">
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
