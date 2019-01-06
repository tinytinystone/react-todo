import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';

export default class TodoListPage extends Component {
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
    return (
      <Layout>
        <TodoList projectId={this.props.match.params.projectId} />
        <button onClick={this.handleClick}>작업 추가</button>
        {this.state.showForm && <TodoForm />}
      </Layout>
    );
  }
}
