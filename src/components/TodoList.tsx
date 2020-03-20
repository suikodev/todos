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
      {props.todos.map(todo => (
        <Todo
          todo={todo}
          onclick={(): void => props.onTodoClick(todo.id)}
          key={todo.id}
        ></Todo>
      ))}
    </ul>
  );
};
