import React, { Component } from 'react';
import TodoListView from '../components/TodoListView';
import api from '../api.js';

export default class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  async componentDidMount() {
    const { data: todos } = await api.get('todos');
    this.setState({
      todos: todos.slice(),
    });
  }
  render() {
    const { todos } = this.state;
    return <TodoListView todos={todos} />;
  }
}
