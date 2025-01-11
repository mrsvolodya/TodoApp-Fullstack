import { FormAddTodo } from "./components/FormAddTodo/FormAddTodo";

export function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-48">
        <h1 className="text-blue-800 text-7xl italic mb-5">TODO</h1>
        <FormAddTodo />
      </div>
    </div>
  );
}
