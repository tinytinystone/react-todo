import React, { Component } from 'react';
import Header from './Header';
import { withRouter } from 'react-router';

import s from './Layout.module.scss';

class Layout extends Component {
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        {/* 
          REVIEW:
          아래 Header 내부의 children이 필요없어 보입니다.
        */}
        <Header key={location.pathname} />
        <main className={s.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
