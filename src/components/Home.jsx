import React, { Component, Fragment } from "react";
import todoService from "./../api/todoService";
import Todos from "./Todos";

class Home extends Component {
  state = {
    todos: [],
    isLoading: true,
  };

  async componentDidMount() {
    let todolist = await todoService.getAll();
    console.log("todolist", todolist);
    this.setState({
      todos: todolist,
      isLoading: false,
    });
  }

  render() {
    return (this.state.isLoading) ? (
      <div>Loading</div>
    ) : (
      <Todos todoList={this.state.todos} />
    );
  }
}

export default Home;
