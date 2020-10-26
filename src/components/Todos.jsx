import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Todos = (props) => {
  console.log("todos", props.todoList);

  return (
    <>
      <table id="tableTodo" className="table table-hover">
        <thead>
          <tr className="table-danger">
            <th>Date</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned to</th>
            <th>Done</th>
          </tr>
        </thead>
        {props.todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </table>
    </>
  );
};

export const TodoItem = (props) => {
  console.log("props", props);
  let todo = props.todo;
  return (
    <tbody>
      <tr className="table-secondary">
        <td>{todo.deadline}</td>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{`${todo.assignee.firstName} ${todo.assignee.lastName}`}</td>
        <td>
          <input type="checkbox" value={todo.done.toString()} disabled />
        </td>
        <td>
          <Router>
            <Link to={`/todo/${todo.id}`} className="btn btn-dark btn-sm">
              Edit
            </Link>
          </Router>
        </td>
      </tr>
    </tbody>
  );
};

export default Todos;
