import React, { PureComponent } from 'react';
import style from './index.module.scss';

class ItemBox extends PureComponent {
  render() {
    return (
      <section className={`${style['item-box']}`}>
        <div className={`${style['img-box']} pos-r`}>
          <img
            className={`${style['item-img']} pos-a`}
            src=""
            alt="Dish"
          />
        </div>
        <div className={`${style['name-box']}`}>Falafeel Crunchy Burger</div>
        <div className={`${style['price-box']} row`}>
          <span className={`${style['offered-price']}`}>AED 75.60</span>
          <span className={`${style['real-price']}`}>AED 89.00</span>
        </div>
      </section>
    );
  }
}

export default ItemBox;
