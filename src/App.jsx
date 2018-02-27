import React from 'react';

import Todo from './Todo';

const randomString = () => Math.random().toString(36).substring(7);

// STATE_UPDATED string does not needs to be 'STATE_UPDATED'.
const STATE_UPDATED = `su-${randomString()}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.stateChanged = this.stateChanged.bind(this);
    this.newTodo = this.newTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  stateChanged(state) {
    this.setState(state);
  }

  componentDidMount() {
    this.props.state.on(STATE_UPDATED, this.stateChanged);
  }

  componentWillUnmount() {
    this.props.state.off(STATE_UPDATED, this.stateChanged);
  }

  removeTodo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.props.state.emit(
      STATE_UPDATED,
      { todos }
    );
  }

  newTodo() {
    const todos = this.state.todos;
    const newTodo = {
      id: randomString(),
      value: `new todo ${todos.length}`,
    };

    this.props.state.emit(
      STATE_UPDATED,
      { todos: [...todos, newTodo] }
    );
  }

  render() {
    return(
      <div>
        <h2>TODO</h2>
        {this.state.todos.map(todo => (
          <Todo key={`todo-${todo.id}`} todo={todo} onRemove={this.removeTodo} />
        ))}
        <button onClick={this.newTodo}>new</button>
      </div>
    );
  }
}

export default App;
