import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';

export default class TodoListPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <TodoList />
        <TodoForm />
      </Layout>
    );
  }
}
