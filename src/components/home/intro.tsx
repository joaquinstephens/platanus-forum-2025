import { motion } from "motion/react"

export default function Intro() {
  return (
    <section className="z-10 text-sm w-full max-w-full pt-8 md:pt-0 md:-mt-12 px-8 pb-16 md:pb-32 mx-auto flex flex-col items-center gap-8">
      <div className="max-w-2xl z-20 font-mono uppercase space-y-12 text-base md:text-xl text-center font-light *:leading-8">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ margin: "-128px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          La genialidad se ha concentrado en lugares a lo largo de la historia. Atenas, Florencia, Silicon Valley. La gente correcta se junta y las ideas fluyen.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Platanus Forum es ese punto de encuentro.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A partir de más de 250 fundadores, cientos de inversionistas y nuestra amplia red de contactos, reunimos personas que comparten una característica que los une: la curiosidad por conocer gente haciendo cosas fuera de lo común y entender mejor lo que está pasando en el mundo.
        </motion.p>
      </div>
    </section>
  )
}
