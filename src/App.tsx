import React, { useState } from "react";
import logo from "./images/flown.svg";
import "./App.css";
import ImageCropFeedback from "./components/ImageCropFeedback";
import { Values } from "./types/globals";
import CroppedImage from "./components/CroppedImage";

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
    console.log({ top, bottom, left, right });
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
      <h1>Result</h1>
      <CroppedImage
        top={values.top}
        left={values.left}
        right={values.right}
        bottom={values.bottom}
      />
    </div>
  );
}

export default App;
