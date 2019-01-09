import React, { Component } from 'react';
import Header from './Header';
import s from './Layout.module.scss';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 
          REVIEW:
          아래 Header 내부의 children이 필요없어 보입니다.
        */}
        <Header>헤더</Header>
        <main className={s.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
