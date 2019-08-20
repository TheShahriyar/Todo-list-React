import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, handleEdit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              id="todoInput"
              placeholder="Add to do item"
              value={item}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-block btn-primary mt-3">
              Add item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
