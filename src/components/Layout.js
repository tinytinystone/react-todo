import React, { Component } from 'react';
import Header from './Header';
// import Nav from './Nav';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>헤더</Header>
        {/* <Nav>좌측 네비게이션</Nav> */}
        {this.props.children}
      </React.Fragment>
    );
  }
}
