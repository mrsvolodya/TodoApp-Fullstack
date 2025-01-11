import { useState } from "react";
import { Todo } from "../../types/Todo";
import { TodoTypeProvider } from "../../types/TodoTypeProvider";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }: TodoTypeProvider) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(title: string) {
    if (!title) return;

    const newTodo = {
      id: +new Date(),
      title,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleOnDelete(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleOnComplete(id: number) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  }
  return (
    <TodoContext.Provider
      value={{ todos, handleAddTodo, handleOnDelete, handleOnComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
}
