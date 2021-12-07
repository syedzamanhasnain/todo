import React, { useState, useEffect } from "react";
import "../TodoApp/style.scss";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [tempTodo, setTempTodo] = useState();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo != "") {
      setTodoList([
        ...todoList,
        { id: Date.now(), text: todo, completed: false, edit: false },
      ]);
      setTodo("");
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      // console.log("zaman");
      handleSubmit();
    }
  };

  const handleKeypressUpdate = (e) => {
    if (e.key === "Enter") {
      
      const selectedIndex = todoList.findIndex(todo=> todo.id === tempTodo[0].id);
      console.log(selectedIndex);
      const newTodos = [...todoList];
      newTodos[selectedIndex]=tempTodo[0];
      setTodoList(newTodos);
  
      console.log(newTodos);    
      
    }
  };

  const deleteTodo = (id) => {
    //console.log(id);
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const result = todoList.filter((todo) => todo.id === id);
    setTempTodo(result);
    console.log(result);
    const resultTodo = todoList.map((todo) => ({
      ...todo,
      edit: todo.id == id ? true : false,
    }));

    setTodoList(resultTodo);
  };

  const handleChangeUpdate = (e) => {
  
    const resultUpdate = tempTodo.map((todo) => ({
      ...todo,
      text:e.target.value,
    }));
    setTempTodo(resultUpdate);
    
  };

  return (
    <div className="">
      <h3 className="text-center pt-4">TODO APP</h3>
      <div className="todo-wrapper ">
        <input
          onChange={handleChange}
          onKeyPress={handleKeypress}
          placeholder="enter todos"
          value={todo}
          className="inputTodo"
        ></input>

        <ul className="list-group list-group-flush">
          {todoList.map((todoData) => (
            <li className="list-group-item" key={todoData.id}>
              {todoData.edit ? (
                <input
                  value={tempTodo[0].text}
                  className="inputEdit"
                  onChange={handleChangeUpdate}
                  onKeyPress={handleKeypressUpdate}
                  onClick={handleKeypressUpdate} autoFocus
                ></input>
              ) : (
                <span>
                  {todoData.text}
                  <i
                    className="fa fa-pencil-square-o editIcon"
                    onClick={() => editTodo(todoData.id)}
                  ></i>
                  <i
                    className="fa fa-trash-o trashIcon"
                    onClick={() => deleteTodo(todoData.id)}
                  ></i>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
