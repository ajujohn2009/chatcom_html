import React, { PureComponent } from 'react';
import style from './index.module.scss';

class TextTab extends PureComponent {
  render() {
    return (
      <section className={`${style['text-tab']} ${style['active']}`}>Breakfast</section>
    );
  }
}

export default TextTab;
