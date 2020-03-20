import * as React from "react";
import { GlobalState, TodoState } from "../reducers";
import { FILTERS, ToggleTodoAction, toggleTodo } from "../actions";
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";

const mapStateToProps = (state: GlobalState): { todos: Array<TodoState> } => {
  switch (state.visibilityFilter) {
    case FILTERS.SHOW_COMPLETED:
      return { todos: state.todos.filter(todo => todo.completed) };
    case FILTERS.SHOW_ACTIVE:
      return { todos: state.todos.filter(todo => !todo.completed) };
    case FILTERS.SHOW_ALL:
    default:
      return { todos: state.todos };
  }
};

const mapDispatchToProps = (
  dispatch: React.Dispatch<ToggleTodoAction>
): { onTodoClick: (index: number) => void } => {
  return {
    onTodoClick: (index: number): void => dispatch(toggleTodo(index))
  };
};

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
