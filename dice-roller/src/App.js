import { useState } from "react";
import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  return (
    <div className="container">
      <h2>🎲 Dice Roller 🎲</h2>
      <div className="dice">{diceNumber}</div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
