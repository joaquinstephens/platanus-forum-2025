export default function Intro() {
  return (
    <section className="*:mx-auto z-10 text-sm w-full px-8 pb-64 mx-auto flex flex-col gap-8">
      <span className="opacity-25 text-muted brightness-[400%] max-w-xl -mb-0 font-mono uppercase w-full text-center text-8xl">
        El evento
      </span>


      {/* <span className="font-mono uppercase text-muted-foreground">
        {'< El evento />'}
      </span> */}

      <div className="max-w-2xl z-20 font-sans space-y-10 text-2xl text-left font-light leading-8">
        <p> A lo largo del tiempo han existido lugares donde se concentra la genialidad. Atenas, Florencia, Silicon Valley. Momentos en que la gente correcta se junta y las ideas fluyen. </p>

        <p> En Platanus creemos que ese tipo de cosas pueden pasar acá también. Que no se trata de un lugar, sino de una comunidad que comparte curiosidad, talento y ganas de construir. </p>

        <p> Platanus Forum es ese punto de encuentro. Donde las conversaciones valen más que las charlas, y las ideas se cruzan sin permiso. </p>
      </div>
    </section>
  )
}
