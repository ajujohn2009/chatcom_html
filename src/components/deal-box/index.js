import React, { PureComponent } from 'react';
import style from './index.module.scss';

class DealBox extends PureComponent {
  render() {
    return (
      <section className={`${style['deal-box']}`}>
        <div className={`${style['dish-box']}`}>
          <div className={`${style['dish-img']}`}>
            <img
              src=""
              alt="Dish"
            />
          </div>
          <div className={`${style['price-box']}`}>AED 35.25</div>
        </div>
        <div className={`${style['dish-name']}`}>Roasted Chicken Wings</div>
      </section>
    );
  }
}

export default DealBox;
