import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyled = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-size: 16px;
  background: #20222A;
}
header{
  display: flex;
  align-items:center;
  img{
    width: 20vmin;
  }
}

`;
ReactDOM.render(
  <>
    <GlobalStyled />
    <App />
  </>,
  document.getElementById('root'));

