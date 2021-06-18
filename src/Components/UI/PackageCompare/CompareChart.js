import React, { useCallback, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import "chartjs-adapter-moment";
import "chartjs-adapter-luxon";
import { groupDownloadsByPeriod } from "../../utils";
import { DROPDOWN_OPTIONS } from "./config";

const CompareChart = ({ packages = [], selectedFilterKey }) => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState({
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "quarter",
        },
      },
    },
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadChart = useCallback(() => {
    if (packages.length) {
      let labels = [];
      let datasets = [];
      packages.forEach((packageItem, index) => {
        const { downloads, name, color } = packageItem;
        const groupDownload = groupDownloadsByPeriod(downloads);
        if (!index) {
          labels = groupDownload.map((item) => item.period);
        }
        let eachData = groupDownload.map((item) => {
          return { x: item.period, y: item.downloads };
        });
        datasets.push({
          label: name,
          data: eachData,
          fill: false,
          backgroundColor: color,
          borderColor: color,
          lineTension: 0.5,
        });
      });

      const data = { labels, datasets };
      setData(data);

      const timeOut =
        (DROPDOWN_OPTIONS.find((item) => item.key === selectedFilterKey) || {})
          .timeUnit || "month";
      setOptions({
        responsive: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: timeOut,
            },
          },
        },
      });
    }
  });

  useEffect(() => {
    loadChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packages]);

  return <>{data && <Line data={data} options={options} />}</>;
};

export default CompareChart;
