import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoForm from '../components/TodoForm';

export default class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          userId: 1,
          body: 'React 공부',
          complete: false,
          categoryId: 1,
        },
        {
          id: 2,
          userId: 1,
          body: 'Redux 공부',
          complete: false,
          categoryId: 1,
        },
      ],
    };
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
