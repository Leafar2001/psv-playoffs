import React from "react";
import 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const BarChart = ({chartData}: any) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;