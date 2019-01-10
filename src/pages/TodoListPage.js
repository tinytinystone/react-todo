import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';
import withRouter from 'react-router/withRouter';

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
    const { match } = this.props;
    return (
      <Layout>
        <TodoList key={match.params.projectId} />
        <button onClick={this.handleClick}>작업 추가</button>
        {this.state.showForm && (
          <TodoForm currentProjectId={match.params.projectId} />
        )}
      </Layout>
    );
  }
}

export default withRouter(TodoListPage);
