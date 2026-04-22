const NuestraEmpresa = () => {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-3 py-20">
        <h2 className="text-center text-primary mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white/50 border border-muted p-8 rounded-2xl shadow-sm hover:scale-105 transition duration-300">
            <div className="text-accent text-2xl mb-4">★★★★★</div>
            <p className="text-foreground italic mb-6">
              "El mejor café que he probado en la ciudad. El ambiente es súper
              acogedor y el aroma a café recién tostado te atrapa desde que
              cruzas la puerta. ¡Totalmente recomendado!"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">
                  María Fernanda
                </h4>
                <span className="text-sm text-muted">Cliente Frecuente</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white/50 border border-muted p-8 rounded-2xl shadow-sm hover:scale-105 transition duration-300">
            <div className="text-accent text-2xl mb-4">★★★★★</div>
            <p className="text-foreground italic mb-6">
              "Los postres son una verdadera delicia. Siempre vengo a trabajar
              aquí por las tardes, el internet es rápido y el servicio por parte
              de los baristas es de primera."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">Carlos Gómez</h4>
                <span className="text-sm text-muted">Amante del Espresso</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white/50 border border-muted p-8 rounded-2xl shadow-sm hover:scale-105 transition duration-300">
            <div className="text-accent text-2xl mb-4">★★★★★</div>
            <p className="text-foreground italic mb-6">
              "Recomiendo a ciegas el Frappé de Moka, ¡se ha vuelto mi bebida
              favorita! Además, la atención al cliente es fantástica, siempre te
              reciben con una sonrisa."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">Ana Pérez</h4>
                <span className="text-sm text-muted">Estudiante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraEmpresa;
