import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9191/todos" });
export default API;

// GET all todos
export const getTodos = () => API.get("");

// POST new todo
export const addTodo = (todo) => API.post("", todo);

// PUT update by id
export const updateTodo = (id, todo) => API.put(`/${id}`, todo);

// DELETE by id
export const deleteTodo = (id) => API.delete(`/${id}`);
