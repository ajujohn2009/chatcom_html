import React, { PureComponent } from 'react';
import style from './index.module.scss';

class QuickActions extends PureComponent {
  render() {
    return (
      <section className={`${style['quick-actions']}`}>
        <i className={`${style['active']} icon-filter`}></i>
        <i className="icon-filter"></i>
        <i className="icon-filter"></i>
      </section>
    );
  }
}

export default QuickActions;
