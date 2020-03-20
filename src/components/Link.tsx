import * as React from "react";

export const Link: React.FC<{
  active: boolean;
  onclick: () => void;
}> = props => {
  if (props.active) {
    return <span>{props.children}</span>;
  } else {
    return (
      <a
        href=""
        onClick={(event): void => {
          event.preventDefault();
          props.onclick();
        }}
      >
        {props.children}
      </a>
    );
  }
};
