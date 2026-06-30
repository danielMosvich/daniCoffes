import { useParams } from "react-router";
import { useProductDetail } from "./useProductDetail";
import { CONFIG } from "../../config";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { addCart } from "../../utils/Functions";

const ProductoDetalle = () => {
  const { idproducto } = useParams<{ idproducto: string }>();
  const { data, isLoading, error, hasProduct } = useProductDetail(idproducto);
  const [quantity, setQuantity] = useState(1);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!hasProduct) return <div>No product found</div>;

  return (
    <div className="mt-18">
      <div
        className="h-98 grid place-content-center bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/banner-1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h2 className="text-3xl text-white z-10">SHOP</h2>
      </div>
      {data && (
        <div className="grid md:grid-cols-[4fr_5fr] mx-auto max-w-7xl gap-10 py-20 px-5">
          <div>
            <figure className="rounded-lg overflow-hidden">
              <img
                src={`${CONFIG.API_URL}/${data.image_path}`}
                alt={data.name}
                className="w-full h-full object-cover aspect-square"
              />
            </figure>
          </div>
          {/*PRODUCT*/}
          <div>
            <h1 className="text-2xl uppercase">{data.name}</h1>
            <span className="text-4xl font-serif font-black text-secondary mt-3 block">
              ${data.price}
            </span>
            <p className="font-light text-lg">{data.description}</p>
            {/*actions*/}
            <div className="flex py-10">
              <button
                className="p-4 px-6 cursor-pointer"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <MinusIcon className="size-4" />
              </button>
              <button className="p-4 px-6 font-black bg-muted/20">
                {quantity}
              </button>
              <button
                className="p-4 px-6 cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon className="size-4" />
              </button>
              <button
                onClick={() =>
                  addCart(data.id, data.name, Number(data.price), quantity)
                }
                className="p-4 px-10 bg-secondary tracking-widest uppercase text-white font-black hover:bg-tertiary transition-colors"
              >
                Add to Cart
              </button>
            </div>
            <hr className="border-muted/20 border" />
            <div className="w-40 py-10">
              <div className="font-semibold flex justify-between">
                SKU: <span className="text-muted font-normal">{data.id}</span>
              </div>
              <div className="font-semibold flex justify-between">
                CATEGORY:{" "}
                <span className="text-muted font-normal">
                  {data.category_id}
                </span>
              </div>
              <div className="font-semibold flex justify-between">
                STOCK:{" "}
                <span className="text-muted font-normal">{data.stock}</span>
              </div>
            </div>
            <hr className="border-muted/20 border" />
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductoDetalle;
