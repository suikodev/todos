import * as React from "react";
import AddTodo from "./containers/AddTodo";
import { VisibleTodoList } from "./containers/VisibleTodoList";
import { Footer } from "./components/Footer";

export const App: React.FC = () => (
  <div>
    <AddTodo />
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
);
