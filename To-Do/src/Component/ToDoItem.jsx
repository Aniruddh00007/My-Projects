import React, { useState, useRef, useEffect } from "react";
import { useTodo } from '../Context/TodoContext';

function ToDoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);// Edit mode state
  const [title, setTitle] = useState(todo.title || "Untitled"); //  Title
  const [msg, setMsg] = useState(todo.content);// Content
  const [isExpanded, setIsExpanded] = useState(false); //  Collapse/Expand state
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();
  const textareaRef = useRef(null); // reference to textarea for auto-resize

  const edit = () => {
    updateTodo(todo.id, { ...todo, title, content: msg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  // Auto-resize textarea when content changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [msg]);

  return (
    <div
      className={`flex flex-col border border-black/10 rounded-lg px-3 py-2 
        gap-y-2 shadow-sm shadow-white/50 duration-300 text-black 
        ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#233f4c]"}`}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-x-2 cursor-pointer w-full"
          onClick={() => setIsExpanded((prev) => !prev)} // Toggle expand
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <h3
            className={`font-semibold text-lg text-yellow-600 ${
              todo.completed ? "line-through text-gray-300" : ""
            }`}
          >
             📄{title}
          </h3>
        </div>

        {/* Edit button */}
        <button
          className="inline-flex w-auto h-8 mr-2 rounded-lg font-semibold text-sm 
          items-center hover:scale-75 translate-x+1 shrink-0"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              edit();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>

        {/* Delete button */}
        <button
          className="inline-flex w-auto h-8 rounded-lg text-sm  
          justify-center items-center hover:scale-75 translate-x-1 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="flex flex-col gap-y-2">
          {isTodoEditable ? (
            <>
              <input
                type="text"
                className="w-full border border-black/20 rounded-lg px-2 py-1 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                ref={textareaRef}
                className={`w-full border border-black/10 rounded-lg px-3 outline-none 
                  duration-150 bg-white/20 py-1.5 text-black resize-none ${
                    todo.completed ? "line-through" : ""
                  }`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!isTodoEditable}
                rows={1}
              />
            </>
          ) : (
            <p className="text-sm text-gray-300 font-semibold whitespace-pre-wrap">{msg}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
