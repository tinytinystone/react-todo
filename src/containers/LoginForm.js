import React, { Component } from 'react';

import LoginFormView from '../components/LoginFormView';
import { withUser } from '../contexts/UserContext';

class LoginForm extends Component {
  render() {
    const { login } = this.props;
    return <LoginFormView login={login} />;
  }
}

export default withUser(LoginForm);
