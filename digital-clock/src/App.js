import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>Digital Clock</h2>
      <h1>{time}</h1>
    </div>
  );
}

export default App;
