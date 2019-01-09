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
    if (this.props.projectId) {
      const { data } = await api.get(
        '/projects/' + this.props.projectId + '/todos'
      );
      this.setState({
        todos: data.slice(),
      });
    } else {
      const { data } = await api.get('/todos');
      this.setState({
        todos: data.slice(),
      });
    }
  }
  render() {
    const { todos } = this.state;
    return <TodoListView todos={todos} />;
  }
}
