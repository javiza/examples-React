import React from 'react';
import ReactDOM from 'react-dom';
// ! añadimos bootstrap encima debe ir de index.css para que no se pisen
import 'bootstrap/dist/css/bootstrap.css';
//
//bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
