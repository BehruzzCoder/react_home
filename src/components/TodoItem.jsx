import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem() {
  const { todos, setTodos } = useContext(TodoContext);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center p-2 border rounded ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          <span>{todo.text}</span>
          <div className="flex gap-2">
            <button
              onClick={() => toggleComplete(todo.id)}
              className="bg-green-500 text-white px-2 rounded"
            >
              ✓
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;