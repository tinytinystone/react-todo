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
          AFTER REVIEW: Header 내부 child 삭제
        */}
        <Header key={location.pathname} />
        <main className={s.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
