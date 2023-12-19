import React from "react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(true);
  const [todoId, setTodoId] = useState("");

  const handleChange = (input) => {
    setInputValue(input.target.value);
  };
  const handleAdd = () => {
    if (inputValue != "") {
      setTodo((el) => [...el, inputValue]);
      setInputValue("");
    }
  };

  const handleEdit = (data, id) => {
    setTodoId(id);
    setInputValue(data);
    setShow(false);
  };

  const handleUpdate = () => {
    const updatedTodo = [...todo];
    updatedTodo[todoId] = inputValue;
    setTodo(updatedTodo);
    setTodoId("");
    setShow(true);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const updatedTodo = todo.filter((_, index) => index !== id);
    setTodo(updatedTodo);
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="todo"
              onChange={handleChange}
              value={inputValue}
            />
            {show ? (
              <button
                className="btn btn-outline-secondary"
                onClick={handleAdd}
                type="button"
              >
                Add
              </button>
            ) : (
              <button
                className="btn btn-outline-secondary"
                onClick={handleUpdate}
                type="button"
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ul className="list-group">
            {todo.length != 0 &&
              todo.map((el, index) => (
                <li className="list-group-item" key={index}>
                  {el}
                  <button
                    type="button"
                    onClick={() => handleEdit(el, index)}
                    className="btn btn-primary btn-sm ms-3"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger btn-sm ms-1"
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
