import React, { Component } from 'react';
import api from '../api';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const body = e.target.elements.body.value;
    const categoryId = this.state.category;
    const res = await api.post('/todos', {
      body,
      categoryId,
    });
  }
  async handleChange(e) {
    e.preventDefault();
    const category = parseInt(e.target.value);
    this.setState({
      category: category,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="body" />
        <select
          name="category"
          defaultValue="카테고리"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="카테고리" disabled>
            카테고리 선택
          </option>
          <option value="1">공부</option>
          <option value="2">집안일</option>
          <option value="3">쇼핑</option>
        </select>
        <button>전송</button>
      </form>
    );
  }
}
