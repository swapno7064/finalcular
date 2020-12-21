import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "No of years",
      data: [90, 170, 350, 380, 440, 540, 650, 720, 810, 940],
      backgroundColor: "rgb(67, 55, 237)",
    },
  ],
};

const options = {
  legend: false,
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
        },
        scaleLabel: {
          display: true,
          labelString: "No of years",
        },
        gridLines: {
          drawOnChartArea: false,
          color: "black",
          zeroLineColor: "black",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
          color: "black",
          zeroLineColor: "#fff",
          zeroLineWidth: 1,
        },
        ticks: {
          fontFamily: "'Open Sans Bold', sans-serif",
          fontSize: 11,
        },
      },
    ],
  },
};

const VerticalBar = () => <Bar data={data} options={options} />;

export default VerticalBar;
