import React, { Component } from 'react';

import api from '../api';

import { withProject } from '../contexts/ProjectContext';
import TodoFormView from '../components/TodoFormView';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  submitTodo = async (projectId, title) => {
    await api.post(`/projects/${projectId}/todos`, {
      title,
    });
    this.setState({
      loading: false,
    });
  };
  render() {
    const { projects } = this.props;
    return <TodoFormView projects={projects} submitTodo={this.submitTodo} />;
  }
}

export default withProject(TodoForm);
