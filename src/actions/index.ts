/* eslint-disable no-unused-vars */
export const enum FILTERS {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}

export const enum TYPES {
  AddTodo,
  ToggleTodo,
  SetVisibilityFilter
}

export interface AddTodoAction {
  type: TYPES.AddTodo;
  text: string;
  id: number;
}

export interface ToggleTodoAction {
  type: TYPES.ToggleTodo;
  index: number;
}

export interface SetVisibilityFilterAction {
  type: TYPES.SetVisibilityFilter;
  filter: FILTERS;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | SetVisibilityFilterAction;

let nextTodoId = 0;
export function addTodo(text: string): AddTodoAction {
  return {
    type: TYPES.AddTodo,
    id: nextTodoId++,
    text
  };
}

export function toggleTodo(index: number): ToggleTodoAction {
  return {
    type: TYPES.ToggleTodo,
    index
  };
}

export function setVisibilityFilter(
  filter: FILTERS
): SetVisibilityFilterAction {
  return {
    type: TYPES.SetVisibilityFilter,
    filter
  };
}
