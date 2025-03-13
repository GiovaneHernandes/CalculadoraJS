import React from "react";

const Filho = ({ valor, callback, cor }) => {
  return (
    <button onClick={() => callback(valor)} className={`botao ${cor}`}>
      {valor}
    </button>
  );
};

export default Filho;
