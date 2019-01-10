import React, { Component } from 'react';
import { withUser } from '../contexts/UserContext';
import { Redirect } from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerSuccess: false,
    };
  }

  handleRegister = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      await this.props.register(email, password);
      this.setState({
        registerSuccess: true,
      });
    } catch (error) {
      alert('오류가 발생했습니다. 다시 시도해 보세요.');
    }
  };
  render() {
    const { registerSuccess } = this.state;
    if (registerSuccess) {
      alert('회원가입에 성공했습니다.');
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <h2>회원가입</h2>
        <form onSubmit={this.handleRegister}>
          <label htmlFor="email">
            EMAIL <input type="text" name="email" />
          </label>
          <label htmlFor="password">
            PASSWORD <input type="password" name="password" />
          </label>
          <button>회원가입</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withUser(Register);
