import React from "react";
import Chart from "react-apexcharts";
import { useStateContext } from "../contexts/ContextProvider";

const Page3 = () => {
  const { currentMode } = useStateContext();

  const dataSource = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
      title: {
        text: "Custom DataLabels",
        align: "center",
        floating: true,
      },
    },
  };

  let charts = [];
  for (let i = 0; i < 8; i++) {
    charts[i] = {
      options: dataSource.options,
      series: dataSource.series,
    };
  }

  return (
    <div className="flex flex-col p-10">
      <div className="mt-5">
        <p className="text-4xl font-extrabold tracking-tight text-blue-900 dark:text-white">
          Futures Dashboard
        </p>
      </div>
      <div className="flex mt-5 flex-row flex-wrap items-center justify-center gap-2 lg:gap-4 sm:gap-1">
        {charts.map((chart, index) => (
          <div
            key={index}
            className="m-2 p-2 bg-white dark:bg-secondary-dark-bg rounded-3xl"
          >
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
