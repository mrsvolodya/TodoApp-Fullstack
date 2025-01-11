import { Todo } from "./Todo";

export type TodoTypeContext = {
  todos: Todo[];
  handleAddTodo: (title: string) => void;
};
