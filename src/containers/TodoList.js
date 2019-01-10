import React, { Component } from 'react';
import TodoListView from '../components/TodoListView';

import api from '../api.js';
import { withProject } from '../contexts/ProjectContext';
import { withRouter } from 'react-router';
import CompletedTodoListView from '../components/CompletedTodoListView';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incompleteTodos: [],
      completedTodos: [],
      loading: true,
    };
  }
  componentDidMount = () => {
    this.refreshTodoList();
  };
  refreshTodoList = async () => {
    const { projectId } = this.props.match.params;
    const { data } = await api.get('/projects/' + projectId + '/todos');
    const incompleteTodos = data.filter(t => t.complete === false);
    const completedTodos = data.filter(t => t.complete === true);
    this.setState({
      incompleteTodos,
      completedTodos,
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
    const { incompleteTodos, completedTodos } = this.state;
    const { projects } = this.props;
    return (
      <React.Fragment>
        <TodoListView
          incompleteTodos={incompleteTodos}
          projects={projects}
          completeTodo={this.completeTodo}
        />
        <CompletedTodoListView completedTodos={completedTodos} />
      </React.Fragment>
    );
  }
}

export default withRouter(withProject(TodoList));
