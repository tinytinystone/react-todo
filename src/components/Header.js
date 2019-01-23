import React, { Component } from 'react';

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
      showQuickAddTask: false,
      showSetting: false,
      logoutSuccess: false,
    };
  }
  openAddTodoModal = () => {
    this.setState(prevState => ({
      showQuickAddTask: !prevState.showQuickAddTask,
    }));
    this.props.handleQuickTaskClick();
  };
  render() {
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
            <li className={s.item} onClick={this.openAddTodoModal}>
              +
            </li>
            <li
              className={s.item}
              onClick={() => {
                this.props.logout();
                alert('로그아웃 되었습니다.');
                this.setState({ logoutSuccess: true });
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
        </header>
        {this.state.toggleOn && <Nav />}
        {this.state.showSetting && <Setting />}
      </React.Fragment>
    );
  }
}

export default withUser(Header);
