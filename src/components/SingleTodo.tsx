import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from "./Model";
import TodoList from "./TodoList";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <form
      className="flex items-center w-screen p-2 bg-gray-900 rounded-md h-14 hover:bg-slate-950 justify-between"
      //   onClick={handleClick}
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          className="input h-10"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <div className="line-through "> {todo.todo}</div>
      ) : (
        <div className="flex-1">
          <span className="">{todo.todo}</span>
        </div>
      )}

      <div className="flex gap-2">
        <FaPen
          className="hover:cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        />
        <MdDelete
          className="hover:cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        />
        <IoMdDoneAll
          className="hover:cursor-pointer"
          onClick={() => handleDone(todo.id)}
        />
      </div>
    </form>
  );
};

export default SingleTodo;
