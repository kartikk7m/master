import "./App.css";
import Chart from "./components/Chart";
import chart1 from "./datasource/Chart1";
import chart2 from "./datasource/Chart2";

function App() {
  return (
    <div>
      <p>Click any channels in the chart to subscribe</p>
      {/* We can include n number of charts here */}
      <Chart chartHeading={"Chart 1"} data={chart1} />
      <Chart chartHeading={"Chart 2"} data={chart2} />
    </div>
  );
}

export default App;
