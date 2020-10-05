import React, { PureComponent } from 'react';
import style from './index.module.scss';

class SearchBar extends PureComponent {
  render() {
    return (
      <section className={`${style['search-bar']} pos-r`}>
        <input
          type="text"
          placeholder="Search here"
        />
        <i className="icon-search pos-a"></i>
      </section>
    );
  }
}

export default SearchBar;
