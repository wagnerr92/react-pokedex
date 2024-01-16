import { useState } from "react";
import { Filho } from "./Filho";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-blue-600 font-semibold text-2xl">
        Bem vindos à pokedex
      </h1>

      <label>{count}</label>
      <button 
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-600 hover:bg-blue-400 w-24 text-white"
      >
        Incrementar
      </button>

      <hr />

      <Filho text="Eu sou uma prop">
        <p>Eu sou um filho</p>
      </Filho>
    </div>
  );
}

export default App;
