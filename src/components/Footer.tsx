import * as React from "react";
import { FILTERS } from "../actions";
import { FilterLink } from "../containers/FilterLink";

export const Footer: React.FC = () => {
  return (
    <footer>
      <FilterLink filter={FILTERS.SHOW_ALL}>ALL</FilterLink>{" "}
      <FilterLink filter={FILTERS.SHOW_ACTIVE}>ACTIVE</FilterLink>{" "}
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>COMPLETED</FilterLink>
    </footer>
  );
};
