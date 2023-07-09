import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, 10, 25, 30, 12, 60];
var beneficios2 = [30, 76, 10, 66, 20, 10, 50, 10, 15, 50, 62, 90];
var beneficios3 = [50, 36, 30, 76, 40, 20, 40, 30, 35, 40, 72, 80];

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var midata = {
  labels: meses,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Beneficios",
      data: beneficios,
      tension: 0.5, //curvatura de la linea del gráfico
      fill: true, //relleno debajo de la linea
      borderColor: "rgb(93, 193, 185)",
      backgroundColor: "rgba(93, 193, 185, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(93, 193, 185)",
      pointBackgroundColor: "rgba(93, 193, 185)",
    },
    {
      label: "Beneficios2",
      data: beneficios2,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(220,220,220)",
      backgroundColor: "rgba(220,220,220, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgba(220,220,220)",
      pointBackgroundColor: "rgba(220,220,220)",
    },
    {
      label: "Beneficios3",
      data: beneficios3,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(128, 128, 128)",
      backgroundColor: "rgba(128, 128, 128, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgba(128, 128, 128)",
      pointBackgroundColor: "rgba(128, 128, 128)",
    },
    {
      label: "Otra línea",
      data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
    },
  ],
};

var misoptions = {
  scales: {
    y: {
      min: 0, //indica donde empieza
    },
    x: {
      ticks: { color: "rgb(255, 99, 132)" },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function LinesChart() {
  return <Line data={midata} options={misoptions} />;
}
