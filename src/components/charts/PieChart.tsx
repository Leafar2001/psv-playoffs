import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Goals scored",
      backgroundColor: ["#ed1c24", "#000"],
      borderColor: "rgb(0,0,0,0.5)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <Doughnut data={data} style={{width: '50%'}} />
    </div>
  );
};

export default PieChart;