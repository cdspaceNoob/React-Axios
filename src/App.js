import { Fragment } from "react";

import "./App.css";
import logo from "./logo.svg";
import Request01 from "./components/Request01";
import MyChart from "./components/MyChart";

const App = () => {
  return (
    <Fragment>
      <img src={logo} className="App-logo" alt="logo" />
      <Request01 />
      <MyChart />
    </Fragment>
  );
};

export default App;
