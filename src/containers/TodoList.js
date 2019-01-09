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
  async componentDidMount() {
    if (this.props.projectId) {
      const { data } = await api.get(
        '/projects/' + this.props.projectId + '/todos'
      );
      this.setState({
        todos: data.slice(),
        loading: false,
      });
    } else {
      const { data } = await api.get('/todos');
      this.setState({ todos: data.slice(), loading: false });
    }
  }
  render() {
    const { todos, loading } = this.state;
    const { projects, match } = this.props;
    const project = projects.find(
      p => parseInt(p.id) === parseInt(match.params.projectId)
    );
    return (
      <TodoListView
        todos={todos}
        loading={loading}
        projects={projects}
        project={project}
      />
    );
  }
}

export default withRouter(withProject(TodoList));
