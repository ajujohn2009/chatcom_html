import React, { PureComponent } from 'react';
import style from './index.module.scss';

class PopupModal extends PureComponent {
  render() {
    return (
      <section className={`${style['popup-wrap']} ${style.show}`}>
        <div className={style.overlay} />
        <div className={style.popup}>
          <div className={style['popup-header']}>
            <h3 className={style['popup-title']}>Popup Title</h3>
            <div className={style['close-btn']}>
              <i className="icon-cross" />
            </div>
          </div>
          <div className={style['popup-content']} />
          <div className={style['popup-footer']} />
        </div>
      </section>
    );
  }
}

export default PopupModal;
