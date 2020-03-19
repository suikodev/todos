import * as React from "react";
import { TodoState } from "../reducers";

type TodoProps = TodoState;

export const Todo: React.FC<{
  onclick: (event: React.MouseEvent) => void;
  todo: TodoProps;
}> = props => <li onClick={props.onclick}>{props.todo.text}</li>;
