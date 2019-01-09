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
        {/* 
          AFTER REVIEW: 
          `this가 고정된 함수`가 넘어가기만 하면 되므로,
          e 삭제
        */}
        <form onSubmit={this.handleSubmit}>
          {/*
            AFTER REVIEW:
            htmlFor는 id와 연결됨.
            label과 input을 연결하는 방법으로,
            label 태그 내에 input 태그를 넣는 방법 채택
          */}
          <label>
            EMAIL
            <input type="text" name="email" />
          </label>
          <label>
            PASSWORD
            <input type="password" name="password" />
          </label>
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
