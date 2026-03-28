import React, { useState, useEffect } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const [newTitle, setNewTitle] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []); 

  const fetchTodos = async () => {
    setLoading(true); 
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();
      setTodos(data); 
    } catch (error) {
      alert("Error fetching todos");
    }
    setLoading(false); 
  };

  const addTodo = async () => {
    if (!newTitle.trim()) {
      alert("Please enter a todo title");
      return;
    }

    const newTodo = { title: newTitle.trim(), completed: false };

    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify(newTodo), // object ko JSON me convert
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      setTodos((prevTodos) => [...prevTodos, data]);

      setNewTitle("");
    } catch (error) {
      alert("Error in Adding todo");
    }
    setLoading(false);
  };


  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedTodo),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? data : t))
      );
    } catch (error) {
      alert("Error updating todo");
    }
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    setLoading(true);
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });

      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    } catch (error) {
      alert("Error deleting todo");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Todo List (CRUD with Tailwind)
      </h2>

      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} 
          disabled={loading} 
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo} 
          disabled={loading}
          className="bg-blue-600 text-white px-5 rounded-r-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Add Todo"
        >
          Add
        </button>
      </div>

      {loading && (
        <p className="text-center text-gray-500 mb-4" aria-live="polite">
          Loading...
        </p>
      )}

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-3 rounded-md cursor-pointer
              ${
                todo.completed
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)} 
              className="flex-grow select-none"
              role="button"
              tabIndex={0} 
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleTodo(todo.id);
              }}
              aria-pressed={todo.completed} // Accessibility ke liye
            >
              {todo.title} {todo.completed ? "(Completed)" : ""}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              disabled={loading}
              className="ml-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={`Delete todo: ${todo.title}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
