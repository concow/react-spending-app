import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  // console.log(dataPoints);
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  console.log(dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
