import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CONFIG } from '../config';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TopProductoData {
  producto: string;
  ventas: number;
}

export const ChartTopProductos = () => {
  const [data, setData] = useState<TopProductoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${CONFIG.API_NODE_URL}/api/estadisticas/top-productos`);
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback data
        setData([
          { producto: "Capuchino Clásico", ventas: 150 },
          { producto: "Frapuccino Moka", ventas: 120 },
          { producto: "Latte de Vainilla", ventas: 105 },
          { producto: "Brownie de Chocolate", ventas: 90 },
          { producto: "Té Matcha", ventas: 75 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-4 text-center text-gray-500">Cargando gráfico...</div>;

  const chartData = {
    labels: data.map((d) => d.producto),
    datasets: [
      {
        label: 'Unidades Vendidas',
        data: data.map((d) => d.ventas),
        backgroundColor: 'rgba(245, 158, 11, 0.8)', // Ambar tailwind
        borderColor: 'rgba(217, 119, 6, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // Esto lo convierte en un gráfico de barras horizontales
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Top 5 Productos Más Vendidos',
        font: { size: 18, family: "'Inter', sans-serif" }
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
      <div className="w-full h-80">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};
