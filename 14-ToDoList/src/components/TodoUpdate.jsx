import { FaEdit } from "react-icons/fa"

const TodoUpdate = ( { todo, handleUpdateTodo} ) => {

  
  return (
    <form>
      <input
        type="text"
        className="input-update"
        name="description"
        value={todo.description}
        placeholder="¿Qué quieres hacer?"
      />

      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  )
}

export default TodoUpdate