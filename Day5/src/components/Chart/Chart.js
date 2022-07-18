import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datapointsvalue = props.datapoints.map((datapoint) => datapoint.value);
  const totalmax = Math.max(...datapointsvalue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalmax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
