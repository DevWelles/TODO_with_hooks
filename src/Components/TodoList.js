import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(
          (
            todo //mapira kroz filteredTodos umisto samo Todos pa ce ovisno i switchu prkazati filtriranu todos array
          ) => (
            <Todo
              todo={todo}
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              key={todo.id}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
