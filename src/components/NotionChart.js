import React, { useEffect, useRef } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const NotionChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const testChart = new ChartJS(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "rgba(255, 99, 132, 1)",
            yAxisID: "y-axis-1",
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [30, 50, 10, 70, 15, 25, 45],
            borderColor: "rgba(54, 162, 235, 1)",
            fill: false,
            yAxisID: "y-axis-2",
          },
        ],
      },
      options: {
        responsive: true,
        tooltips: {
          mode: "index",
          intersect: false,
        },
        // scales: {
        //   yAxes: [
        //     {
        //       type: "linear",
        //       display: true,
        //       position: "left",
        //       id: "y-axis-1",
        //     },
        //     {
        //       type: "linear",
        //       display: true,
        //       position: "right",
        //       id: "y-axis-2",
        //       gridLines: {
        //         drawOnArea: false,
        //       },
        //     },
        //   ],
        // },
      },
    });
    testChart.destroy();
  }, []);

  return <canvas ref={chartRef} />;
};

export default NotionChart;
