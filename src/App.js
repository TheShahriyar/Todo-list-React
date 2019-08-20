import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake Up" },
      { id: 2, title: "Make Breakfast" },
      { id: 3, title: "Make Dinner" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("Handle Change");
  };
  handleSubmit = e => {
    console.log("Handle Submit");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleDelete = id => {
    console.log(`Handle delete ${id}`);
  };
  handleEdit = id => {
    console.log(`Handle Edit ${id}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-10 mx-auto mt-5">
              <h3 className="text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
