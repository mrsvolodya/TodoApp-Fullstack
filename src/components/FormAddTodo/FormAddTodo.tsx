import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export function FormAddTodo() {
  const [title, setTitle] = useState("");
  const { handleAddTodo } = useContext(TodoContext);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddTodo(title);
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="rounded w-80 h-10 px-2 cursor-pointer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}
