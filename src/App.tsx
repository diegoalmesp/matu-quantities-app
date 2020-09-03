import React from "react";
import matu from "./mishi.jpg";
import "./App.css";
import SoundImage from "./components/sound-image";
import AmountsComparisonPage from "./pages/amounts-comparison";

function App() {
  return (
    <div className="App">
      <SoundImage image={matu} />
      <AmountsComparisonPage />
    </div>
  );
}

export default App;
