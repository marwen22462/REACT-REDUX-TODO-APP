import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, deleteTodo, completeTodo } from "../js/actions/index";

class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ""
    };
  }
  updateInput = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = e => {
    this.props.addItem({
      title: this.state.newItem,
      id: Date.now(),
      isComplete: false
    });
    this.setState({newItem: ""})
  };

  render() {
    return (
      <div>
        <div className="upper">
          <h1 className="title">To-Do App!</h1>
          <h4 className="subTitle">add New To-Do</h4>
          <input
            type="text"
            className="inputField"
            placeholder="Enter new task"
            value={this.state.newItem}
            onChange={this.updateInput}
          />
          <br />
          <button className="addButton" onClick={() => this.addItem()}>
            Add
          </button>
        </div>
        <div className="downPart">
          <ul>
            {this.props.todos.map(todo => (
              <li key={todo.id} className={todo.isComplete ? "complete" : ""}>
                {todo.title}
                <button className="undoBtn" onClick={() => this.props.completeTodo(todo.id)}>
                  {!todo.isComplete ? "complete" : "undo"}
                </button>
                <button
                  className="deletBtn"
                  onClick={() => this.props.deleteTodo(todo.id)}
                >
                  {" "}
                  Delete
                </button>

                <p className="inputText">{todo.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: todos => dispatch(addItem(todos)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    completeTodo: id => dispatch(completeTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(todo);
