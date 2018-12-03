import React, { Component } from 'react';

export default class TodoListView extends Component {
  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
