import { Todo } from "./Todo";

export type TodoTypeContext = {
  todos: Todo[];
  handleOnDelete: (id: number) => void;
  handleOnComplete: (id: number) => void;
  handleAddTodo: (title: string) => void;
};
