import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos(); //ne radi mi
  }, [todos, status]); //ako dodamo drugi element u obliku prazne array [] u useEffect onda se funckija useEffect odvije samo jednom prilikom mountnja
  //ako stavimo neku varijablu unutar array kao drugi parametar onda ce se useEffect pokrenit svaki pt kad se promini taj paramaetar, u ovom slucaju to je kad se promini state todos i status

  useEffect(() => {
    // pokreće se samo jednom kad se app starta
    getLocalTodos(); //ne radi mi
  }, []);

  const filterHandler = () => {
    //ovu func možemo raspisati i u useEffect, ali ovako je odvojena zasebna metoda koju pozivamo u useEffectu
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local storage: ali ne radi mi haha
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos")); //parsiramo da bi ga mogli pospremit
      console.log(todoLocal); //spremljeno je stanje u varijablu todoLocal
      setTodos(todoLocal); //ne zaboravi cleareti local storage u devToolsima i onda refreshati
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos} //minja samo u stateu array
        setInputText={setInputText} //minja samo u stateu string koji koristimo kao property u jednom todo text:inputText
        setStatus={setStatus} //isto minja samo u statetu status ovisno sto odaberemo u select elementu
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
