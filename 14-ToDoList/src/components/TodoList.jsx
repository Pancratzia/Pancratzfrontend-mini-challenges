import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo,
}) => {

  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
