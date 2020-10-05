import React, { PureComponent } from 'react';
import style from './index.module.scss';

class SwitchTab extends PureComponent {
  render() {
    return (
      <section className={`${style['switch-btn']} ${style['toggle']} row flex-c pos-r`}>
        <span className="pos-r">Delivery</span>
        <span className="pos-r">Self Pickup</span>
      </section>
    );
  }
}

export default SwitchTab;
