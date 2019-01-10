import React, { Component } from 'react';
import TodoListView from '../components/TodoListView';

import api from '../api.js';
import { withProject } from '../contexts/ProjectContext';
import { withRouter } from 'react-router';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true,
    };
  }
  componentDidMount = () => {
    this.refreshTodoList();
  };
  refreshTodoList = async () => {
    const { projectId } = this.props.match.params;
    const { data } = await api.get('/projects/' + projectId + '/todos');
    this.setState({
      todos: data,
      loading: false,
    });
  };
  completeTodo = async todoId => {
    await api.patch('/todos/' + todoId, {
      complete: true,
    });
    this.refreshTodoList();
  };
  render() {
    const { todos } = this.state;
    const { projects } = this.props;
    return (
      <TodoListView
        todos={todos}
        projects={projects}
        completeTodo={this.completeTodo}
      />
    );
  }
}

export default withRouter(withProject(TodoList));
