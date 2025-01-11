import { useState } from "react";

export function FormAddTodo() {
  const [title, setTitle] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
