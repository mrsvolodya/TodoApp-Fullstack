import { Todo } from "./Todo";

export type TodoTypeContext = {
  todos: Todo[];
  handleOnDelete: (id: number) => void;
  handleAddTodo: (title: string) => void;
};
