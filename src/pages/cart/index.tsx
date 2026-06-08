import { MinusIcon, PlusIcon } from "lucide-react";
import { tableStyles } from "../../utils/Constants";
import { useCart } from "./useCarrito";
import { Link } from "react-router";

const CartPage = () => {
  const {
    listItems,
    hasListItems,
    deleteItem,
    addQuantity,
    decreaseQuantity,
    total,
    clearCart,
  } = useCart();
  return (
    <div className="mt-18 bg-background">
      <div className="min-h-40 bg-muted/10 flex">
        <div className="flex max-w-7xl w-full mx-auto items-center justify-between">
          <h2 className="text-2xl">Carrito</h2>
          <p className="font-serif text-secondary">Barist / Carrito</p>
        </div>
      </div>
      {/*CART TABLE*/}
      {!hasListItems ? (
        <div className="max-w-7xl mx-auto py-20">
          <div className=" border-2 border-muted/20 p-5 px-10 font-serif font-bold italic text-xl">
            El carrito esta vacio.
          </div>
          <Link to={"/menu"} className="text-secondary block mt-5">
            Regresar al menu
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-20">
          <table className={tableStyles.table}>
            <thead className={tableStyles.thead}>
              <tr className={tableStyles.tr}>
                <th className={tableStyles.th}>ID</th>
                <th className={tableStyles.th + " text-start"}>Product</th>
                <th className={tableStyles.th}>Price</th>
                <th className={tableStyles.th}>Quantity</th>
                <th className={tableStyles.th}>Subtotal</th>
                <th className={tableStyles.th}>Actions</th>
              </tr>
            </thead>
            <tbody className={tableStyles.tbody}>
              {listItems.map(({ id, name, price, quantity }) => (
                <tr key={id} className={tableStyles.tr}>
                  <td className={tableStyles.td}>{id}</td>
                  <td className={tableStyles.td + " text-start"}>{name}</td>
                  <td className={tableStyles.td}>S/ {price}</td>
                  <td className={tableStyles.td}>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => decreaseQuantity(id)}
                        className="bg-secondary p-1 rounded-sm text-white"
                      >
                        <MinusIcon className="size-4" />
                      </button>
                      <div className="px-4 h-full font-black">{quantity}</div>
                      <button
                        onClick={() => addQuantity(id)}
                        className="bg-secondary p-1 rounded-sm text-white"
                      >
                        <PlusIcon className="size-4" />
                      </button>
                    </div>
                  </td>
                  <td className={tableStyles.td}>S/ {quantity * price}</td>
                  <td className={tableStyles.td}>
                    <button
                      onClick={() => deleteItem(id)}
                      className="bg-tertiary hover:bg-tertiary/90 cursor-pointer transition-colors text-white px-4 py-2"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-2xl  flex items-center justify-between py-5 mt-20">
            <div>
              Total: S/ <span className="font-black">{total.toFixed(2)}</span>
            </div>
            <div className="flex gap-5">
              <button
                className="bg-red-400 cursor-pointer hover:bg-red-900/60 transition-colors px-6 py-2 text-white text-lg"
                onClick={() => clearCart()}
              >
                Eliminar carrito
              </button>
              <button
                className="bg-secondary uppercase cursor-pointer hover:bg-tertiary transition-colors px-6 py-2 text-white text-lg"
                onClick={() => clearCart()}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPage;
