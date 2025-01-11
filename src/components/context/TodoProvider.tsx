import { useState } from "react";
import { Todo } from "../../types/Todo";
import { TodoTypeProvider } from "../../types/TodoTypeProvider";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }: TodoTypeProvider) {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
}
