import React, { useState, useEffect } from "react";
import { DragDropContext,Droppable} from 'react-beautiful-dnd';
import "../TodoApp/style.scss";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("");
  const [tempTodo, setTempTodo] = useState();
  //const [itemCount, setItemCount] = useState(0);

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
      // setItemCount(itemCount + 1);
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
      const selectedIndex = todoList.findIndex(
        (todo) => todo.id === tempTodo[0].id
      );
      console.log(selectedIndex);
      const newTodos = [...todoList];
      newTodos[selectedIndex] = tempTodo[0];
      setTodoList(newTodos);

      console.log(newTodos);
    }
  };

  const deleteTodo = (id) => {
    //console.log(id);
    setTodoList(todoList.filter((todo) => todo.id !== id));
    // setItemCount(itemCount - 1);
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

  const completeTodo = (id) => {
    const selectedIndex = todoList.findIndex((todo) => todo.id === id);
    const completeStatus = todoList[selectedIndex];
    // console.log(completeStatus);
    if (completeStatus.completed) {
      completeStatus.completed = false;
     // setItemCount(itemCount + 1);

      console.log(completeStatus);
    } else {
      completeStatus.completed = true;
     // setItemCount(itemCount - 1);
      // console.log(completeStatus);
    }
    const completedResult = [...todoList];
    completedResult[selectedIndex] = completeStatus;
    setTodoList(completedResult);

    //console.log(selectedIndex);
  };

  const handleChangeUpdate = (e) => {
    const resultUpdate = tempTodo.map((todo) => ({
      ...todo,
      text: e.target.value,
    }));
    setTempTodo(resultUpdate);
  };

  const btnAll = () => {
    console.log("btn all clicked");
    setFilter("");
  };
  const btnActive = () => {
    console.log("btn active clicked");
    setFilter(false);
  };
  const btnComplete = () => {
    console.log("btn complete clicked");
    setFilter(true);
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
      <DragDropContext>
      <Droppable droppableId="list">
      {(provided) => (
        <ul className="list-group list-group-flush" {...provided.droppableProps} ref={provided.innerRef}>
          {filter === ""
            ? todoList.map((todoData) => (
                <li className="list-group-item" key={todoData.id}>
                  {todoData.edit ? (
                    <input
                      value={tempTodo[0].text}
                      className="inputEdit"
                      onChange={handleChangeUpdate}
                      onKeyPress={handleKeypressUpdate}
                      onClick={handleKeypressUpdate}
                      autoFocus
                    ></input>
                  ) : (
                    <span>
                      <span
                        onDoubleClick={() => completeTodo(todoData.id)}
                        className={
                          todoData.completed ? "completed" : "incompleted"
                        }
                      >
                        {todoData.text}
                      </span>
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
              ))
            : todoList
                .filter((data) => data.completed === filter)
                .map((todoData) => (
                  <li className="list-group-item" key={todoData.id}>
                    {todoData.edit ? (
                      <input
                        value={tempTodo[0].text}
                        className="inputEdit"
                        onChange={handleChangeUpdate}
                        onKeyPress={handleKeypressUpdate}
                        onClick={handleKeypressUpdate}
                        autoFocus
                      ></input>
                    ) : (
                      <span>
                        <span
                          onDoubleClick={() => completeTodo(todoData.id)}
                          className={
                            todoData.completed ? "completed" : "incompleted"
                          }
                        >
                          {todoData.text}
                        </span>
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
      )}
        </Droppable>
        </DragDropContext>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <span className="countItem">
              
              {todoList.filter((data) => data.completed === false).length} items
              left
            </span>
            <span className="float-right">
              <button
                type="button"
               // className="btn btn-outline-primary btn-sm ml-2"
            className={filter===""?"btn btn-outline-primary btn-sm ml-2 btnActive":"btn btn-outline-primary btn-sm ml-2"}
                onClick={() => btnAll()}
              >
                All
              </button>
              <button
                type="button"
               // active={filter===false?true:false}
               // className="btn btn-outline-primary btn-sm ml-2"
               className={filter===false?"btn btn-outline-primary btn-sm ml-2 btnActive":"btn btn-outline-primary btn-sm ml-2"}
                onClick={() => btnActive()}
              >
                Active
              </button>
              <button
                type="button"
              //  active={filter===true?true:false}
               // className="btn btn-outline-primary btn-sm ml-2"
               className={filter===true?"btn btn-outline-primary btn-sm ml-2 btnActive":"btn btn-outline-primary btn-sm ml-2"}
                onClick={() => btnComplete()}
              >
                Completed
              </button>
            </span>
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
