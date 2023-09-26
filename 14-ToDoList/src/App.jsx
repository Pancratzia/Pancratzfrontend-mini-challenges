import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
function App() {
  
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>Lista de Tareas</h1>

        <div className="counter-todos">
          <h3>Nº de Tareas: 4</h3>
          <h3>Pendientes: 3</h3>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>

        <TodoList />
      </div>
    </>
  );
}

export default App;
