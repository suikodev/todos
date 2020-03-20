import {
  FILTERS,
  SetVisibilityFilterAction,
  setVisibilityFilter
} from "../actions";
import { GlobalState } from "../reducers";
import { connect } from "react-redux";
import { Link } from "../components/Link";

const mapStateToProps = (
  state: GlobalState,
  ownProps: { filter: FILTERS }
): { active: boolean } => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (
  dispatch: React.Dispatch<SetVisibilityFilterAction>
): { onclick: (index: number) => void } => {
  return {
    onclick: (index): void => dispatch(setVisibilityFilter(index))
  };
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
