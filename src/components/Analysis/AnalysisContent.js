import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

function AnalysisContent({ answered }) {
  console.log(answered);

  const category = [];
  const point = [];

  answered.map((val) => {
    category.push(val.category);
    point.push(val.point);
  });

  const data = {
    labels: category,
    datasets: [
      {
        label: "Exam name",
        data: point,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} options={options} />;
}

export default AnalysisContent;
