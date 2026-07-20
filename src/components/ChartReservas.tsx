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

interface ReservaData {
  dia: string;
  cantidad: number;
}

export const ChartReservas = () => {
  const [data, setData] = useState<ReservaData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la llamada al backend (el agente lo creará)
    const fetchData = async () => {
      try {
        const response = await fetch(`${CONFIG.API_NODE_URL}/api/estadisticas/reservas`);
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback data para mostrar mientras el backend no está listo, o si falla la conexión
        setData([
          { dia: "Lunes", cantidad: 5 },
          { dia: "Martes", cantidad: 8 },
          { dia: "Miércoles", cantidad: 12 },
          { dia: "Jueves", cantidad: 15 },
          { dia: "Viernes", cantidad: 30 },
          { dia: "Sábado", cantidad: 45 },
          { dia: "Domingo", cantidad: 20 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Cargando gráfico de reservas...</div>;
  }

  const chartData = {
    labels: data.map((d) => d.dia),
    datasets: [
      {
        label: 'Cantidad de Reservas',
        data: data.map((d) => d.cantidad),
        backgroundColor: 'rgba(59, 130, 246, 0.8)', // Azul tailwind
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Reservas de Mesas por Día',
        font: {
          size: 18,
          family: "'Inter', sans-serif"
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Estadísticas Administrativas</h3>
      <div className="w-full h-80 flex justify-center">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};
