import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItem = [...this.state.items, newItem];

    this.setState({
      items: updatedItem,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItem
    });
  };
  handleEdit = id => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
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
