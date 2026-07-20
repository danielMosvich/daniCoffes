import { MenuIcon, ShoppingCartIcon, UserIcon, UserStar } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../pages/cart/useCarrito";
import { useAuth } from "../context/useAuth";

const NAV_ITEMS = [
  {
    id: "menu",
    etiqueta: "Menú",
    titulo: "Menú de opciones",
    ruta: "/menu",
    private: false,
  },
  {
    id: "nuevoproducto",
    etiqueta: "Nuevo Producto",
    titulo: "Agregar Nuevo Producto",
    ruta: "/#news",
    private: false,
  },
  {
    id: "contacto",
    etiqueta: "Contacto",
    titulo: "Contacto",
    ruta: "/#contact",
    private: false,
  },
  {
    id: "estadisticas",
    etiqueta: "Estadísticas",
    titulo: "Estadísticas",
    ruta: "/estadisticas",
    private: false,
  },
  {
    id: "reservations",
    etiqueta: "Reservas",
    titulo: "Gestionar Reservas",
    ruta: "/reservations",
    private: true,
  },
  {
    id: "marcas",
    etiqueta: "Marcas",
    titulo: "Marcas que manejamos",
    ruta: "/brands",
    private: true,
  },
];

const MainNav = () => {
  const { totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const visibleNavItems = NAV_ITEMS.filter(
    (item) => !item.private || isAuthenticated,
  );
  return (
    <nav className="flex items-center">
      <div className="hidden lg:flex items-center gap-10">
        <div>
          <ul className="flex gap-10 font-semibold text-lg uppercase justify-between w-full">
            <Link to="/">Inicio</Link>
            {visibleNavItems.map((item) => (
              <li key={item.id}>
                <Link to={item.ruta} title={item.titulo}>
                  {item.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-0.5 h-8 bg-muted"></div>
        <div className="flex gap-4">
          {isAuthenticated ? (
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="relative cursor-pointer"
            >
              <UserStar className="size-6" />
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="relative cursor-pointer"
            >
              <UserIcon className="size-6" />
            </button>
          )}
          <button
            onClick={() => {
              navigate("/cart");
            }}
            className="relative cursor-pointer"
          >
            <ShoppingCartIcon />
            {totalItems > 0 && (
              <span className="absolute -bottom-5 -right-3 bg-primary text-white w-8 min-w-8 h-8 min-h-8 max-w-8 max-h-8 flex justify-center items-center rounded-full text-sm">
                {totalItems}
              </span>
            )}
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M15.803 15.803A7.5 7.5 0 1 1 5.197 5.197a7.5 7.5 0 0 1 10.606 10.606" />
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="m15.803 15.804l5.303 5.303m-5.303-5.304A7.5 7.5 0 1 1 5.197 5.197a7.5 7.5 0 0 1 10.606 10.606Z"
                />
              </g>
            </svg>
          </button>
          <button>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex pr-5 lg:hidden">
        <MenuIcon className="w-6 h-6" />
      </div>
    </nav>
  );
};
export default MainNav;
