// import { useProducts } from "../productos/useProducts";
import { useState } from "react";
import type { IProduct } from "../../types/Product";
import Productos from "../productos";
import { useMenu } from "./useMenu";
import { CONFIG } from "../../config";
import { XIcon } from "lucide-react";

const Menu = () => {
  const { data, isLoading, error, set_category_select, category_select } =
    useMenu();
  const initialProduct = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    price_discount: 0,
    stock: 0,
    category_id: 0,
    image_path: "",
    available: 0,
  };
  const [currentProduct, setCurrentProduct] =
    useState<IProduct>(initialProduct);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setCurrentProduct(initialProduct);
  };
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
          <Productos
            category_id={category_select}
            setShowModal={setShowModal}
            setCurrentProduct={setCurrentProduct}
          />
        </div>
      </div>
      {/* MODAL */}
      {showModal && currentProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => closeModal()}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => closeModal()}
              className="absolute right-2 top-2 cursor-pointer"
            >
              <XIcon className="size-6" />
            </button>
            <h4 className="text-2xl font-bold mb-4">Detalles del Producto</h4>
            <div className="flex gap-5">
              <div className="w-2/5 bg-muted rounded-lg">
                <img
                  src={`${CONFIG.API_URL}/${currentProduct.image_path}`}
                  alt={currentProduct.name}
                  className="rounded-lg h-full w-full object-cover aspect-square"
                />
              </div>
              <div className="w-3/5">
                <h3>{currentProduct.name}</h3>
                <p className="mb-0">
                  Description: <strong>{currentProduct.description}</strong>
                </p>
                <p className="mb-0">
                  Precio: <strong>S/ {currentProduct.price}</strong>
                </p>
                <p className="mb-0">
                  Descuento: S/{" "}
                  <strong>
                    {currentProduct.price_discount
                      ? currentProduct.price_discount
                      : 0}
                  </strong>
                </p>
                <p className="mb-0">
                  Stock: <strong>{currentProduct.stock}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;
