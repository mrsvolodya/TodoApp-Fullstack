import { useState } from "react";
import { Todo } from "../../types/Todo";
import { TodoTypeProvider } from "../../types/TodoTypeProvider";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }: TodoTypeProvider) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Todo1", completed: false },
  ]);

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

  return (
    <TodoContext.Provider value={{ todos, handleAddTodo, handleOnDelete }}>
      {children}
    </TodoContext.Provider>
  );
}
