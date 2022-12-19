import "chart.js/auto";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }: any) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Doughnut options={options} data={chartData} />
    </div>
  );
};

export default DoughnutChart;
