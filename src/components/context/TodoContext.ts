import { createContext } from "react";
import { TodoTypeContext } from "../../types/TodoTypeContext";

export const TodoContext = createContext<TodoTypeContext>({
  todos: [],
});
