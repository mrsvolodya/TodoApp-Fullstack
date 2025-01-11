import axios from "axios";
import { Todo } from "../types/Todo";

const BASE_URL = "http://localhost:5137/api/todo";

export async function fetchTodos() {
  const { data } = await axios.get<Todo[]>(BASE_URL);
  return data;
}

export async function postTodo(newTodo: Omit<Todo, "id">) {
  return axios.post<Todo>(BASE_URL, newTodo);
}

export async function updateTodo(updatedTodo: Todo) {
  return axios.put(`${BASE_URL}/${updatedTodo.id}`, updatedTodo);
}

export async function deleteTodo(id: number) {
  await axios.delete(`${BASE_URL}/${id}`);
}
