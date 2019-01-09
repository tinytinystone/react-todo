import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess: false,
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      await this.props.login(email, password);
      this.setState({
        loginSuccess: true,
      });
    } catch (error) {
      alert('오류가 발생했습니다. 다시 시도해 보세요.');
    }
  };
  render() {
    const { loginSuccess } = this.state;
    if (loginSuccess) {
      alert('로그인에 성공했습니다.');
      return <Redirect to="/" />;
    }
    return (
      <>
        <h2>로그인</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" />
          <button>로그인</button>
        </form>
        <div>
          <p>아직 회원이 아니신가요?</p>
          <Link to="/register">
            <button>회원가입</button>
          </Link>
        </div>
      </>
    );
  }
}
