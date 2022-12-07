import React from "react";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({chartData}: any) => {
  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DoughnutChart;