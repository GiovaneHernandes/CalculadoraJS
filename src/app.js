import React, { useState } from "react";
import Filho from "./filho";
import "./calculadora.css";

const App = () => {
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString()); // Calcula a expressão
      } catch {
        setResult("Erro"); // Caso haja erro na expressão
      }
    } else if (value === "AC") {
      setResult("0"); // Limpa a tela
    } else if (value === "+/-") {
      setResult((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev)); // Inverte o sinal
    } else if (value === "%") {
      setResult((prev) => (parseFloat(prev) / 100).toString()); // Calcula o percentual
    } else {
      setResult(
        (prev) => (prev === "0" || prev === "Erro" ? value : prev + value) // Concatena números ou operadores
      );
    }
  };

  return (
    <div className="container">
      <div className="display">
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <Filho valor="AC" cor="rgb(168, 168, 168)" callback={handleClick} />
        <Filho valor="+/-" cor="rgb(168, 168, 168)" callback={handleClick} />
        <Filho valor="%" cor="rgb(168, 168, 168)" callback={handleClick} />
        <Filho valor="/" cor="#ff9500" callback={handleClick} />
      </div>
      <div className="buttons">
        <Filho valor="7" cor="#505050" callback={handleClick} />
        <Filho valor="8" cor="#505050" callback={handleClick} />
        <Filho valor="9" cor="#505050" callback={handleClick} />
        <Filho valor="*" cor="#ff9500" callback={handleClick} />
      </div>
      <div className="buttons">
        <Filho valor="4" cor="#505050" callback={handleClick} />
        <Filho valor="5" cor="#505050" callback={handleClick} />
        <Filho valor="6" cor="#505050" callback={handleClick} />
        <Filho valor="-" cor="#ff9500" callback={handleClick} />
      </div>
      <div className="buttons">
        <Filho valor="1" cor="#505050" callback={handleClick} />
        <Filho valor="2" cor="#505050" callback={handleClick} />
        <Filho valor="3" cor="#505050" callback={handleClick} />
        <Filho valor="+" cor="#ff9500" callback={handleClick} />
      </div>
      <div className="buttons">
        <Filho valor="0" cor="#505050" callback={handleClick} />
        <Filho valor="." cor="#505050" callback={handleClick} />
        <Filho valor="=" cor="#ff9500" callback={handleClick} />
      </div>
    </div>
  );
};

export default App;
