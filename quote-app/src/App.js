import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h2>Random Quote</h2>
      <p>{quote}</p>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  );
}

export default App;
