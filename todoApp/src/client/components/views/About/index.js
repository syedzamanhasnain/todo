import React, { useState, useEffect } from "react";
import "../About/style.scss";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo != "") {
      setTodoList([...todoList, { id: Date.now(), text: todo }]);
      setTodo("");
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      console.log("zaman");
      handleSubmit();
    }
  };

  return (
    <div className="home-wrapper">
      <div className="width">
        <div className=" inputStyle">
          <input
            onChange={handleChange}
            onKeyPress={handleKeypress}
            value={todo}
          ></input>
        </div>
        <ul className="list-group list-group-flush">
          {todoList.map((todoData) => (
            <li className="list-group-item" key={todoData.id}>
              {todoData.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
