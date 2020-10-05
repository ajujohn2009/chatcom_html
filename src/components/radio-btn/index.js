import React, { PureComponent } from 'react';
import style from './index.module.scss';

class RadioBtn extends PureComponent {
  render() {
    return (
      <section className={`${style['radio-wrap']}`}>
        <input type="radio" name="radio" id="1" />
        <label for="1" className="row flex-c flex-sb">
          <span className={`${style['radio-txt']}`}>Beach Tower, Dubai Marina</span>
          <span className={`${style['radio-btn']} row flex-c`}></span>
        </label>
      </section>
    );
  }
}

export default RadioBtn;
