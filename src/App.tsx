import React, { useState } from "react";
import "./App.css";
import ImageCropFeedback from "./components/ImageCropFeedback";
import { Values } from "./types/globals";

const logo = require("./flown.svg");

function App() {
  const [values, setValues] = useState<Values>({
    top: 30,
    left: 200,
    right: 500,
    bottom: 300,
  });

  const onAreaSelect = (
    top: number,
    bottom: number,
    left: number,
    right: number
  ) => {
    setValues({ top, left, right, bottom });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ImageCropFeedback
        top={values.top}
        left={values.left}
        right={values.right}
        bottom={values.bottom}
        imageUrl="https://placekitten.com/600/600"
        onAreaSelect={onAreaSelect}
      />
    </div>
  );
}

export default App;
