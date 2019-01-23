import React, { Component } from 'react';

import { withProject } from '../contexts/ProjectContext';
import TodoFormView from '../components/TodoFormView';
import { withTodo } from '../contexts/TodoContext';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentTodo: [],
    };
  }
  render() {
    const { currentProjectId, addTodo, projects } = this.props;
    return (
      <TodoFormView
        currentProjectId={currentProjectId}
        addTodo={addTodo}
        projects={projects}
      />
    );
  }
}

export default withTodo(withProject(TodoForm));
