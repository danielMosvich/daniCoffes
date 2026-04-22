import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainBanner = () => {
  return (
    <section className="w-full mt-20">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[calc(100vh-5rem)]"
      >
        <SwiperSlide className="relative">
          {/* Capa de la imagen con overlay oscuro para asegurar el contraste */}
          <figure className="w-full h-full relative">
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70 z-10"></div>
            <img
              src="/images/banner-3.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Contenedor del título completamente centrado */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
            {/* <span className="text-accent text-lg md:text-2xl font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-lg animate-float">
              Despierta tus sentidos
            </span> */}
            <h3 className="lg:text-8xl md:text-7xl text-5xl max-w-5xl text-white font-secondary drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] leading-tight">
              DISFRUTA DE UN <br className="lg:hidden" />
              <span className="text-muted">BUEN CAFÉ</span>
            </h3>
            <p className="mt-6 text-white/90 text-lg md:text-xl font-medium drop-shadow-md max-w-2xl">
              Granos de especialidad cuidadosamente seleccionados para brindarte
              la mejor experiencia en cada taza.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-full">
            <img
              src="images/banner-2.webp"
              alt=""
              className="h-full object-cover"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainBanner;
