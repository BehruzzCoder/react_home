import React from "react";
import TodoProvider from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
          <TodoForm />
          <TodoItem />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;