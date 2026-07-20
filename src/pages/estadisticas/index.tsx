import { ChartReservas } from "../../components/ChartReservas";
import { ChartTopProductos } from "../../components/ChartTopProductos";
import { ChartCategorias } from "../../components/ChartCategorias";

const Estadisticas = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Administrativo</h1>
        <p className="text-lg text-gray-600">
          Consulta el rendimiento, productos estrella y volumen de reservas de nuestra cafetería.
        </p>
      </div>
      
      {/* Grilla Superior: 2 columnas (Top Productos y Categorías) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ChartTopProductos />
        <ChartCategorias />
      </div>

      {/* Grilla Inferior: 1 columna ancha (Reservas) */}
      <div className="grid grid-cols-1 gap-8">
        <ChartReservas />
      </div>
    </div>
  );
};

export default Estadisticas;
