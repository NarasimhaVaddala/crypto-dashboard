"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import type { ChartProps } from "@/types";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

export default function ChartView({ history, coin }: ChartProps) {
  const labels = history.map((p) =>
    new Date(p[0]).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: `${coin} (USD)`,
        data: history.map((p) => p[1]),
        borderColor: "#22c55e",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        fill: true,
        tension: 0.3,
        pointRadius: 10,
        pointBackgroundColor: "#22c55e",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      filler: {
        propagate: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#e0dff1" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#e0dff1" },
        grid: { color: "rgba(224, 223, 241, 0.1)" },
      },
    },
    elements: {
      line: {
        fill: true,
      },
    },
  };

  return (
    <div className="p-4 rounded-xl">
      <h2 className="text-lg font-semibold text-secondary mb-2">
        {coin?.toUpperCase()} trend for Last 6 Hours
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
}
