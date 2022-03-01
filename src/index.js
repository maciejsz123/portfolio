import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import App from './App';
import store from './components/hangman/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> , document.getElementById('root'));
