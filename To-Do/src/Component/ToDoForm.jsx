import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function ToDoForm() {

  const [todo , setTodo] = useState("");
  const {addTodo} = useTodo();
 

  const add =(e) =>{
   e.preventDefault();
   if(!todo) return

   addTodo({content: todo , completed :false})
   setTodo("")
   
  }

  return (
    <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-gray-100/30 rounded-l-lg px-3 outline-none duration-150 bg-white/30 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
         <button
  type="submit"
  className="rounded-r-lg px-4 py-2 
    bg-white border border-yellow-500 
    bg-clip-text text-transparent font-bold
    bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]
    hover:scale-105 transition-all duration-300"
>
  Add
</button>
      </form>
  );
}

export default ToDoForm