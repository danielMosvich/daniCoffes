import { useEffect, useState } from "react";
import type { IProductCoffee } from "../types/product";
import { getProducts } from "../services/productService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
export default function Products() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProductCoffee[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) {
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
  return (
    <section className="p-5 bg-background" id="products">
      {/* <div className="grid grid-cols-4 gap-3 max-w-7xl mx-auto"> */}
      <h2 className="text-foreground text-center my-10">
        Descubre los nuevos productos
      </h2>
      <div className="max-w-7xl mx-auto">
        <Swiper
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="pb-14! pt-5!"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <div className="border border-muted bg-secondary rounded-xl shadow-xl shadow-primary/10 overflow-hidden select-none flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                {product.image_url !== null ? (
                  <figure className="w-full h-48 sm:h-56 shrink-0 relative">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                ) : (
                  <div className="w-full h-48 sm:h-56 bg-muted/40 flex items-center justify-center shrink-0">
                    <p className="text-foreground font-semibold text-center">
                      Sin imagen
                    </p>
                  </div>
                )}

                <div className="p-5 flex flex-col grow bg-white/10">
                  <h3 className="mt-1 truncate font-bold text-xl text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-foreground-light font-medium line-clamp-2 mb-4 grow text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-muted/30">
                    <p className="font-black text-2xl text-foreground">
                      S/ {product.price}
                    </p>
                    {product.stock > 0 ? (
                      <button className="bg-primary text-white py-2 px-5 rounded-full ring-2 ring-transparent hover:ring-muted hover:scale-105 transition-all cursor-pointer font-bold shadow-md">
                        Pedir
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-black/40 text-white/70 py-2 px-5 rounded-full cursor-not-allowed font-bold"
                      >
                        Agotado
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
      <div className="flex justify-center my-14">
        <button className="bg-primary text-white p-2 rounded-full px-4 hover:scale-105 transition cursor-pointer text-lg shadow-primary/50 shadow-md">
          Ver más productos
        </button>
      </div>
    </section>
  );
}
