import { CONFIG } from "../../config";
import { useProducts } from "./useProducts";

const Productos = ({ category_id = null }: { category_id?: number | null }) => {
  const { data, isLoading, error, hasProducts } = useProducts({ category_id });
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
              {data.map((product) => (
                <div key={product.id} className="flex gap-2 w-full">
                  <div>
                    <img
                      src={`${CONFIG.API_URL}/${product.image_path}`}
                      alt={product.name}
                      className="w-20 h-20 min-w-20 min-h-20 rounded-xl object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <div
                      className="grid items-end"
                      style={{
                        gridTemplateColumns: "auto 1fr auto",
                      }}
                    >
                      <p className="line-clamp-1 w-fit text-2xl font-bold mb-0 uppercase">
                        {product.name}
                      </p>
                      <div className="h-full border-b border-muted/50"></div>
                      <p className="font-black text-xl">S/ {product.price}</p>
                    </div>
                    <div>
                      <p className="line-clamp-1 text-secondary font-light">
                        {product.description}
                      </p>
                    </div>
                  </div>
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
