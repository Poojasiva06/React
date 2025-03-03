import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["red", "blue", "green", "purple", "orange", "pink"];
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h2>Background Color Changer</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
