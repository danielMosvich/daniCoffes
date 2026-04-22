export default function Historia() {
  return (
    <section
      className="bg-background relative overflow-hidden py-24"
      id="history"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna de Imagen con efectos y tarjeta flotante */}
          <div className="relative">
            {/* Elementos de diseño de fondo (Bloques de color rotados) */}
            <div className="absolute -inset-4 bg-secondary/60 rounded-3xl transform rotate-3 z-0"></div>
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform -rotate-2 z-0"></div>

            <figure className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
              <img
                src="/images/history.webp"
                alt="El interior acogedor de DaniCoffee"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>

            {/* Tarjeta flotante superpuesta (Estilo moderno) */}
            {/* <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-5 md:p-6 rounded-2xl shadow-xl z-20 border border-muted/30">
              <div className="flex items-center gap-4">
                <div className="bg-accent text-primary w-14 h-14 rounded-full flex items-center justify-center font-black text-xl shadow-inner">
                  6+
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Años de</p>
                  <p className="text-muted text-sm font-bold uppercase tracking-wider">Experiencia</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Columna de Texto Elegante */}
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Nuestros Orígenes
            </span>
            <h2 className="text-5xl md:text-6xl font-secondary text-foreground mb-8 tracking-wider">
              Nuestra Historia
            </h2>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-foreground font-semibold border-l-4 border-accent pl-5">
                Todo comenzó en 2018 como una pequeña pasión por el buen café,
                que pronto se transformó en un gran sueño compartido.
              </p>

              <p className="text-lg leading-relaxed text-foreground-light opacity-90">
                En DaniCoffes creemos que el café es un ritual diario. Por eso,
                traemos granos de especialidad directamente desde las mejores
                fincas a tu mesa, cuidando cada detalle hasta la extracción
                perfecta.
              </p>

              <p className="text-lg leading-relaxed text-foreground-light opacity-90">
                Hoy somos más que una cafetería; somos una comunidad. Nuestra
                esencia sigue intacta: servirte siempre con una sonrisa y lograr
                que te sientas como en casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
