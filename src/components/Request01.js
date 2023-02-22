import React, { Fragment } from "react";
import axios from "axios";

const correctUrl = "https://swapi.dev/api/people/1";
// const uncorrectUrl = "https://swapi.dev/api/false/1";

const requestHandler = () => {
  axios
    .get(correctUrl)
    .then((result) => {
      // 성공 시.
      console.log("Request Success");
    })
    .catch((error) => {
      // 실패 시.
      console.log("Request Fail");
    })
    .finally(() => {
      // 성공 실패 관련없이.
      console.log("always show up Finally");
    });
};

const Request01 = () => {
  return (
    <Fragment>
      <button onClick={requestHandler}>Do Request.</button>
    </Fragment>
  );
};

export default Request01;
