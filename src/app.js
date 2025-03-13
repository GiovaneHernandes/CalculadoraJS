import React, { useState } from "react";
import Filho from "./filho";

const App = () => {
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Erro");
      }
    } else if (value === "AC") {
      setResult("0");
    } else if (value === "+/-") {
      setResult((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setResult((prev) => (parseFloat(prev) / 100).toString());
    } else {
      setResult((prev) =>
        prev === "0" || prev === "Erro" ? value : prev + value
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          width: "390px",
          backgroundColor: "#222",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontSize: "100px",
            color: "white",
            marginBottom: "10px",
            minHeight: "40px",
            marginRight: "10px",
          }}
        >
          {result}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "5px",
          }}
        >
          <Filho valor="AC" cor="rgb(168, 168, 168)" callback={handleClick} />
          <Filho valor="+/-" cor="rgb(168, 168, 168)" callback={handleClick} />
          <Filho valor="%" cor="rgb(168, 168, 168)" callback={handleClick} />
          <Filho valor="/" cor="#ff9500" callback={handleClick} />
          <Filho valor="7" cor="#505050" callback={handleClick} />
          <Filho valor="8" cor="#505050" callback={handleClick} />
          <Filho valor="9" cor="#505050" callback={handleClick} />
          <Filho valor="*" cor="#ff9500" callback={handleClick} />
          <Filho valor="4" cor="#505050" callback={handleClick} />
          <Filho valor="5" cor="#505050" callback={handleClick} />
          <Filho valor="6" cor="#505050" callback={handleClick} />
          <Filho valor="-" cor="#ff9500" callback={handleClick} />
          <Filho valor="1" cor="#505050" callback={handleClick} />
          <Filho valor="2" cor="#505050" callback={handleClick} />
          <Filho valor="3" cor="#505050" callback={handleClick} />
          <Filho valor="+" cor="#ff9500" callback={handleClick} />
          <Filho valor="0" cor="#505050" callback={handleClick} />
          <Filho valor="." cor="#505050" callback={handleClick} />
          <Filho valor="=" cor="#ff9500" callback={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
