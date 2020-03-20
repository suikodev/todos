import * as React from "react";
import { TodoState } from "../reducers";
import styled from "styled-components";

type TodoProps = TodoState;

const Li = styled.li<{ completed: boolean }>`
  text-decoration: ${(props): string =>
    props.completed ? "line-through" : "none"};
`;

export const Todo: React.FC<{
  onclick: (event: React.MouseEvent) => void;
  todo: TodoProps;
}> = props => (
  <Li onClick={props.onclick} completed={props.todo.completed}>
    {props.todo.text}
  </Li>
);
