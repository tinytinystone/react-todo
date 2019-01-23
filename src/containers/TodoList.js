import React, { Component } from 'react';
import TodoListView from '../components/TodoListView';

import { withProject } from '../contexts/ProjectContext';
import CompletedTodoListView from '../components/CompletedTodoListView';
import { withTodo } from '../contexts/TodoContext';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount = async () => {
    await this.props.refreshTodoList();
    this.setState({
      loading: false,
    });
  };
  render() {
    const {
      todos,
      projects,
      currentProjectId,
      completeTodo,
      editTodo,
    } = this.props;
    const { loading } = this.state;
    const incompleteTodos = todos.filter(t => t.complete === false);
    const completedTodos = todos.filter(t => t.complete === true);
    return (
      <React.Fragment>
        <TodoListView
          incompleteTodos={incompleteTodos}
          currentProjectId={currentProjectId}
          projects={projects}
          completeTodo={completeTodo}
          editTodo={editTodo}
          loading={loading}
        />
        <CompletedTodoListView
          completedTodos={completedTodos}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}

export default withTodo(withProject(TodoList));
