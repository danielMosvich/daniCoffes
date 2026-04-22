const MainFooter = () => {
  return (
    <footer
      className="bg-foreground text-background/80 py-16 mt-20"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Marca y Descripción */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-secondary text-background mb-4 tracking-wider">
              DaniCoffes
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Nuestra pasión es servirte el mejor café de especialidad. Un
              espacio donde cada taza cuenta una historia y cada visita te hace
              sentir como en casa.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-background font-bold uppercase tracking-wider mb-4 border-l-2 border-accent pl-3">
              Explora
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Nuestra Carta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Noticias
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-background font-bold uppercase tracking-wider mb-4 border-l-2 border-accent pl-3">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Trabaja con nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-background font-bold uppercase tracking-wider mb-4 border-l-2 border-accent pl-3">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-xs uppercase text-background/50 mb-1 font-bold">
                  Email
                </span>
                <a
                  href="mailto:hola@danicoffee.com"
                  className="hover:text-accent transition-colors"
                >
                  danicoffes@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-background/50 mb-1 font-bold">
                  Teléfono
                </span>
                <span>+51 987 654 321</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-background/50 mb-1 font-bold">
                  Ubicación
                </span>
                <span>
                  Av. Asoc fortaleza de vitarte Mz - G - Lt 23, Lima, Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador y Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} DaniCoffee. Todos los derechos
            reservados.
          </p>
          <a
            href="https://github.com/danielMosvich"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-center md:text-right text-background font-semibold hover:scale-105 animate-float -rotate-12"
          >
            danielmosvich ❤️
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
