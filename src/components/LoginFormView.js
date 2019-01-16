import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserFormView from './UserFormView';

import s from './LoginFormView.module.scss';

export default class LoginFormView extends Component {
  render() {
    return (
      <UserFormView func={this.props.login} buttonState="로그인">
        <div className={s.help}>
          <p>
            계정이 없습니까?
            <Link to="/register">
              <span className={s.linkToRegister}>회원가입</span>
            </Link>
          </p>
        </div>
      </UserFormView>
    );
  }
}
