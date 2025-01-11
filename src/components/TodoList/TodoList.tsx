import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList() {
  return (
    <div className="w-full">
      {[{ id: 1, title: "Todo1", completed: false }].map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
