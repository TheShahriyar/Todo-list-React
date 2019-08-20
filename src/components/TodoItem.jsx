import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;

    return (
      <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
        <h6>{title}</h6>
        <div className="todo-icon">
          <a
            href="javascript:"
            className="text-success mx-2"
            onClick={handleEdit}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="javascript:"
            className="text-danger mx-2"
            onClick={handleDelete}
          >
            <i className="fa fa-trash" />
          </a>
        </div>
      </li>
    );
  }
}
