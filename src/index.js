import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Discovery from './Discovery';

const isDiscovery = window.location.href.includes('discovery');
console.log(isDiscovery);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {isDiscovery?<Discovery/>:<App />}
  </React.StrictMode>
);

reportWebVitals();
