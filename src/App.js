import { Fragment } from "react";

import logo from "./logo.svg";
import Request01 from "./components/Request01";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <img src={logo} className="App-logo" alt="logo" />
      <Request01 />
    </Fragment>
  );
};

export default App;
