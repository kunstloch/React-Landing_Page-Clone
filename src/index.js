import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { css, createGlobalStyle } from 'styled-components';
import backgroundOrange from './backgroundOrange.png';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 14px;
    font-family: 'Merriweather Sans',sans-serif;
    color: #777;
    background-image: url(${backgroundOrange});
    
    
  }
  h1 {
    
    font-size: 25px;
    font-weight: 700;
    color: #f1912d;
    font-family: "Merriweather sans";
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
        margin-top: 20px;
    margin-bottom: 10px;
    padding: 70px 0 30px 0;
    font-weight: 500;


  }
  h2 {
    font-size: 1.36em;
    font-weight: normal;
    font-family: inherit;
    line-height: 1.1;
    font-weight: normal;
    font-size: 1.36em;
    padding: 25px 0 25px 0;
    color: #f18f2d;
  }

  p {
    line-height: 2em;
    font-size: 16px;
    color: #777;
    font-family: 'Merriweather Sans',sans-serif;
    margin: 0 0 10px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding: 25px 0 25px 0;
    font-weight: 300;
    
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
