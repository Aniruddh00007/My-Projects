import { createContext, useState, useEffect } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api";

export const TodoContextt = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [content, setContent] = useState(""); // Added content state

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // Add new todo
  const handleAdd = async () => {
    if (!text.trim() || !content.trim()) return; // check both fields
    try {
      const newTodo = { title: text, content, completed: false };
      const res = await addTodo(newTodo);
      setTodos([res.data, ...todos]);
      setText("");
      setContent("");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Update todo
  const handleUpdate = async (id, updatedTodo) => {
    try {
      const res = await updateTodo(id, updatedTodo);
      setTodos(todos.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContextt.Provider
      value={{ todos, text, setText, content, setContent, handleAdd, handleUpdate, handleDelete }}
    >
      {children}
    </TodoContextt.Provider>
  );
};
