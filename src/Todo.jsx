import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    this.props.onRemove(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <span>{this.props.todo.value}</span>
        <button onClick={this.onRemove}>x</button>
      </div>
    );
  }
}

export default Todo;
