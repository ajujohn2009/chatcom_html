import React from 'react';
import './app.scss';
import Header from './components/header';
import DealBox from './components/deal-box';
import CapsuleTab from './components/capsule-tab';
import TextTab from './components/text-tab';
import ItemBox from './components/item-box';
import QuickActions from './components/quick-actions';
import StatusBar from './components/status-bar';
import ValueBtn from './components/value-btn';
import SelectBtn from './components/select-btn';
import RadioBtn from './components/radio-btn';
import CheckBtn from './components/check-btn';
import InputWrap from './components/input-wrap';
import SwitchTab from './components/switch-tab';


function App() {
  return (
    <div className="page-wrap">
      <Header />

      <StatusBar />

      <section className="content-box">
        <h2 className="main-title">Today's Deals</h2>
        <div className="row-scroll">
          <DealBox />
        </div>
      </section>

      <section className="content-box">
        <h2 className="main-title">Active Promos</h2>
        <div className="row-scroll">
          <CapsuleTab />
        </div>
      </section>

      <section className="filter-tab-wrap">
        <div className="row-scroll">
          <TextTab />
        </div>
      </section>
      <section className="row flex-c flex-sb pt12">
        <p className="p-text">Delivering ASAP, or choose a time</p>
        <div className="qc-wrap">
          <QuickActions />
        </div>
      </section>
      <ValueBtn />
      <SelectBtn />
      <RadioBtn />
      <CheckBtn />
      <InputWrap />
      <SwitchTab />
      <section className="content-box">
        <h2 className="main-title">Previous Orders</h2>
        <div className="item-wrap">
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>
      </section>

      <div className="btm-fixed">
        <button className="btn">I am a button</button>
      </div>
    </div>
  );
}

export default App;
