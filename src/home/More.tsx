import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function More() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl grid lg:grid-cols-2 grid-cols-1 mx-auto gap-10 lg:py-20 py-10 px-10 lg:px-0">
        <div className="w-full relative group cursor-pointer">
          <figure className="w-full h-96 group-hover:brightness-90 transition">
            <img
              src="/images/prom-3.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
          <h3 className="text-white absolute top-8 left-8 text-5xl uppercase">
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
              src="/images/banner-3.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
          <h3 className="text-white absolute top-8 left-8 text-5xl uppercase">
            Nueva cafeteria en lince
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
      </div>

      {/* otras marcas */}
      <div className="mt-10 ">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          navigation={true}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-3.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-5.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-4.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-5.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-2.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-1.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-3.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-5.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-4.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-5.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-2.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-1.png"
              alt=""
              className="select-none"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
