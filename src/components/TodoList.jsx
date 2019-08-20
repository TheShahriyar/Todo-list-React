import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, clearList } = this.props;

    return (
      <React.Fragment>
        <ul className="list-group my-5">
          <h3 className="text-center">Todo List</h3>
          <p hidden={items.length > 0}>Empty List</p>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
        </ul>
        <button
          type="button"
          disabled={items ? true : false}
          className="btn btn-danger btn-block mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </React.Fragment>
    );
  }
}
