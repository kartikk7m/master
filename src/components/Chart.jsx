import { useState } from "react";
import Server from "../server/Server";

const Chart = (props) => {
  const [checked, setChecked] = useState([]);
  const [isSubscribe, setIsSubscribe] = useState(false);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
      setIsSubscribe(false);
    }
    setChecked(updatedList);
  };

  // Print the charts from App
  const printCharts =
    props.data &&
    props.data.map((item, index) => {
      return (
        <label key={index} className="labelStyle">
          <input type="checkbox" onChange={handleCheck} value={item.name} />
          {item.name}
          <br />
        </label>
      );
    });

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

    // To handle the subscribe button
  const handleSubscribe = () =>
    checkedItems.length > 0 ? setIsSubscribe(true) : setIsSubscribe(false);

  return (
    <div>
      <div className="chartContainer">
        <h4 className="btn">{props.chartHeading}</h4>
        {printCharts}
        <br />
        <input
          className="btn"
          type={"button"}
          value="subscribe"
          onClick={handleSubscribe}
          disabled={checkedItems.length > 0 ? false : true}
        />
      </div>
      <div>
        {isSubscribe && (
          <Server chartHeading={props.chartHeading} data={checkedItems} />
        )}
      </div>
    </div>
  );
};
export default Chart;
