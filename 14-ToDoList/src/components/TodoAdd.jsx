const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        className="input-add"
        name="description"
        value="Aprender React.js"
        placeholder="¿Qué quieres hacer?"
      />

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
