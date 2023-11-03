const Task = ({ item, excluirTarefa }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
    </div>
  );
};

export default Task;
