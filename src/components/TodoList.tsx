import React from "react";
import { Todo } from "./Model";
import SingleTodo from "./SingleTodo";
import "../index.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-wrap  p-1 h-48  w-full gap-3">
      {todos.map((todo, index) => {
        return (
          <SingleTodo
            key={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
