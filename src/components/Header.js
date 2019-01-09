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
