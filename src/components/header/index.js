import React, { PureComponent } from 'react';
import style from './index.module.scss';
import SearchBar from '../search-bar';

class Header extends PureComponent {
  render() {
    return (
      <header className={`${style['header']} row flex-c flex-sb`}>
        <div className={`${style['menu-icon']}`}>
          <i className="icon-menu"></i>
        </div>
        <div className={`${style['logo']} row flex-c`}>
          <img
            src=""
            alt="logo"
          />
        </div>
        <div className={`${style['search-wrap']}`}>
          <SearchBar />
        </div>
      </header>
    );
  }
}

export default Header;
