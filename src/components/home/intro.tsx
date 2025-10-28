import { motion } from "motion/react"

export default function Intro() {
  return (
    <section className="*:mx-auto z-10 text-sm w-full pt-8 md:pt-0 px-8 pb-16 md:pb-64 mx-auto flex flex-col gap-8">
      <span className="sr-only max-w-2xl font-mono uppercase text-4xl text-left w-full">
        {'< El evento />'}
      </span>

      <div className="max-w-2xl z-20 font-mono uppercase space-y-12 text-base md:text-xl text-center font-light *:leading-8">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          whileOutOfView={{ opacity: 0, filter: "blur(10px)" }}
          viewport={{ margin: "-128px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A lo largo del tiempo han existido lugares donde se concentra la genialidad. Atenas, Florencia, Silicon Valley. Momentos en que la gente correcta se junta y las ideas fluyen.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          whileOutOfView={{ opacity: 0, filter: "blur(10px)" }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          En Platanus creemos que ese tipo de cosas pueden pasar acá también. Que no se trata de un lugar, sino de una comunidad que comparte curiosidad, talento y ganas de construir.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          whileOutOfView={{ opacity: 0, filter: "blur(10px)" }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Platanus Forum es ese punto de encuentro. Donde las conversaciones valen más que las charlas, y las ideas se cruzan sin permiso.
        </motion.p>
      </div>
    </section>
  )
}
