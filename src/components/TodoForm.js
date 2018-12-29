import React, { Component } from 'react';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const body = e.target.elements.body.value;
    await api.post('/todos', {
      body,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name="body" />
          <input type="text" name="due-date" value="12월29일" />
        </div>
        <button>전송</button>
        <div>
          <span>
            <FontAwesomeIcon icon="calendar" />
          </span>
          <span>
            <FontAwesomeIcon icon="tag" />
          </span>
          <span>
            <FontAwesomeIcon icon="clock" />
          </span>
          <span>
            <FontAwesomeIcon icon="flag" />
          </span>
          <span>
            <FontAwesomeIcon icon="comment" />
          </span>
        </div>
      </form>
    );
  }
}
