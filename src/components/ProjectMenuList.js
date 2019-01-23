import React, { Component } from 'react';
import s from './ProjectMenuList.module.scss';
import { withProject } from '../contexts/ProjectContext';

class ProjectMenuList extends Component {
  handleDeleteProject = () => {
    console.log('삭제');
  };
  render() {
    console.log(this.props);
    return (
      <nav className={s.container}>
        <ul>
          <li>위에 프로젝트 추가</li>
          <li>아래에 프로젝트 추가</li>
        </ul>
        <ul>
          <li>프로젝트 편집</li>
          <li>프로젝트 공유</li>
          <li>즐겨찾기에 추가</li>
        </ul>
        <ul>
          <li>이 프로젝트에 작업을 이메일 보내기</li>
          <li>프로젝트 캘린더 피드</li>
        </ul>
        <ul>
          <li>보관</li>
          <li onClick={this.handleDeleteProject}>프로젝트 삭제</li>
        </ul>
      </nav>
    );
  }
}

export default withProject(ProjectMenuList);
