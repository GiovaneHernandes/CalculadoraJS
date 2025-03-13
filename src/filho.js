import React from "react";

const Filho = ({ valor, callback, cor }) => {
  return (
    <div
      onClick={() => callback(valor)}
      className="botao"
      style={{
        backgroundColor: cor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        fontSize: "35px",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer",
        margin: "5px",
        userSelect: "none",
      }}
    >
      {valor}
    </div>
  );
};

export default Filho;
