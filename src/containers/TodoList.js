import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoForm from '../components/TodoForm';
import api from '../api.js';

export default class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  async componentDidMount() {
    const { data: todos } = await api.get('todos');
    this.setState({
      todos: todos.slice(),
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <Layout>
        <h1>관리함</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" value={todo.complete} />
                    </td>
                    <td>
                      <span>{todo.body}</span>
                    </td>
                    <td>{todo.categoryId}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
        <TodoForm />
      </Layout>
    );
  }
}
