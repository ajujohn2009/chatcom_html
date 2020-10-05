import React, { PureComponent } from 'react';
import style from './index.module.scss';

class TextArea extends PureComponent {
  render() {
    return (
      <textarea
        className={`${style['text-area']}`}
        placeholder="Type your cooking and delivery instructions here…"
      >
      </textarea>
    );
  }
}

export default TextArea;
