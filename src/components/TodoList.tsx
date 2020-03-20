import * as React from "react";
import { TodoState } from "../reducers";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: Array<TodoState>;
  onTodoClick: (index: number) => void;
}

export const TodoList: React.SFC<TodoListProps> = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <Todo
          todo={todo}
          onclick={(): void => props.onTodoClick(index)}
          key={index}
        ></Todo>
      ))}
    </ul>
  );
};
