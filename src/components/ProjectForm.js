import React, { Component } from 'react';
import api from '../api';

export default class ProjectForm extends Component {
  handleProjectSubmit = async e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    await api.post('projects', {
      title,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleProjectSubmit}>
        <input type="text" name="title" />
        <button>프로젝트 추가</button>
      </form>
    );
  }
}
