import { FormAddTodo } from "./components/FormAddTodo/FormAddTodo";
import { TodoList } from "./components/TodoList/TodoList";

export function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-48">
        <h1
          data-cy="cypress-title"
          className="text-blue-800 text-7xl italic mb-5"
        >
          TODO
        </h1>
        <FormAddTodo />
        <TodoList />
      </div>
    </div>
  );
}
