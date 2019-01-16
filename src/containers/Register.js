import React, { Component } from 'react';
import { withUser } from '../contexts/UserContext';
import { Redirect, Link } from 'react-router-dom';
import UserFormView from '../components/UserFormView';
import s from '../components/LoginFormView.module.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerSuccess: false,
    };
  }
  render() {
    const { registerSuccess } = this.state;
    if (registerSuccess) {
      alert('회원가입에 성공했습니다.');
      return <Redirect to="/" />;
    }
    return (
      <UserFormView func={this.props.register} buttonState="회원가입">
        <div className={s.help}>
          <p>
            계정이 있습니까?
            <Link to="/login">
              <span className={s.linkToRegister}>로그인</span>
            </Link>
          </p>
        </div>
      </UserFormView>
    );
  }
}

export default withUser(Register);
