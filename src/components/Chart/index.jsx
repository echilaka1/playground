import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"],
  datasets: [
    {
      label: "Collections",
      backgroundColor: "#BAD5F9",
      borderColor: "#BAD5F9",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "#2F80ED",
      hoverBorderColor: "#2F80ED",
      data: [65, 59, 80, 81, 56, 55],
      barPercentage: 1.0,
    },

    {
      label: "Payouts",
      backgroundColor: "#FECCE0",
      borderColor: "#FECCE0",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "#FD66A3",
      hoverBorderColor: "#FD66A3",
      data: [45, 79, 50, 41, 16, 85],
      barPercentage: 1.0,
    },
  ],
};

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          width="300"
          options={{
            responsive: true,
            type: "bar",
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                  boxWidth: 6,
                },
                display: true,
                position: "bottom",
                align: "start",
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
