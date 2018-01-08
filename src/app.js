import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content';
import 'babel-polyfill';
import './css/style.css';
import './scss/style.scss';

export default class Hello extends Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}

render(<Hello />, document.getElementById('app'));
