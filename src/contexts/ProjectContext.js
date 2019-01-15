import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import api from '../api';

const { Provider, Consumer } = React.createContext();

// 이미 로그인이 되어 있다는 가정 하에 짜여져 있는 컴포넌트
class ProjectProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 현상 -
      // 현재, 사용자가 바뀌어도, projects 배열이 바뀌지 않는 문제가 있다. <- 문제의 핵심
      // 예 1: 회원가입을 해도, projects는 여전히 빈 배열. 로그인 할 때에도 똑같은 문제 발생
      // 예 2: fds 사용자로 로그인/로그아웃 했다가, fds2 사용자로 로그인을 하면
      //       여전히 fds 사용자의 프로젝트 목록이 남아있음.
      projects: [],
      addProject: this.addProject,
      refreshPage: this.refreshPage,
    };
  }
  // 원인 -
  // refreshPage가 페이지 로딩 시 최초 한 번 실행된 이후,
  // 다시 동작할 수 있는 경우가 없다.
  // (ProjectProvider의 상태...)

  // 개선 방향 -
  // 로그아웃 -> 로그인, 로그인 -> 로그아웃 전환 시 어떤 일이 일어나야 할까?
  // 1. 로그아웃 -> 로그인 : refreshPage가 반드시 호출되어야 함.
  //     방안 1: 로그아웃 -> 로그인 시 강제로 refreshPage 함수를 직접 호출한다.
  //            하지만 그럴려면 ProjectProvider와 UserProvider의 부모자식관계를 바꾸어야 해서 안될것같다.
  //     방안 2: 로그아웃 상태일 때는 ProjectProvider를 그리지 않고 있다가,
  //            로그아웃 -> 로그인 시점에 ProjectProvider를 그려준다.
  async componentDidMount() {
    if (localStorage.getItem('token')) {
      this.refreshPage();
    }
  }
  addProject = async title => {
    await api.post('/projects', { title });
    this.refreshPage();
  };
  refreshPage = async () => {
    console.log('ProjectProvider refreshPage');
    const { data: projects } = await api.get('projects');
    this.setState({ projects });
  };
  render() {
    const projectWelcome = this.state.projects.find(
      p => p.title === '환영합니다👋'
    );
    return (
      <React.Fragment>
        {projectWelcome && (
          <Route
            exact
            path="/app"
            render={() => (
              <Redirect to={`/app/projects/${projectWelcome.id}`} />
            )}
          />
        )}
        <Provider value={this.state}>{this.props.children}</Provider>
      </React.Fragment>
    );
  }
}

function withProject(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { ProjectProvider, Consumer as ProjectConsumer, withProject };
