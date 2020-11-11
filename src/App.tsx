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
        top={30}
        left={200}
        right={500}
        bottom={300}
        imageUrl="https://placekitten.com/600/600"
      />
    </div>
  );
}

export default App;
