import React from "react";
interface Props {
  todo: String;
  setTodo: React.Dispatch<React.SetStateAction<String>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      className="flex justify-center items-center relative w-full "
      onSubmit={handleAdd}
    >
      <input
        className="input input-bordered w-full my-2 bg-slate-300 focus:shadow-xl text-black rounded-xl "
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 btn btn-circle hover:bg-sky-400 hover:text-black btn-sm bg-slate-800"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
