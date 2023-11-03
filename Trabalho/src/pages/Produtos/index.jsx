import produtos from "../../components/Produtos";

function Produtos() {
  return (
    <div>
      <h1>Pagina de Produtos</h1>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
