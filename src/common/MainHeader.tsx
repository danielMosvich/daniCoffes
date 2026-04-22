const MainHeader = () => {
  return (
    <header className="bg-background/80 backdrop-blur-xl fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <nav className="flex justify-between">
          <div className="logo flex items-center gap-0">
            <figure className="w-16 h-16">
              <img
                className="w-full h-full scale-150"
                src="/images/logo-2.png"
                alt=""
              />
            </figure>
            <figure className="hidden sm:flex">
              <img className="h-12 mb-2" src="/images/logo-1.png" alt="" />
            </figure>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-10 font-semibold text-xl">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#products">Carta</a>
              </li>
              <li>
                <a href="#news">Nuevos Productos</a>
              </li>
              <li>
                <a href="#about">Nosotros</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            <button className="bg-orange-950/70 text-lg text-white px-4 py-2 rounded-full">
              Iniciar Sesión
            </button>
          </div>
          <div className="flex items-center lg:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3rem"
                height="3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 17h18M3 12h18M3 7h18"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default MainHeader;
