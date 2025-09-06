import { useState ,useEffect } from 'react'
import { TodoProvider } from './Context/TodoContext'
import TodoItem from './Component/ToDoItem'
import ToDoForm from './Component/ToDoForm'
import './App.css'
import { getTodos, addTodo, deleteTodo } from './api'


function App() {
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState('');

  // const [todos, setTodos] = useState([])

  // const addTodo =(todo)=>{

  //   setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  // }
  // const updateTodo=(id, updatedfields)=>{
  //   setTodos((prev)=> prev.map((prevTodo) =>prevTodo.id === id ? {...prevTodo, ...updatedfields} : prevTodo))
  // }

  // const deleteTodo =(id) =>{

  //   setTodos((prev) => prev.filter((todo) => todo.id !== id))
  // }
  //   const toggleComplete = (id) => {
  //   //console.log(id);
  //   setTodos((prev) => 
  //   prev.map((prevTodo) => 
  //     prevTodo.id === id ? { ...prevTodo, 
  //       completed: !prevTodo.completed } : prevTodo))
  // }

  // useEffect(() => {
  //   const todo = JSON.parse(localStorage.getItem("todos"))

  //   if (todo && todo.length > 0) {
  //     setTodos(todo)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }, [todos])
  
  // fetch todos from backend

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTodos();
    setTaskList(response.data);
  };

  const handleAdd = async () => {
    if (!text.trim()) return;
    await addTodo({ title: text, completed: false });
    setText('');
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    const task = taskList.find(t => t.id === id);
    await updateTodo(id, { completed: !task.completed });
    fetchTasks();
  };

  const handleUpdate = async (id, updatedFields) => {
    await updateTodo(id, updatedFields);
    fetchTasks();
  };


  return (
    //  <TodoProvider value={{todos ,addTodo , setTodos ,deleteTodo ,toggleComplete, updateTodo}}>// for loacal Storage 
    // for backend
     <TodoProvider value={{ taskList, setTaskList, text, setText, handleAdd,handleDelete, handleToggle, handleUpdate  }}> 
      <div className='min-h-screen py-8 bg-slate-950 flex flex-col gap-y-6 items-center'>
        <div className='w-full max-w-2xl  max-auto  rounded-lg px-4 py-3 bg-slate-800 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8  mt-2 
          bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent'> Manage Your Todos</h1>
          {/* todo Form */}
          <div className=' mb-4'>

            <ToDoForm/>
          </div>
           {/* <div className=' flex flex-wrap gap-y-3'>
             {todos.map((todo)=>(
               <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
               </div>

             ))} 

           </div> */}

              <div className='flex flex-wrap gap-y-3'>
            {taskList.map((task) => (
              <div key={task.id} className='w-full'>
                <TodoItem
                  todo={task}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                  handleUpdate={handleUpdate}
                />
              </div>
            ))}
          </div>


        </div>
      </div>


      </TodoProvider>
      
    
  )
}

export default App
