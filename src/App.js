import "./App.css";
import React from "react";
import Example1 from "./features/Example1";
import Example2 from "./features/Example2";
import Example3 from "./features/Example3";
import Example4 from "./features/Example4";
import Example5 from "./features/Example5";

function App() {
  return (
    <>
      <h1
        style={{
          fontFamily: "Helvetica Neue",
          fontSize: "50px",
          position: "sticky",
        }}
      >
        Card component UI exercise
      </h1>
      <div className="App">
        <div className="flex-template rightDiv">
          <Example3 />
          {/* <Example5 /> */}
        </div>
        <div className="flex-template midDiv">
          <a
            style={{ fontSize: "25px" }}
            href={"https://github.com/dlaurent123/cardjs"}
          >
            Git Hub
          </a>
          <Example2 />
        </div>
        <div className="flex-template leftDiv">
          <Example4 />
          <Example1 />
        </div>
      </div>
    </>
  );
}

export default App;
