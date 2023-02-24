import { Fragment, useState } from "react";

import "./App.css";
import logo from "./logo.svg";
import Request01 from "./components/Request01";
import MyChart from "./components/MyChart";
import BarChart from "./components/BarChart";
import { UserData } from "./components/Data";
import LineChart from "./components/LineChart";
import NotionChart from "./components/NotionChart";

const App = () => {
  const [userData, setUserData] = useState({
    // labels: List of 'YEAR' in Data. (axis: X)
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Gained Users",
        data: UserData.map((data) => data.userGain),
      },
      {
        label: "Lost Users",
        type: "line",
        data: UserData.map((data) => data.userLost),
      },
    ],
  });

  return (
    <Fragment>
      <img src={logo} className="App-logo" alt="logo" />
      <Request01 />
      <MyChart />
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      {/* <NotionChart /> */}
    </Fragment>
  );
};

export default App;
