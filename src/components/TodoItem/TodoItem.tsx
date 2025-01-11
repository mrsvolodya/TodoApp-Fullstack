import { Todo } from "../../types/Todo";
import crossImage from "../../assets/cross.svg";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

type TodoItemProps = {
  todo: Todo;
};
export function TodoItem({ todo }: TodoItemProps) {
  const { handleOnDelete, handleOnComplete } = useContext(TodoContext);
  return (
    <div className="flex justify-between items-center w-full h-10 bg-slate-200 border-b-black px-3 rounded my-1">
      <div className="flex items-center">
        <label className="flex">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleOnComplete(todo.id)}
            className="appearance-none w-5 h-5 rounded-full border border-gray-400 checked:bg-blue-500 mr-2 cursor-pointer"
          />
        </label>
        <span>{todo.title}</span>
      </div>
      <button type="button" onClick={() => handleOnDelete(todo.id)}>
        <img src={crossImage} alt="Close image" className="w-3" />
      </button>
    </div>
  );
}
