import React, { useContext } from "react";
import { TodoContextt } from "../Context/TodoContext";

function ToDoForm() {
  const { text, setText, content, setContent, handleAdd } = useContext(TodoContextt);

  const add = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form onSubmit={add} className="flex flex-col gap-2">
      
      {/* Title Field */}
      <input
        type="text"
        placeholder="Write Title..."
        className="w-full border px-3 py-2 text-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      {/* Content Field */}
      <input
        type="text"
        placeholder="Write Content..."
        className="w-full border px-3 py-2 text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      {/* Add Button */}
      <button
        type="submit"
        className="bg-yellow-500 px-4 py-2 rounded-r"
      >
        Add
      </button>
    </form>
  );
}

export default ToDoForm;
