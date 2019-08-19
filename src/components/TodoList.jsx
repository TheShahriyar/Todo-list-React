import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <>
        <h2>Hello from Todo List</h2>
        <TodoItem />
      </>
    );
  }
}
