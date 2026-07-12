import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  ChartTooltip,
  ChartLegend,
  Filler
);

interface GenericChartProps {
  title: string;
  data: any[];
  type?: 'bar' | 'area' | 'line' | 'composed' | 'pie' | 'radial';
  isLoading?: boolean;
}

// Strict indigo/lavender/violet theme colors
const THEME_COLORS = [
  '#6366f1', // indigo-500
  '#a855f7', // purple-500
  '#818cf8', // indigo-400
  '#c084fc', // purple-400
  '#4f46e5', // indigo-600
  '#e879f9', // fuchsia-400
  '#a5b4fc', // indigo-300
];

const Chart: React.FC<GenericChartProps> = ({ title, data, type = 'composed', isLoading }) => {
  const chartData = useMemo(() => {
    return data?.map((item) => {
      if (item.month !== undefined && item.total !== undefined && Object.keys(item).length === 2) {
        return { name: item.month, total: item.total };
      }
      return { name: item.month || item.name || "", ...item };
    }) ?? [];
  }, [data]);

  const dataKeys = useMemo(() => {
    return chartData.length > 0 
      ? Object.keys(chartData[0]).filter(k => k !== 'name' && k !== 'month')
      : [];
  }, [chartData]);

  const labels = chartData.map(d => d.name);

  // Reusable Chart.js options for linear charts
  const commonOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: dataKeys.length > 1,
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          font: { size: 12, family: "'Inter', sans-serif", weight: '500' },
          color: '#4b5563',
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e0e7ff',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        titleFont: { size: 13, weight: 'bold', family: "'Inter', sans-serif" },
        bodyFont: { size: 13, family: "'Inter', sans-serif" },
        callbacks: {
          labelColor: function(context: any) {
            return {
              borderColor: context.dataset.borderColor || context.dataset.backgroundColor,
              backgroundColor: context.dataset.borderColor || context.dataset.backgroundColor,
            };
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { color: '#64748b', font: { size: 12, family: "'Inter', sans-serif" } }
      },
      y: {
        border: { display: false },
        grid: { color: '#f1f5f9', drawTicks: false },
        ticks: { color: '#64748b', font: { size: 12, family: "'Inter', sans-serif" }, padding: 10 }
      }
    }
  };

  const renderChart = () => {
    switch (type) {
      case 'pie':
      case 'radial':
        // Chart.js doughnut replaces both pie and radial
        const pieData = {
          labels: chartData.map(d => d.name),
          datasets: [{
            data: chartData.map(d => d[dataKeys[0] || 'total']),
            backgroundColor: THEME_COLORS,
            borderWidth: 0,
            hoverOffset: 4,
            borderRadius: 4
          }]
        };
        const pieOptions: any = {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '75%',
          plugins: {
            legend: {
              position: 'left',
              labels: {
                usePointStyle: true,
                boxWidth: 8,
                boxHeight: 8,
                font: { size: 13, family: "'Inter', sans-serif", weight: '500' },
                color: '#4b5563',
                padding: 20
              }
            },
            tooltip: commonOptions.plugins.tooltip
          }
        };
        return <Doughnut data={pieData} options={pieOptions} />;

      case 'area':
        const areaData = {
          labels,
          datasets: dataKeys.map((key, i) => ({
            label: key,
            data: chartData.map(d => d[key]),
            borderColor: THEME_COLORS[i % THEME_COLORS.length],
            backgroundColor: (context: any) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              const color = THEME_COLORS[i % THEME_COLORS.length];
              gradient.addColorStop(0, `${color}66`); // 40% opacity
              gradient.addColorStop(1, `${color}00`); // 0% opacity
              return gradient;
            },
            fill: true,
            tension: 0.4, // Smooth curve
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointBackgroundColor: THEME_COLORS[i % THEME_COLORS.length],
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          }))
        };
        return <Line data={areaData} options={commonOptions} />;

      case 'bar':
        const barData = {
          labels,
          datasets: dataKeys.map((key, i) => ({
            label: key,
            data: chartData.map(d => d[key]),
            backgroundColor: THEME_COLORS[i % THEME_COLORS.length],
            borderRadius: 6,
            barThickness: 16,
            borderSkipped: false
          }))
        };
        return <Bar data={barData} options={commonOptions} />;

      case 'line':
      case 'composed':
      default:
        // Use a multi-line chart for line and composed types in chart.js
        const lineData = {
          labels,
          datasets: dataKeys.map((key, i) => ({
            label: key,
            data: chartData.map(d => d[key]),
            borderColor: THEME_COLORS[i % THEME_COLORS.length],
            backgroundColor: THEME_COLORS[i % THEME_COLORS.length],
            fill: false,
            tension: 0.4, // Smooth curve
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointBackgroundColor: THEME_COLORS[i % THEME_COLORS.length],
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          }))
        };
        return <Line data={lineData} options={commonOptions} />;
    }
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-3xl shadow-[0_2px_20px_-5px_rgba(99,102,241,0.1)] border border-indigo-50 h-[380px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800 tracking-tight">
          {title}
        </h3>
        <div className="px-3 py-1.5 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-600 bg-indigo-50/50 cursor-pointer hover:bg-indigo-100/50 transition-colors">
          Last week <span className="ml-1 opacity-70">▾</span>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center flex-1">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : chartData.length === 0 ? (
        <div className="flex items-center justify-center flex-1 text-gray-400 text-sm font-medium">
          No data available
        </div>
      ) : (
        <div className="w-full flex-1 min-h-0 relative">
          {renderChart()}
        </div>
      )}
    </div>
  );
};

export default Chart;
