import React, { PureComponent } from 'react';
import style from './index.module.scss';

class SelectBtn extends PureComponent {
  render() {
    return (
      <select className={`${style['select']}`}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    );
  }
}

export default SelectBtn;
