import React, { Component } from 'react';
import TodoForm from './TodoForm';

import s from './ModalTodoForm.module.scss';

export default class ModalTodoForm extends Component {
  render() {
    return (
      <div className={s.wrap}>
        <TodoForm />
        <button onClick={this.props.addTodo}>X</button>
      </div>
    );
  }
}
