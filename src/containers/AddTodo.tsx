import * as React from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../actions";

let AddTodo: React.FC<{}> = () => {
  const input = React.createRef<HTMLInputElement>();
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          if (!input.current?.value.trim()) {
            return;
          }
          dispatch(addTodo(input.current.value));
          input.current.value = "";
        }}
      >
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
