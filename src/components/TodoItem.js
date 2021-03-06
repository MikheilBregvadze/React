import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

  getStyle = () => {
      return {
        backgroundColor: '#f4f4f4',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      }
  }

  render() {
      const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p className="clearfix marginTop">
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
            { title }
            <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    marginRight: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
