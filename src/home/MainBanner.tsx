import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainBanner = () => {
  return (
    <section className="w-full mt-14">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        navigation={true}
        loop={true}
        className="mySwiper h-[calc(100vh-3rem)]"
      >
        <SwiperSlide className="relative">
          <figure className="w-full h-full relative">
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70 z-10"></div>
            <img
              src="/images/prom-1.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-10 lg:px-40 ">
            <h3 className="lg:text-8xl md:text-7xl text-5xl max-w-5xl text-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] leading-tight">
              DISFRUTA DE UN <br className="lg:hidden" />
              <span className="text-green-700">BUEN CAFÉ</span>
            </h3>
            <p className="max-w-xl mt-6 font-serif text-white/90 text-lg md:text-xl font-medium drop-shadow-md ">
              Granos de especialidad cuidadosamente seleccionados para brindarte
              la mejor experiencia en cada taza.
            </p>
            <button className="bg-accent text-white px-6 text-lg py-2 mt-4">
              Leer mas
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full h-full">
            <img
              src="images/banner-2.webp"
              alt=""
              className="h-full w-full object-cover brightness-60"
            />
          </figure>
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-10 lg:px-40 ">
            <h3 className="lg:text-8xl md:text-7xl text-5xl max-w-5xl text-white  leading-tight uppercase">
              Los mejores <br className="lg:hidden" />
              <span className="text-green-500 uppercase">Frappuccinos</span>
            </h3>
            <p className="max-w-xl mt-6 font-serif text-white/90 text-lg md:text-xl font-medium drop-shadow-md ">
              Refresca tu día con la combinación perfecta de café, hielo y un
              toque de dulzura. El equilibrio ideal para cualquier momento.
            </p>
            <button className="bg-accent text-white px-6 text-lg py-2 mt-4">
              Leer mas
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainBanner;
