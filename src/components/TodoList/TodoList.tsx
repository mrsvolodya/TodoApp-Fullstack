import { useContext } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoContext } from "../context/TodoContext";

export function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <div className="w-full">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
