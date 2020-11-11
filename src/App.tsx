import React from "react";
import logo from "./flown.svg";
import "./App.css";
import ImageCropFeedback from "./components/ImageCropFeedback";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ImageCropFeedback
        width={600}
        height={600}
        top={30}
        left={200}
        right={200}
        bottom={200}
        imageUrl="https://placekitten.com/600/600"
      />
    </div>
  );
}

export default App;
