import React, { useState, useCallback } from "react";
import DemoOutput from "./components/UI/Button/Demo/Demo";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setParagraph] = useState(false);
  const [allowToggle, setToggle] = useState(false);

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setParagraph((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowTogglehandler = () => {
    setToggle(true);
  };
  // alternative way of building component

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/* if false is passed then it will never so output */}
      <Button onClick={allowTogglehandler}>show paragraph</Button>
      <div></div>
      <Button onClick={toggleParagraph}>show paragraph</Button>
      {/* <Button onClick={allowTogglehandler}>show paragraph</Button> */}
    </div>
  );
}

export default App;
