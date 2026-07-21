import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CONFIG } from '../config';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface CategoriaData {
  categoria: string;
  porcentaje: number;
}

export const ChartCategorias = () => {
  const [data, setData] = useState<CategoriaData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${CONFIG.API_NODE_URL}/api/estadisticas/categorias`);
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback data
        setData([
          { categoria: "Cafés Calientes", porcentaje: 45 },
          { categoria: "Bebidas Frías", porcentaje: 30 },
          { categoria: "Postres", porcentaje: 25 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-4 text-center text-gray-500">Cargando gráfico...</div>;

  const chartData = {
    labels: data.map((d) => d.categoria),
    datasets: [
      {
        label: '% de Ventas',
        data: data.map((d) => d.porcentaje),
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)', // Rojo
          'rgba(59, 130, 246, 0.8)', // Azul
          'rgba(16, 185, 129, 0.8)', // Verde
          'rgba(139, 92, 246, 0.8)', // Morado (por si acaso hay 4)
        ],
        borderColor: [
          'rgba(220, 38, 38, 1)',
          'rgba(37, 99, 235, 1)',
          'rgba(5, 150, 105, 1)',
          'rgba(124, 58, 237, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Ventas por Categoría (%)',
        font: { size: 18, family: "'Inter', sans-serif" }
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
      <div className="w-full h-80">
        <Doughnut options={options} data={chartData} />
      </div>
    </div>
  );
};
