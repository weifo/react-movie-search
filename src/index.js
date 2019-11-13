import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-main';
//import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/main.css";

//import 'whatwg-fetch';
//require('es6-promise').polyfill();
//import register from './serviceWorker';


window.React = React;

ReactDOM.render( <App /> , document.getElementById('app'));
//register();
