const MainFooter = () => {
  return (
    <footer className="relative bg-[#111111] mt-20" id="contact">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/banner-1.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {/* HORARIO DE APERTURA */}
          <div>
            <h3 className="text-white text-xl font-sans font-bold uppercase tracking-wider mb-8">
              Horario de apertura
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { day: "Lunes", hours: "Cerrado", highlight: true },
                { day: "Martes", hours: "9:00 - 22:00" },
                { day: "Miércoles", hours: "9:00 - 22:00" },
                { day: "Jueves", hours: "9:00 - 22:00" },
                { day: "Viernes *", hours: "9:00 - 1:00" },
                { day: "Sábado *", hours: "12:00 - 01:00" },
                { day: "Domingo", hours: "9:00 - 22:00" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="font-bold text-white uppercase tracking-wider">
                    {item.day}
                  </span>
                  <div className="grow border-b border-muted/20 mx-3 mb-1"></div>
                  <span
                    className={`uppercase tracking-wider font-semibold ${
                      item.highlight ? "text-foreground-light" : "text-muted"
                    }`}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ÚLTIMAS PUBLICACIONES */}
          <div>
            <h3 className="text-white text-xl font-sans font-bold uppercase tracking-wider mb-8">
              Últimas publicaciones
            </h3>
            <div className="flex flex-col gap-6">
              {[
                { title: "EXPANDE TU MENTE, CAMBIA TODO", date: "14.02.2017" },
                { title: "LUGARES PARA PERDERSE", date: "14.02.2017" },
                { title: "LEWIS HOWES", date: "14.02.2017" },
                { title: "ELEVA TUS EXPECTATIVAS", date: "14.02.2017" },
              ].map((post, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-foreground-light transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-foreground-light text-[13px] font-semibold">
                    {post.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CONTÁCTANOS */}
          <div>
            <h3 className="text-white text-xl font-sans font-bold uppercase tracking-wider mb-8">
              Contáctanos
            </h3>
            <div className="mb-10 text-muted text-[15px] space-y-2">
              <p>
                <a
                  href="mailto:barista@qodeinteractive.com"
                  className="text-foreground-light hover:text-white transition-colors"
                >
                  daniel.mosvich@gmail.com
                </a>
              </p>
              {/* <p>1-444-123-4559</p> */}
              <p>Lima, Perú</p>
            </div>
          </div>

          {/* OTRAS UBICACIONES */}
          <div>
            <h3 className="text-white text-xl font-sans font-bold uppercase tracking-wider mb-8">
              Otras ubicaciones
            </h3>
            <div className="mb-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">
                Cafetería LINCE
              </h4>
              <p className="text-muted text-[15px]">
                Av. La Marina 333 <br />, Lince, Lima
              </p>
            </div>
            <div className="border-b border-muted/20 my-6"></div>
            <div className="mb-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">
                Cafetería LA MOLINA
              </h4>
              <p className="text-muted text-[15px]">
                Av. La Molina 2314 <br />, La Molina, Lima
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="relative z-10 border-t border-muted/10 bg-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between text-muted text-[13px]">
          <p>&copy; DaniCoffes</p>

          <div className="flex space-x-6 my-4 md:my-0 text-white">
            {/* Instagram */}
            <a
              href="#"
              className="hover:text-foreground-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="hover:text-foreground-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="hover:text-foreground-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* Tumblr */}
            <a
              href="#"
              className="hover:text-foreground-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h2.815V24h-4.148v-24" />
              </svg>
            </a>
            {/* Vimeo */}
            <a
              href="#"
              className="hover:text-foreground-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.93 21 10.927 21c-1.276 0-2.383-1.353-3.321-4.058C6.98 14.514 6.273 10.378 5.437 10.378c-.201 0-.742.348-1.623 1.045L2.35 9.771c1.026-1.021 2.115-2.083 3.267-3.187 1.488-1.442 2.656-2.22 3.504-2.332 1.621-.212 2.533.864 2.736 3.23.298 3.504.697 5.767 1.196 6.79.553 1.127 1.258 1.69 2.115 1.69 1.126 0 2.274-1.22 3.442-3.662.864-1.802 1.261-3.178 1.194-4.127-.14-1.921-1.328-2.613-3.565-2.073 1.205-3.896 3.57-5.59 7.095-5.086 2.052.296 2.918 1.576 2.597 3.842z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="hover:text-foreground-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <p>&copy; 2026 Todos los derechos reservados</p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-5 bottom-2 z-20 bg-foreground-light text-white p-1 hover:bg-white hover:text-black transition-colors cursor-pointer"
        aria-label="Volver arriba"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default MainFooter;
