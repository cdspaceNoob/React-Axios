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

const postRequestHandler = () => {
  axios
    .post(
      "https://react-hooks-fe144-default-rtdb.asia-southeast1.firebasedatabase.app/test.json",
      {
        lib: "axios",
        method: "post",
        name: "조형준",
      }
    )
    .then((result) => {
      console.log("successful");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const Request01 = () => {
  return (
    <Fragment>
      <button onClick={requestHandler}>Get Request.</button>
      <button onClick={postRequestHandler}>Post Request.</button>
    </Fragment>
  );
};

export default Request01;
