import { Link } from "react-router";
import { CONFIG } from "../../config";
import { useProducts } from "./useProducts";
import { ShoppingCartIcon } from "lucide-react";
import { addCart } from "../../utils/Functions";

const Productos = ({ category_id = null }: { category_id?: number | null }) => {
  const { data, isLoading, error, hasProducts } = useProducts({ category_id });
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
    <div>
      <>
        {!hasProducts ? (
          <div>No hay productos</div>
        ) : (
          // PRODUCTS GRID
          <div>
            <h3 className="text-5xl font-bold border-b-4 border-secondary pb-5 w-fit">
              Productos
            </h3>
            <div className="grid gap-10 grid-cols-1 pt-10 w-full">
              {data.map(({ id, description, name, image_path, price }) => (
                <div key={id} className="flex items-center gap-2 w-full">
                  <Link key={id} to={`/productodetalle/${id}`}>
                    <figure>
                      <img
                        src={`${CONFIG.API_URL}/${image_path}`}
                        alt={name}
                        className="w-20 h-20 min-w-20 min-h-20 rounded-xl object-cover"
                      />
                    </figure>
                  </Link>
                  <div className="w-full">
                    <div
                      className="grid items-end"
                      style={{
                        gridTemplateColumns: "auto 1fr auto",
                      }}
                    >
                      <p className="line-clamp-1 w-fit text-2xl font-bold mb-0 uppercase">
                        {name}
                      </p>
                      <div className="h-full border-b border-muted/50"></div>
                      <p className="font-black text-xl">S/ {price}</p>
                    </div>
                    <div>
                      <p className="line-clamp-1 text-secondary font-light">
                        {description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => addCart(id, name, Number(price), 1)}
                    className="bg-secondary hover:bg-tertiary transition-colors cursor-pointer text-white px-6 py-4 h-fit ml-5"
                  >
                    <ShoppingCartIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export default Productos;
