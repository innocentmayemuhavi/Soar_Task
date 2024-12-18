import React from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const StyledCharts = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 25px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  width: 100%;
`;

const Charts = ({ type, data }: { type: string; data: any }) => {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return <Bar data={data} />;
      case "line":
        return (
          <Line
            data={data}
            options={{ plugins: { legend: { display: false } } }}
          />
        );
      case "pie":
        return (
          <Pie
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                datalabels: {
                  color: "#fff",
                  formatter: (value: number, context: any) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${value}%\n${label}`;
                  },
                  font: {
                    weight: "bold",
                  },
                  align: "center",
                  anchor: "center",
                },
              },
            }}
          />
        );
      default:
        return <div>Invalid Data</div>;
    }
  };

  return <StyledCharts>{renderChart()}</StyledCharts>;
};

export default Charts;
