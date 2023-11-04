import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  const handleAdd = () => {
    setTodos([...todos, item]);
    setItem("");
  };

  const handleDelete = (index) => {
      todos.splice(index, 1);
      setTodos([...todos]);
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <table>
        <tbody>
          {todos.length !== 0 ? (
            todos.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Add Item"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Todo;
