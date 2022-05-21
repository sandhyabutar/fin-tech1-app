import React from "react";
 export default class Abc extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Sandhya butar",
    };
  }
  componentsDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.warn("render");

    return (
      <div className="Abc">
        <h1>components Did update</h1>
      </div>
    );
  }
}
