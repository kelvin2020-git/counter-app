import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp'


import './index.css';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#app');


 ReactDOM.render( <CounterApp />  , divRoot );
//ReactDOM.render( <PrimeraApp saludo='Hola, Soy Goku'/>  , divRoot );
