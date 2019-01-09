import React, { Component } from 'react';

export default class ProjectForm extends Component {
  handleProjectSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    this.props.addProject(title);
  };
  render() {
    return (
      <form onSubmit={e => this.handleProjectSubmit(e)}>
        <input type="text" name="title" />
        <button>프로젝트 추가</button>
      </form>
    );
  }
}
