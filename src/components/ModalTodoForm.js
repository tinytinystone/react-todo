import React, { Component } from 'react';
import TodoForm from '../containers/TodoForm';

import './ModalTodoForm.scss';

export default class ModalTodoForm extends Component {
  render() {
    return (
      <div className="wrapModal">
        <h2>빠른 추가</h2>
        <TodoForm />
        <button onClick={this.props.handleQuickTaskClick}>X</button>
      </div>
    );
  }
}
