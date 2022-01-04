import React from 'react';
import ReactDOM  from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';
import './index.css';

const diviRoot=document.querySelector('#root');
//ReactDOM.render(<PrimeraApp saludo="Hola, soy Naruto"/>,diviRoot)
ReactDOM.render(<CounterApp />, diviRoot);