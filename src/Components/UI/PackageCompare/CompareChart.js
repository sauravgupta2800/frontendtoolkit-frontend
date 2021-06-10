import React, { useCallback, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import "chartjs-adapter-moment";
import "chartjs-adapter-luxon";
import { groupDownloadsByPeriod } from "../../utils";

// const data = {
//   labels: ["1", "2", "3", "4", "5", "6"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         {
//           x: "2021-06-10",
//           y: 20,
//         },
//         {
//           x: "51-04-10",
//           y: 15,
//         },
//       ],
//       fill: false,
//       backgroundColor: "#754fa0",
//       borderColor: "#754fa0",
//       lineTension: 0.5,
//     },
//     {
//       label: "# of No Votes",
//       data: [
//         {
//           x: "2021-04-10",
//           y: 15,
//         },
//         {
//           x: "2021-05-10",
//           y: 20,
//         },
//       ],
//       fill: false,
//       backgroundColor: "#09b7bf",
//       borderColor: "#09b7bf",
//       lineTension: 0.5,
//     },
//   ],
// };

const options = {
  responsive: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "quarter",
      },
    },
  },
};

const CompareChart = ({ packages = [] }) => {
  const [data, setData] = useState(null);
  //const [options, setData] = useState([]);

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
    }
  });

  useEffect(() => {
    loadChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packages]);

  return <>{data && <Line data={data} options={options} />}</>;
};

export default CompareChart;
