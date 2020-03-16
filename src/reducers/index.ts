import * as Actions from "../actions";

import { combineReducers } from "redux";

export interface TodoState {
  text: string;
  completed: boolean;
}

export interface GlobalState {
  visibilityFilter: Actions.FILTERS;
  todos: Array<TodoState>;
}

const todos = (
  state: Array<TodoState> = [],
  action: Actions.TodoActionTypes
): Array<TodoState> => {
  switch (action.type) {
    case Actions.TYPES.AddTodo:
      return [...state, { text: action.text, completed: false }];
    case Actions.TYPES.ToggleTodo:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state: Actions.FILTERS = Actions.FILTERS.SHOW_ALL,
  action: Actions.SetVisibilityFilterAction
): Actions.FILTERS => {
  if ((action.type = Actions.TYPES.SetVisibilityFilter)) {
    return state;
  } else {
    return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
