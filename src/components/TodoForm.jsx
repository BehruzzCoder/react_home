import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { todos, setTodos } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 flex-1"
        placeholder="Yangi vazifa..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Qo'shish
      </button>
    </form>
  );
}

export default TodoForm;