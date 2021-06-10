import { Fragment, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { PACKAGE } from "./../../../shared/endpoints";
import isEmpty from "lodash/isEmpty";
import RowSeparator from "../Common/Separator/RowSeparator";

const options = {
  scales: {
    responsive: true,
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const VersionHistoryChart = ({ packageName }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchVersionHistory = async () => {
      try {
        const { data } = await axios.get(PACKAGE.PACKAGE_HISTORY, {
          params: { package: packageName },
        });
        const response = data.data;
        const convertToKb = (bytes) => {
          return Math.round(bytes / Math.pow(1024, 1), 2);
        };
        const formattedData = Object.keys(response)
          .filter((key) => {
            const { gzip, size, version } = response[key];
            return gzip && size && version;
          })
          .map((key) => {
            const { gzip, size, version } = response[key];
            return {
              gzip: convertToKb(gzip),
              size: convertToKb(size),
              version,
            };
          });
        setData({
          labels: formattedData.map((data) => data.version),
          datasets: [
            {
              label: "MIN (in KB)",
              data: formattedData.map((data) => data.size),
              backgroundColor: "rgb(101, 195, 248)",
            },
            {
              label: "GZIP (in KB)",
              data: formattedData.map((data) => data.gzip),
              backgroundColor: "rgb(101, 161, 248)",
            },
          ],
        });
      } catch (e) {
        //
      }
    };
    fetchVersionHistory();
  }, [packageName]);
  return (
    <Fragment>
      {!isEmpty(data) && (
        <div>
          <RowSeparator title="version history" />
          <Bar className="px-5" data={data} redraw={false} options={options} />
        </div>
      )}
    </Fragment>
  );
};

export default VersionHistoryChart;
