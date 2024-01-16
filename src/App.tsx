import { Filho } from "./Filho";

function App() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-blue-600 font-semibold text-2xl">
        Bem vindos à pokedex
      </h1>

      <hr />

      <Filho text="Eu sou uma prop">
        <p>Eu sou um filho</p>
      </Filho>
    </div>
  );
}

export default App;
