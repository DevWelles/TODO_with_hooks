import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHanlder = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }; //na button klik da je completed todo prominit ce samo property completed iz false u true tj obrnut (!item.completed)
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {" "}
        {/*dodajemo classu completed ovisno o tome da li vrijednost propertija todo.completed true ili false a clasa completed mijenja CSS*/}
        {text}
      </li>
      <button onClick={completeHanlder} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
