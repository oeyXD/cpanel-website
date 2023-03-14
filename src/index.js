import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Talaga from "./Really"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './sample';
import Plot from './Plot';
import downloadKmlFile from './create-kml-file';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Talaga />
    <App />
    <Plot />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
