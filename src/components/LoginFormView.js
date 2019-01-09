import React, { Component } from 'react';

export default class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    await this.props.onLogin(email, password);
  }
  render() {
    return (
      <>
        <h2>로그인</h2>
        {/* 
          아래 코드를 좀 더 짧게 쓸 수 있습니다.
          어쨌든 onSubmit에 `this가 고정된 함수`가 넘어가기만 하면 되기 때문입니다.
          <form onSubmit={this.onSubmit} />
        */}
        <form onSubmit={e => this.onSubmit(e)}>
          {/*
            REVIEW:
            for 어트리뷰트는 id를 가리키는 것입니다.
            따라서 아래 코드는 label과 input이 서로 연결되지 않은 상태입니다.
            연결을 시키려면, input에 id 어트리뷰트를 추가하거나,
            input 태그를 label 태그 내부터 넣는 방법이 있습니다.
            id 충돌 문제때문에 후자가 많이 활용되는 편입니다.
          */}
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" />
          <button>로그인</button>
        </form>
      </>
    );
  }
}
