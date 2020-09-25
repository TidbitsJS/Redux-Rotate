import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div
          onClick={() =>
            props.rotating ? props.stopAction() : props.startAction()
          }
        >
          <img
            src={logo}
            className={"App-logo" + (props.rotating ? "" : " App-logo-paused")}
            alt="logo"
          />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    startAction: () =>
      dispatch({
        type: "START",
        payload: true,
      }),
    stopAction: () =>
      dispatch({
        type: "STOP",
        payload: false,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
