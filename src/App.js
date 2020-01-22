import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.svg";
import CircleForm from "./components/forms/Circle";
import SquareForm from "./components/forms/Square";
import PlaceholderForm from "./components/forms/Float";
import FrameForm from './components/forms/Frame';
import { github } from "./utils/icons";

function App() {
  return (
    <>
      <header>
        <div className="Header-repo">
          <a href="*" title="github code"><FontAwesomeIcon icon={github} size="2x" /></a>
        </div>
        <div className="Header-title">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React-Input-Farm</h1>
        </div>
      </header>
      <main>
        <CircleForm />
        <SquareForm />
        <PlaceholderForm />
        <FrameForm />
      </main>
    </>
  );
}

export default App;
