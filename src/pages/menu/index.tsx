// import { useProducts } from "../productos/useProducts";
import Productos from "../productos";
import { useMenu } from "./useMenu";

const Menu = () => {
  const { data, isLoading, error, set_category_select, category_select } =
    useMenu();
  if (isLoading) {
    return (
      <section className="p-5 bg-background-secondary">
        <h2 className="text-foreground text-center my-10">
          Descubre los nuevos productos
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-162.5">
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
      <section className="p-5 bg-background-secondary">
        <h2 className="text-foreground text-center my-10">
          Descubre los nuevos productos
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-162.5">
          <p className="text-xl text-red-500">Error al obtener los productos</p>
        </div>
      </section>
    );
  }
  return (
    <div className="bg-background-secondary pb-20">
      {/* IMAGE PARALLAX */}
      <div
        className="mt-20 h-96 grid place-content-center bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/banner-3.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h2 className="text-white text-5xl font-black uppercase tracking-widest relative z-10 drop-shadow-lg">
          Nuestro Menú
        </h2>
      </div>
      {/* MENU */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 mt-20">
        {/* CATEGORIES */}
        <div className="lg:w-1/4 flex-col p-4 lg:p-2">
          <h3 className="text-5xl font-bold pb-5 border-b-4 border-secondary w-fit">
            Categorias
          </h3>
          <ul className="">
            <li
              className={`text-xl font-semibold w-full py-3 cursor-pointer select-none hover:text-primary ${null == category_select ? "text-secondary hover:text-secondary" : ""}`}
              onClick={() => set_category_select(null)}
            >
              Todos
            </li>
            {data?.map((category) => (
              <li
                className={`text-xl font-semibold w-full py-3 cursor-pointer select-none hover:text-primary ${category.id == category_select ? "text-secondary hover:text-secondary" : ""}`}
                key={category.id}
                onClick={() => set_category_select(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        {/* PRODUCTS */}
        <div className="lg:w-3/4 p-4 lg:p-2">
          <Productos category_id={category_select} />
        </div>
      </div>
    </div>
  );
};
export default Menu;
