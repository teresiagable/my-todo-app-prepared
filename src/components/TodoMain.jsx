import React, { Component, Fragment } from 'react';

import todoService from '../api/todoService';
import Todos from './Todos';

class TodoMain extends Component {
  state = {
    todos: [],
    loading: true,
  };

  async componentDidMount() {
    let todolist = await todoService.getAll();
    console.log('todolist', todolist);

    this.setState({
      todos: todolist,
      loading: false,
    });
  }

  toggleDone = (e, todo) => {
    //console.log("togglevalue", todo);
    //console.log("e", e.target.checked);

    let newtodo = { ...todo, done: e.target.checked };
    //console.log("updated todo item", newtodo);
    //här ska vi göra något med svaret sen.
    let response = todoService.updateDone(newtodo);

    const itemIndex = this.state.todos.findIndex(
      (todoItem) => todoItem.id == todo.id
    );

    let newTodoList = [...this.state.todos];
    newTodoList[itemIndex] = newtodo;

    this.setState({
      todos: newTodoList,
    });
  };

  render() {
    return this.state.loading ? (
      <div>Loading</div>
    ) : (
      <Fragment>
        <Todos todolist={this.state.todos} updateDone={this.toggleDone} />
      </Fragment>
    );
  }
}

export default TodoMain;
