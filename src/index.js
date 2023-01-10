import React from 'react';
import ReactDOM from 'react-dom';
// ! añadimos bootstrap encima debe ir de index.css para que no se pisen
import 'bootstrap/dist/css/bootstrap.css';
//
//bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';

//para cambiar nuestro enrutado de appa a appRoutingOne debemos cambiar 
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutingOne />
  </React.StrictMode>,
  document.getElementById('root')
);
//recordar que en v6 de react-router-dom cambia la sintaxis del enrutado

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
