import React, { Component } from "react";
import "./App.css";
// import Price from './components/price';
import Custom from "./components/custom";
import Shirt from "./components/shirt";
import SVGComponent from "./components/SVGComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      design: "",
    };
  }

  changeDesign = (value) => {
    this.setState({ design: value });
  };

  render() {
    return (
      <div className="grid-container">
        <div className="grid-item">
          <Custom state={this.state} changeDesign={this.changeDesign} />
        </div>

        <SVGComponent design={this.state.design} />
      </div>
    );
  }
}

export default App;
