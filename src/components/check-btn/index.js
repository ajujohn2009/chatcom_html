import React, { PureComponent } from 'react';
import style from './index.module.scss';

class CheckBtn extends PureComponent {
  render() {
    return (
      <section className={`${style['check-wrap']}`}>
        <input type="checkbox" name="checkbox" id="2" />
        <label for="2" className="row flex-c flex-sb">
          <span className={`${style['check-txt']}`}>Beach Tower, Dubai Marina</span>
          <span className={`${style['check-btn']} row flex-c`}></span>
        </label>
      </section>
    );
  }
}

export default CheckBtn;
