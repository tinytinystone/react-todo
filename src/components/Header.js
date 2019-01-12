import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import ModalTodoForm from './ModalTodoForm';
import Nav from './Nav';
import Setting from './Setting';

import s from './Header.module.scss';
import { withUser } from '../contexts/UserContext';
import { Redirect } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
      showForm: false,
      showSetting: false,
      logoutSuccess: false,
    };
  }
  addTodo = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };
  render() {
    /*
      AFTER REVIEW:
      menuToggle 과 menuClose 클래스가 정확히 반대의 역할을 하고 있기 때문에,
      menuClose 삭제
    */
    const toggleClass = classNames(s.menubar, {
      [s.menuToggle]: this.state.toggleOn,
    });
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <header className={s.header}>
          <div
            className={toggleClass}
            onClick={() => {
              this.setState(prevState => ({
                toggleOn: !prevState.toggleOn,
              }));
            }}
          />
          <input type="text" placeholder="빠른검색" className={s.quickFind} />
          <ul className={s.itemList}>
            {/* 
              AFTER REVIEW: 배열을 순회하는 것이 아니므로 key prop 삭제
            */}
            <li className={s.item} onClick={this.addTodo}>
              +
            </li>
            <li
              className={s.item}
              onClick={() => {
                this.props.logout();
                alert('로그아웃 되었습니다.');
                this.setState({
                  logoutSuccess: true,
                });
              }}
            >
              logout
            </li>
            <li className={s.item}>
              <FontAwesomeIcon icon="bell" />
            </li>
            <li
              className={s.item}
              onClick={() => {
                this.setState(prevState => ({
                  showSetting: !prevState.showSetting,
                }));
              }}
            >
              <FontAwesomeIcon icon="cog" />
            </li>
          </ul>
          {this.state.showForm && <ModalTodoForm addTodo={this.addTodo} />}
        </header>
        {this.state.toggleOn && <Nav />}
        {this.state.showSetting && <Setting />}
      </React.Fragment>
    );
  }
}

export default withUser(Header);
