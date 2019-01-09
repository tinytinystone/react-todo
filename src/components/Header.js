import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import ModalTodoForm from './ModalTodoForm';
import Nav from './Nav';
import Setting from './Setting';

import s from './Header.module.scss';
import { withUser } from '../contexts/UserContext';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
      showForm: false,
      showSetting: false,
    };
  }
  addTodo = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };
  render() {
    /*
      REVIEW:
      menuToggle 과 menuClose 클래스가 정확히 반대의 역할을 하고 있기 때문에,
      둘 중 하나를 없앨 수 있을 것 같습니다.
    */
    const toggleClass = classNames(
      s.menubar,
      { [s.menuToggle]: !this.state.toggleOn },
      { [s.menuClose]: this.state.toggleOn }
    );
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
              REVIEW:
              배열을 렌더링할 때가 아니면 key를 명시적으로 넘겨줄 필요가 없습니다.
              아래 li 엘리먼트의 key prop을 모두 지워도 정상적으로 작동합니다.
            */}
            <li key={1} className={s.item} onClick={this.addTodo}>
              +
            </li>
            {this.props.token ? (
              <li
                key={3}
                className={s.item}
                onClick={() => {
                  this.props.logout();
                  alert('로그아웃 되었습니다.');
                }}
              >
                logout
              </li>
            ) : (
              <li key={2} className={s.item}>
                <Link to="/login">login</Link>
              </li>
            )}
            <li key={4} className={s.item}>
              <FontAwesomeIcon icon="bell" />
            </li>
            <li
              key={5}
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
