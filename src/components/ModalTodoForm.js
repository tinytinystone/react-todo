import React, { Component } from 'react';
import TodoForm from './TodoForm';

export default class ModalTodoForm extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoForm />
      </React.Fragment>
    );
  }
}
