import React, { useState, useReducer } from "react";
import { TodoReducer } from "./reducers/reducer";

type TodoProps = {};

const Todo: React.FC<TodoProps> = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [todo, settodo] = useState<string>("");

  const changeHandler = (_todo: string) => {
    settodo(_todo);
  };
  return (
    <div>
      {todos.map((_todo, key) => (
        <h1 key={key}>_todo</h1>
      ))}

      <input
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          if (todo.length < 1) {
            return alert("Please enter a todo");
          }
          dispatch({ type: "add", text: todo });
          settodo("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
export default Todo;
