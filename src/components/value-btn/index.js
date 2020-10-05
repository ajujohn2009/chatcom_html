import React, { PureComponent } from 'react';
import style from './index.module.scss';

class SelectBtn extends PureComponent {
  render() {
    return (
      <section className={`${style['value-btn']} row flex-c flex-sb`}>
        <i className="icon-minus"></i>
        <span className={`${style['value']}`}>10</span>
        <i className="icon-plus"></i>
      </section>
    );
  }
}

export default SelectBtn;
