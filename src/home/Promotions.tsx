export default function Promotions() {
  return (
    <section className="max-w-7xl grid lg:grid-cols-2 grid-cols-1 mx-auto gap-10 lg:py-20 py-10 px-10 lg:px-0">
      <div className="w-full relative group cursor-pointer">
        <figure className="w-full h-96 group-hover:brightness-90 transition">
          <img
            src="/images/prom-2.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </figure>
        <h3 className="text-white absolute top-8 left-8 text-5xl">
          Nuevos sabores de cafe
        </h3>
        <button className="flex items-center gap-2 absolute bottom-8 left-8 text-white text-2xl">
          Leer mas{" "}
          <svg
            className="mt-2 group-hover:translate-x-1 transition"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full relative group cursor-pointer">
        <figure className="w-full h-96 group-hover:brightness-90 transition">
          <img
            src="/images/prom-4.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </figure>
        <h3 className="text-white absolute top-8 left-8 text-5xl">
          25% de descuento los viernes
        </h3>
        <button className="flex items-center gap-2 absolute bottom-8 left-8 text-white text-2xl">
          Leer mas{" "}
          <svg
            className="mt-2 group-hover:translate-x-1 transition"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
