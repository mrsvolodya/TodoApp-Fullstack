import { useEffect, useState } from "react";
import { Todo } from "../../types/Todo";
import { TodoTypeProvider } from "../../types/TodoTypeProvider";
import { TodoContext } from "./TodoContext";
import {
  deleteTodo,
  fetchTodos,
  postTodo,
  updateTodo,
} from "../../api/fetchData";

export function TodoProvider({ children }: TodoTypeProvider) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getTodos();
  }, []);

  function handleAddTodo(title: string) {
    if (!title) return;

    const newTodo = {
      title,
      completed: false,
    };

    postTodo(newTodo)
      .then((response) => {
        const addedTodo = response.data;
        setTodos((prevTodos) => [...prevTodos, addedTodo]);
      })
      .catch((error) => console.error("Error adding todo:", error));
  }

  function handleOnDelete(id: number) {
    deleteTodo(id)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error("Error deleting todo:", error));
  }

  function handleOnComplete(id: number) {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (!todoToUpdate) return;

    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

    updateTodo(updatedTodo)
      .then((response) => {
        const updatedTodoFromServer = response.data;
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === updatedTodoFromServer.id ? updatedTodoFromServer : todo
          )
        );
      })
      .catch((error) => console.error("Error updating todo:", error));
  }

  return (
    <TodoContext.Provider
      value={{ todos, handleAddTodo, handleOnDelete, handleOnComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
}
