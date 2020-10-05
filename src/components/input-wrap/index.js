import React, { PureComponent } from 'react';
import style from './index.module.scss';

class InputWrap extends PureComponent {
  render() {
    return (
      <section className={`${style['input-wrap']}`}>
        <input type="text" placeholder="Full Name" />
        <p className="error">I am an  error</p>
      </section>
    );
  }
}

export default InputWrap;
