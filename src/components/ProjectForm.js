import React, { Component } from 'react';
import api from '../api';

export default class ProjectForm extends Component {
  /*
    REVIEW:
    이런 함수들을 context에 두면 될 것 같습니다. 
   */
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
