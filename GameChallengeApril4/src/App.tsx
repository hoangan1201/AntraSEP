import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [dimension, setDimension] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseInt(inputValue);
    setDimension(value);
  };

  return (
    <div>
      <h1>Game</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numInput">Dimension</label>
        <input
          type="number"
          name="numInput"
          id="numInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          min={"4"}
          max={"10"}
          required
        />
        <button type="submit">Next</button>
      </form>
      {dimension && <GameBoard dimension={dimension} />}
    </div>
  );
}

export default App;
