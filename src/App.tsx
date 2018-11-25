import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
// import cli from "./Cli";

export default class App extends Component {
  // componentDidMount() {
  //   (window as any).cli = cli;
  //   console.log("Hello There, type cli to start...");
  // }
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
