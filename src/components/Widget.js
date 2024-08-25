// src/components/Widget.js
import React from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Widget = ({ title, data, type }) => {
  // Remove labels from chart data to not display them above the chart
  const chartData = {
    ...data,
    labels: [], // Clear labels from being shown directly in the chart
  };

  const renderChart = () => {
    switch (type) {
      case 'doughnut':
        return <Doughnut data={chartData} />;
      case 'pie':
        return <Pie data={chartData} />;
      case 'bar':
        return <Bar data={chartData} />;
      default:
        return <p>No data available</p>;
    }
  };

  const renderLegend = () => {
    if (type === 'doughnut' || type === 'pie') {
      return (
        <div className="chart-legend">
          {data.labels.map((label, index) => (
            <div key={index} className="chart-legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></span>
              {label}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="widget">
      <h3>{title}</h3>
      <div className="chart-container">
        {renderChart()}
        {renderLegend()}
      </div>
    </div>
  );
};

export default Widget;
