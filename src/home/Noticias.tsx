// import image1 from "../assets/images/image-1.jpg";
// import image2 from "../assets/images/image-2.jpg";
// import image3 from "../assets/images/image-3.jpg";

export default function Noticias() {
  return (
    <section className="" id="news">
      <div className="max-w-7xl mx-auto px-3 py-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-10 md:p-16 bg-rose-400 backdrop-blur-sm rounded-3xl shadow-2xl lg:mr-[-50px] z-10 relative">
          <span className="text-rose-200 uppercase font-extrabold tracking-widest text-sm mb-3">
            Especial de Verano
          </span>
          <h2 className="text-5xl md:text-7xl font-secondary text-white mb-6 drop-shadow-lg tracking-wider">
            Iced Latte
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium">
            Refresca tu día con nuestra nueva bebida estrella. Una combinación
            perfecta de nuestro intenso espresso recién extraído, leche sedosa y
            mucho hielo. ¡El favorito indiscutible para combatir el calor!
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
            <div>
              <p className="text-rose-200 text-sm font-bold uppercase mb-1">
                Precio Promocional
              </p>
              <p className="text-4xl md:text-5xl font-black text-white">
                S/ 12.90
              </p>
            </div>
            <button className="bg-white text-rose-600 font-bold text-lg py-3 px-8 rounded-full hover:bg-rose-50 hover:scale-105 transition-all shadow-xl cursor-pointer">
              ¡Pruébalo ya!
            </button>
          </div>
        </div>
        <div className="lg:flex items-center hidden">
          <figure className="bg-rose-200 rounded-r-3xl scale-90">
            <img
              className="h-full w-full object-cover scale-150 animate-float"
              src="/images/iced-latte.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
