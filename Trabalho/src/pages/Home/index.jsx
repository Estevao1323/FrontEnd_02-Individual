import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const itens = ["tv", "geladeira", "celulares", "cama, mesa e banho"];
  const [pesquisa, setPesquisa] = useState("");
  const [resultado, setResultado] = useState([]);
  const handleChange = (e) => {
    const valorPesquisa = e.target.value;
    setPesquisa(valorPesquisa);
    const resultadoAtualizado =
      valorPesquisa === ""
        ? []
        : itens.filter((item) => item.startsWith(valorPesquisa));
    setResultado(resultadoAtualizado);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input type="text" value={pesquisa} onChange={(e) => handleChange(e)} />
      <div>
        {resultado.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
