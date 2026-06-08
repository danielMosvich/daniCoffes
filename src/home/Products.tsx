// import "swiper/css";
// import "swiper/css/pagination";
import { Link } from "react-router";
import { CONFIG } from "../config";
import { useProducts } from "../pages/productos/useProducts";
import { addCart } from "../utils/Functions";
export default function Products() {
  const { data, isLoading, error } = useProducts({ limit: 20 });

  if (isLoading) {
    return (
      <section className="p-5 bg-background">
        <h2 className="text-foreground text-center my-10">
          Descubre los nuevos productos
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[650px]">
          {/* spiner xd */}
          <div className="w-16 h-16 border-4 border-muted/30 border-t-primary rounded-full animate-spin mb-6 shadow-sm"></div>
          <p className="text-xl text-foreground/80 font-bold tracking-widest animate-pulse">
            PREPARANDO EL CATÁLOGO...
          </p>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="p-5 bg-background">
        <h2 className="text-foreground text-center my-10">
          Descubre los nuevos productos
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[650px]">
          <p className="text-xl text-red-500">Error al obtener los productos</p>
        </div>
      </section>
    );
  }
  return (
    <section
      className="p-5 bg-background mt-10 lg:max-w-7xl mx-auto"
      id="products"
    >
      <span className="block text-center font-serif text-foreground-light">
        ¿Qué hay de nuevo?
      </span>
      <h2 className="text-center pt-5">Nuestros productos</h2>
      <hr className="border-0 h-0.5 w-36 mx-auto bg-foreground-light"></hr>
      {/* products */}
      <div className="mt-15 grid gap-5 gap-y-15 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="w-full h-72 max-h-72 overflow-hidden">
              <Link to={`/productodetalle/${product.id}`}>
                <figure>
                  <img
                    src={`${CONFIG.API_URL}/${product.image_path}`}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                </figure>
              </Link>
              {/* carrito hover xd */}
              <button
                onClick={() =>
                  addCart(product.id, product.name, Number(product.price), 1)
                }
                className="bg-foreground-light text-white text-lg py-4 uppercase flex items-center translate-y-0 gap-2 justify-center group-hover:-translate-y-full transition-transform duration-300 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M4 8h16v14H4z" />
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M15.5 11V5.5a3.5 3.5 0 1 0-7 0V11M4 8h16v14H4z"
                    />
                  </g>
                </svg>
                Agregar al carrito
              </button>
            </div>
            <div className="mt-3">
              <h3 className="mb-1">{product.name}</h3>
              {/* RATE */}
              {/* <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  const fillPercentage =
                    Math.max(0, Math.min(1, product.rate - index)) * 100;
                  return (
                    <div key={index} className="relative w-5 h-5">
                      <svg
                        className="absolute top-0 left-0 w-5 h-5 text-foreground-light opacity-30"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="absolute top-0 left-0 w-5 h-5 text-foreground-light"
                        style={{
                          clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  );
                })}
              </div> */}
              <p className="text-foreground-light text-xl font-semibold">
                S/ {product.price}
              </p>
              {/* {product.stock > 0 ? (
                <button>Pedir</button>
              ) : (
                <button disabled>Agotado</button>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  // return (
  //   <section className="p-5 bg-background" id="products">
  //     {/* <div className="grid grid-cols-4 gap-3 max-w-7xl mx-auto"> */}
  //     <h2 className="text-foreground text-center my-10">
  //       Descubre los nuevos productos
  //     </h2>
  //     <div className="max-w-7xl mx-auto">
  //       <Swiper
  //         navigation={true}
  //         breakpoints={{
  //           320: { slidesPerView: 1, spaceBetween: 20 },
  //           640: { slidesPerView: 2, spaceBetween: 20 },
  //           768: { slidesPerView: 3, spaceBetween: 30 },
  //           1024: { slidesPerView: 4, spaceBetween: 40 },
  //         }}
  //         pagination={{
  //           clickable: true,
  //         }}
  //         modules={[Pagination, Navigation]}
  //         className="pb-14! pt-5!"
  //       >
  //         {products.map((product) => (
  //           <SwiperSlide key={product.id} className="h-auto">
  //             <div className="border border-muted bg-secondary rounded-xl shadow-xl shadow-primary/10 overflow-hidden select-none flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
  //               {product.image_url !== null ? (
  //                 <figure className="w-full h-48 sm:h-56 shrink-0 relative">
  //                   <img
  //                     src={product.image_url}
  //                     alt={product.name}
  //                     className="w-full h-full object-cover"
  //                   />
  //                 </figure>
  //               ) : (
  //                 <div className="w-full h-48 sm:h-56 bg-muted/40 flex items-center justify-center shrink-0">
  //                   <p className="text-foreground font-semibold text-center">
  //                     Sin imagen
  //                   </p>
  //                 </div>
  //               )}

  //               <div className="p-5 flex flex-col grow bg-white/10">
  //                 <h3 className="mt-1 truncate font-bold text-xl text-foreground">
  //                   {product.name}
  //                 </h3>
  //                 <p className="text-foreground-light font-medium line-clamp-2 mb-4 grow text-sm">
  //                   {product.description}
  //                 </p>
  //                 <div className="flex justify-between items-center mt-auto pt-4 border-t border-muted/30">
  //                   <p className="font-black text-2xl text-foreground">
  //                     S/ {product.price}
  //                   </p>
  //                   {product.stock > 0 ? (
  //                     <button className="bg-primary text-white py-2 px-5 rounded-full ring-2 ring-transparent hover:ring-muted hover:scale-105 transition-all cursor-pointer font-bold shadow-md">
  //                       Pedir
  //                     </button>
  //                   ) : (
  //                     <button
  //                       disabled
  //                       className="bg-black/40 text-white/70 py-2 px-5 rounded-full cursor-not-allowed font-bold"
  //                     >
  //                       Agotado
  //                     </button>
  //                   )}
  //                 </div>
  //               </div>
  //             </div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>
  //     {/* </div> */}
  //     <div className="flex justify-center my-14">
  //       <button className="bg-primary text-white p-2 rounded-full px-4 hover:scale-105 transition cursor-pointer text-lg shadow-primary/50 shadow-md">
  //         Ver más productos
  //       </button>
  //     </div>
  //   </section>
  // );
}
