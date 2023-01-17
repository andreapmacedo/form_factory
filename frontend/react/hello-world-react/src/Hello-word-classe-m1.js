import React from "react";
import Greeting from "./Greeting";

class HelloWorld extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>;
        <Greeting name="John" lastName="Doe" />
      </> 
    ) 
  }
}

export default HelloWorld;