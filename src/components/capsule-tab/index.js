import React, { PureComponent } from 'react';
import style from './index.module.scss';

class CapsuleTab extends PureComponent {
  render() {
    return (
      <section className={`${style['capsule-tab']}`}>Buy One Get One</section>
    );
  }
}

export default CapsuleTab;
