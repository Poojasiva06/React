import { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [result, setResult] = useState(""); 

  const handleSearch = (query) => {
    setResult(query); 
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {result && <p>Showing results for: <strong>{result}</strong></p>}
    </div>
  );
};

export default App;
