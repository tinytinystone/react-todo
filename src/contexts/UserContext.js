import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      // localStorage에 저장된 토큰이 single source of truth.
      token: null,
      login: this.login,
      logout: this.logout,
      register: this.register,
    };
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ token: localStorage.getItem('token') });
    }
  }
  login = async (email, password) => {
    const { data } = await api.post('/auth/sign_in/', { email, password });
    localStorage.setItem('token', data);
    this.setState({ email, password, token: data });
  };
  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      email: null,
      password: null,
      token: null,
    });
  };
  register = async (email, password) => {
    const { data } = await api.post('auth/register', {
      email,
      password,
    });
    localStorage.setItem('token', data);
    this.setState({ email, password, token: data });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

UserProvider = withProject(UserProvider)

function withUser(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };
