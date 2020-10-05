import React, { PureComponent } from 'react';
import style from './index.module.scss';

class StatusBar extends PureComponent {
  render() {
    return (
      <section className={`${style['status-bar']} row flex-c`}>
        <label className="row flex-c">
          <i className="icon-order"></i> 45 - 60 min
        </label>
        <label className="row flex-c">
          <i className="icon-order"></i> No minimum order
        </label>
      </section>
    );
  }
}

export default StatusBar;
