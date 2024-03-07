import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/Model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<String>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-800 ">
      <div className="card w-96 shadow-lg p-4 items-center justify-center  rounded-md backdrop backdrop-filter bg-slate-700 ">
        <div className="heading text-center text-blue-500 font-semibold text-2xl">
          Taskify
        </div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
      <div className="w-96 mt-2 overflow-y-auto">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
