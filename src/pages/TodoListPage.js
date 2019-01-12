import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';
import { withRouter, Route } from 'react-router-dom';
import { TodoProvider } from '../contexts/TodoContext';
import { withUser } from '../contexts/UserContext';
import { Redirect } from 'react-router';

class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };
  render() {
    const {
      match: {
        params: { projectId },
      },
    } = this.props;
    // const projectWelcome = this.pros.projects.find(
    //   p => p.title === '환영합니다👋'
    // );
    return (
      <TodoProvider key={projectId} currentProjectId={projectId}>
        <Layout>
          <TodoList key={projectId} />
          <button onClick={this.handleClick}>작업 추가</button>
          {this.state.showForm && <TodoForm />}
        </Layout>
      </TodoProvider>
    );
  }
}

export default withUser(withRouter(TodoListPage));
