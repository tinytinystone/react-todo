import React, { Component } from 'react';
import classNames from 'classnames';
import s from './Nav.module.scss';
import api from '../api';
import ProjectForm from './ProjectForm';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      showProjectForm: false,
    };
  }
  async componentDidMount() {
    const { data: projects } = await api.get('projects');
    /*
      REVIEW:
      위 projects는 axios에서 새로 만들어준 배열이기 때문에,
      명시적으로 slice를 해 줄 필요가 없습니다.
     */
    this.setState({
      projects: projects.slice(),
    });
  }
  addProject = () => {
    this.setState(prevState => ({
      showProjectForm: !prevState.showProjectForm,
    }));
  };
  render() {
    return (
      <nav className={s.nav}>
        <ul className={s.topFilters}>
          <Link to={'/projects/' + 1}>
            <li>관리함</li>
          </Link>
          <li>오늘</li>
          <li>다음 7일</li>
        </ul>
        <div className={s.panels}>
          <div className={s.project}>
            <span className={s.panelSummary}>프로젝트</span>
            {this.state.showProjectForm && <ProjectForm />}
            <ul>
              {this.state.projects.map(p => (
                <Link to={'/projects/' + p.id} key={p.id}>
                  <li key={p.id}>{p.title}</li>
                </Link>
              ))}
            </ul>
            <button onClick={this.addProject}>+</button>
          </div>
        </div>
        <div className={s.panels}>
          <span className={s.panelSummary}>라벨</span>
        </div>
        <div className={s.panels}>
          <span className={s.panelSummary}>필터</span>
        </div>
      </nav>
    );
  }
}
